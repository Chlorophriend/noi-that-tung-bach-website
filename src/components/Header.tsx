import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { websiteContent } from '../data/content';
import logoImg from '../assets/logo.png';

const Header: React.FC = () => {
  const { header } = websiteContent;

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img src={logoImg} alt={header.logo} className="logo-img" />
            <span className="logo-text">{header.logo}</span>
          </Link>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            {header.nav.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
