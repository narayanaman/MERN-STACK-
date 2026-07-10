import { useState, useRef, useEffect } from 'react';
import { Paperclip, Mic, SendHorizonal } from 'lucide-react';
import { motion } from 'framer-motion';

const ChatInput = ({ onSend, disabled }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [message]);

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-input-container">
      <div className="chat-input-form">
        <motion.div 
          className="chat-input-wrapper"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <button className="chat-input-btn">
            <Paperclip style={{ height: '1.25rem', width: '1.25rem', color: '#9ca3af' }} />
          </button>
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message AI..."
            rows={1}
            className="chat-input-textarea"
            disabled={disabled}
          />
          <button className="chat-input-btn">
            <Mic style={{ height: '1.25rem', width: '1.25rem', color: '#9ca3af' }} />
          </button>
          <motion.button 
            onClick={handleSend}
            disabled={disabled || !message.trim()}
            className="p-3 rounded-full bg-purple-gradient disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SendHorizonal style={{ height: '1.25rem', width: '1.25rem', color: 'white' }} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatInput;