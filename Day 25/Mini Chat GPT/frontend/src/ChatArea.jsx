import { useEffect, useRef } from 'react';
import WelcomeScreen from './WelcomeScreen';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import { AnimatePresence } from 'framer-motion';

const ChatArea = ({ chats, loading, onSend, error }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Jab naya message aaye ya load ho, toh bottom wale div par smoothly scroll kare
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, loading]);

  return (
    <div className="chat-area">
      <div className="chat-scroll-area">
        <div className="chat-content">
          {chats.length === 0 && !loading && !error ? (
            <WelcomeScreen onPromptClick={onSend} />
          ) : (
            <div>
              <AnimatePresence>
                {chats.map((chat) => (
                  <MessageBubble key={chat._id} message={chat} />
                ))}
              </AnimatePresence>
              {loading && <TypingIndicator />}
              
              {/* Ye invisible div scroll target ka kaam karega */}
              <div ref={messagesEndRef} style={{ height: '1px' }} />
            </div>
          )}
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
      <ChatInput onSend={onSend} disabled={loading} />
    </div>
  );
};

export default ChatArea;