import React from 'react';
import './Footer.css';
import { websiteContent } from '../data/content';

const Footer: React.FC = () => {
  const { footer, header } = websiteContent;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">{header.logo}</h3>
          </div>
          <div className="footer-copyright">
            <p>{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
