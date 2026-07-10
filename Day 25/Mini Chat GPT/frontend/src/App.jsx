import { useState, useEffect, useRef } from 'react'
import Sidebar from './Sidebar' // Sidebar component import
import Navbar from './Navbar' // Navbar component import
import ChatArea from './ChatArea' // ChatArea component import
import { Menu } from 'lucide-react'
import './App.css';

const API_BASE_URL = 'http://localhost:5000/api';

export default function App() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Function to fetch all existing chats from the backend
  const fetchChats = async () => {
    setLoading(true); // Set loading state to true
    setError(''); // Clear any previous errors
    try {
      const response = await fetch(`${API_BASE_URL}/chat`); // Make GET request to fetch chats
      if (!response.ok) {
        throw new Error('Failed to fetch chats'); // Throw error if response is not OK
      }
      const data = await response.json(); // Parse JSON response
      // Sort data to show newest chat at the bottom, based on createdAt timestamp
      const newChats = data.data
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .flatMap(chat => [
          { role: 'user', content: chat.question, _id: chat._id + '_q' },
          { role: 'assistant', content: chat.answer, _id: chat._id + '_a' }
        ]);
      setChats(newChats);
    } catch (err) {
      setError(err.message); // Set error message if fetching fails
    } finally {
      setLoading(false); // Always set loading to false after request completes
    }
  };

  // Load chats on initial component mount
  useEffect(() => {
    fetchChats();
  }, []);

  // Handler for sending a new question to the AI
 const handleAskQuestion = async (question) => {
    if (!question.trim()) return;

    const userQuestion = {
      _id: `temp-user-${Date.now()}`,
      role: 'user',
      content: question
    };

    // Naya question add hone se PEHLE ki chat history nikal lein
    const chatHistory = chats.map(chat => ({
      role: chat.role,
      content: chat.content
    }));

    setChats((prev) => [...prev, userQuestion]); // Add user question to UI
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // YAHAN CHANGE KIYA HAI: Ab hum history array bhi bhej rahe hain
        body: JSON.stringify({ 
          question: question, 
          history: chatHistory 
        }), 
      });

      if (!response.ok) {
        throw new Error('Failed to get an answer.');
      }

      const result = await response.json(); 
      const newChatPair = result.data;

      const finalUserMessage = {
        _id: newChatPair._id + '_q',
        role: 'user',
        content: newChatPair.question
      };

      const assistantMessage = {
        _id: newChatPair._id + '_a',
        role: 'assistant',
        content: newChatPair.answer
      };

      setChats((prev) => {
        const newChats = prev.filter(m => m._id !== userQuestion._id);
        newChats.push(finalUserMessage, assistantMessage);
        return newChats;
      });
    } catch (err) {
      setError(err.message); 
      setChats((prev) => prev.filter((chat) => chat._id !== userQuestion._id));
    } finally {
      setLoading(false); 
    }
  };

  // Handler for deleting all chats from the backend
  const handleDeleteAllChats = async () => {
    if (window.confirm('Are you sure you want to delete all chats?')) { // Confirmation dialog
      setLoading(true); // Set loading state
      setError(''); // Clear any previous errors
      try {
        const response = await fetch(`${API_BASE_URL}/chat`, {
          method: 'DELETE', // Send a DELETE request to clear chats
        });
        if (!response.ok) {
          throw new Error('Failed to delete chats.'); // Throw error if response is not OK
        }
        setChats([]); // Clear all chats from the frontend state
      } catch (err) {
        setError(err.message); // Set error message if deletion fails
      } finally {
      setLoading(false);
      }
    }
  };

  return (
    <div className="app-container">
      {/* Mobile Sidebar Toggle Button */}
      <button 
        onClick={() => setSidebarOpen(!isSidebarOpen)} 
        className="mobile-sidebar-toggle"
      >
        <Menu style={{ height: '1.5rem', width: '1.5rem', color: 'var(--main-text)' }} />
      </button>

      <Sidebar isOpen={isSidebarOpen} setOpen={setSidebarOpen} /> {/* Sidebar component */}
      <div className="main-content">
        <Navbar onDeleteAllChats={handleDeleteAllChats} disabled={loading} /> {/* Navbar component with delete functionality */}
        <main className="chat-area-wrapper">
          <ChatArea chats={chats} loading={loading} onSend={handleAskQuestion} error={error} /> {/* ChatArea component */}
        </main>
      </div>
    </div>
  );
}
