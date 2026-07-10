import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const TypingIndicator = () => {
  const dotVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="message-bubble-container typing-indicator"
    >
      <div className="avatar" style={{ backgroundColor: 'var(--secondary)'}}>
        <Bot size={20} />
      </div>
      <div className="message-bubble assistant">
        <div className="typing-dots">
          <motion.div
            variants={dotVariants}
            initial="initial"
            animate="animate"
            className="typing-dot"
          />
          <motion.div
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2, ...dotVariants.animate.transition }}
            className="typing-dot"
          />
          <motion.div
            variants={dotVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4, ...dotVariants.animate.transition }}
            className="typing-dot"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;