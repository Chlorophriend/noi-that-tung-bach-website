import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import { websiteContent } from '../data/content';

const Portfolio: React.FC = () => {
  const { portfolio } = websiteContent;

  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title">{portfolio.title}</h2>
          <p className="section-subtitle">{portfolio.subtitle}</p>
        </div>
        <div className="portfolio-grid">
          {portfolio.projects.map((project) => (
            <Link key={project.id} to={`/du-an/${project.slug}`} className="portfolio-item">
              <div className="portfolio-media">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy" 
                  className="portfolio-img"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
