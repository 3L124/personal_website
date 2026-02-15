import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Sidebar.css';

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <button 
        className="sidebar-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? '◀' : '▶'}
      </button>
      
      <div className={`sidebar-wrapper ${isOpen ? 'open' : 'closed'}`}>
        <aside className="sidebar">
          <div className="sidebar-content">
            <p className="sidebar-logo">3L124</p>
            
            <nav className="sidebar-nav">
              <Link to="/home" className={isActive('/home') ? 'active' : ''}>
                Home
              </Link>
              <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                About
              </Link>
              <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
                Projects
              </Link>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                Contact
              </Link>
            </nav>

            <div className="sidebar-social">
              <a 
                href="https://www.instagram.com/3L124" 
                target="_blank" 
                rel="noopener noreferrer"
                className="instagram-link"
              >
                @3L124
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
