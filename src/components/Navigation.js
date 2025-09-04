import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'About Us', href: 'about', icon: '💡' },
    { label: 'Project', href: 'project', icon: '🚀' },
    { label: 'PISTA', href: 'pista', icon: '🎯' },
    { label: 'Platform', href: 'platform', icon: '🌐' },
    { label: 'CRF', href: 'crf', icon: '🔬' },
    { label: 'Model', href: 'model', icon: '📊' },
    { label: 'Members', href: 'members', icon: '👥' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <div className="logo-container">
            <span className="logo-icon">⚡</span>
            <span className="logo-text"><Link to="/">PISTA</Link></span>
          </div>
          <div className="brand-tagline">Adult Club Platform</div>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu desktop-menu">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.href} 
              className="nav-item"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              <div className="nav-item-bg"></div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="nav-cta">
          <button className="btn-join">
            <span className="btn-text">Join Now</span>
            <span className="btn-icon">✨</span>
            <div className="btn-glow"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">PISTA</span>
            </div>
          </div>
          <div className="mobile-menu-items">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.href} 
                className="mobile-nav-item"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ '--mobile-delay': `${index * 0.05}s` }}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="mobile-nav-label">{item.label}</span>
                <div className="mobile-nav-arrow">→</div>
              </Link>
            ))}
          </div>
          <div className="mobile-menu-footer">
            <button className="mobile-join-btn">
              <span>Join PISTA Community</span>
              <span>🚀</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="nav-bg-effects">
        <div className="nav-particles">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{ 
                '--delay': `${i * 0.5}s`,
                '--x': `${Math.random() * 100}%`
              }}
            ></div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;