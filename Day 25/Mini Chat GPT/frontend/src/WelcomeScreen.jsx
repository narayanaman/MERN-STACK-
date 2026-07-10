import { BotMessageSquare, Code, BookOpen, Database, Film } from 'lucide-react';
import { motion } from 'framer-motion';

const SuggestionCard = ({ icon, title, subtitle, onClick }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
    onClick={onClick}
    className="suggestion-card"
  >
    <div className="suggestion-card-content">
      <div className="suggestion-card-icon">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  </motion.div>
);

const WelcomeScreen = ({ onPromptClick }) => {
  const suggestions = [
    { icon: <BookOpen className="h-6 w-6 text-accent" />, title: "Explain React Hooks", subtitle: "and their rules" },
    { icon: <Code className="h-6 w-6 text-accent" />, title: "Write Python Code", subtitle: "for a web scraper" },
    { icon: <Database className="h-6 w-6 text-accent" />, title: "Generate SQL Query", subtitle: "to find top customers" },
    { icon: <Film className="h-6 w-6 text-accent" />, title: "Summarize a Movie Plot", subtitle: "e.g., Inception" },
  ];

  return (
    <div className="welcome-screen">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <BotMessageSquare style={{ height: '5rem', width: '5rem', margin: '0 auto 1rem', color: '#6b7280' }} />
        <h1>
          What can I help with today?
        </h1>
      </motion.div>
      
      <motion.div 
        className="suggestion-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.1 }}
      >
        {suggestions.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <SuggestionCard {...s} onClick={() => onPromptClick(`${s.title} ${s.subtitle}`)} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;