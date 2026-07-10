import { Sun, Moon, Bell, User } from 'lucide-react';

const Navbar = ({ onDeleteAllChats, disabled }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>AI Assistant</span>
          <div className="online-status">
            <div className="online-indicator"></div>
            <span style={{ fontSize: '0.875rem', color: '#d1d5db' }}>Online</span>
          </div>
        </div>
        <button onClick={onDeleteAllChats} disabled={disabled} className="delete-btn">
          Delete All Chats
        </button>
        <div className="navbar-right">
          <button className="navbar-icon-btn">
            <Sun style={{ height: '1.25rem', width: '1.25rem' }} />
            {/* <Moon style={{ height: '1.25rem', width: '1.25rem' }} /> */}
          </button>
          <button className="navbar-icon-btn">
            <Bell style={{ height: '1.25rem', width: '1.25rem' }} />
          </button>
          <div className="avatar">
            <User style={{ height: '1.25rem', width: '1.25rem', color: 'white' }} />
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;