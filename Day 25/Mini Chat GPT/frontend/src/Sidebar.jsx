import { BotMessageSquare, FilePlus, Search, Settings, Trash2, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = ({ isOpen, setOpen }) => {
  const sidebarVariants = {
    open: { x: 0, width: '260px' },
    closed: { x: '-100%', width: 0 },
  };

  const navItemVariants = {
    open: { opacity: 1, x: 0, transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { opacity: 0, x: -20 },
  };

  const recentChats = ["React Hooks Explained", "Python Sorting Algorithms", "SQL Joins", "CSS Flexbox vs Grid"];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div onClick={() => setOpen(false)} className="sidebar-overlay" />}
      
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="sidebar"
      >
        <div className="sidebar-header">
          <motion.div variants={navItemVariants} className="sidebar-logo">
            <BotMessageSquare style={{ height: '2rem', width: '2rem', color: 'var(--accent)' }} />
            <span>AI Assistant</span>
          </motion.div>
        </div>

        <motion.div variants={navItemVariants} style={{ padding: '1rem' }}>
          <button className="new-chat-btn">
            <FilePlus style={{ height: '1.25rem', width: '1.25rem' }} />
            New Chat
          </button>
        </motion.div>

        <div className="sidebar-content">
          <motion.div variants={navItemVariants} className="search-input">
            <Search className="search-icon" style={{ height: '1.25rem', width: '1.25rem' }} />
            <input
              type="text"
              placeholder="Search chats..."
            />
          </motion.div>

          <motion.h3 variants={navItemVariants} className="sidebar-heading">Recent</motion.h3>
          <motion.ul variants={navItemVariants} className="sidebar-list">
            {recentChats.map((chat, index) => (
              <motion.li key={index} variants={navItemVariants}>
                <a href="#">
                  {chat}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="sidebar-footer">
          <motion.ul variants={navItemVariants} className="sidebar-list">
            <motion.li variants={navItemVariants}>
              <a href="#" className="footer-link">
                <Trash2 style={{ height: '1.25rem', width: '1.25rem', color: '#ef4444' }} /> Clear Conversations
              </a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#" className="footer-link">
                <Settings style={{ height: '1.25rem', width: '1.25rem' }} /> Settings
              </a>
            </motion.li>
            <motion.li variants={navItemVariants}>
              <a href="#" className="footer-link">
                <User style={{ height: '1.25rem', width: '1.25rem' }} /> Profile
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;