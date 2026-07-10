import { User, Bot, Clipboard, RefreshCw, ThumbsUp, ThumbsDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  const code = String(children).replace(/\n$/, '');

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return !inline && match ? (
    <div className="code-block">
      <div className="code-header">
        <span>{match[1]}</span>
        <button onClick={handleCopy} className="copy-code-btn">
          <Clipboard size={14} /> Copy code
        </button>
      </div>
      <pre>
        <code {...props}>
          {children}
        </code>
      </pre>
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const MessageBubble = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`message-bubble-container ${isUser ? 'user' : 'assistant'}`}
    >
      {!isUser && (
        <div className="avatar" style={{ backgroundColor: 'var(--secondary)'}}>
          <Bot size={20} />
        </div>
      )}

      <div className={`message-bubble ${isUser ? 'user' : 'assistant'}`}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{ code: CodeBlock }}
        >
          {message.content}
        </ReactMarkdown>
        
        {!isUser && (
          <div className="message-actions">
            <button><ThumbsUp size={16} /></button>
            <button><ThumbsDown size={16} /></button>
            <button><RefreshCw size={16} /></button>
          </div>
        )}
      </div>

      {isUser && (
        <div className="avatar">
          <User size={20} />
        </div>
      )}
    </motion.div>
  );
};

export default MessageBubble;