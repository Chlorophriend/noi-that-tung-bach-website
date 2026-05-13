import React from 'react';
import './About.css';
import { websiteContent } from '../data/content';
import showroomImg from '../assets/showroom.jpg';

const About: React.FC = () => {
  const { about } = websiteContent;

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-container">
          <div className="about-image">
            <img 
              src={showroomImg} 
              alt="Văn phòng tư vấn Nội thất Tùng Bách" 
            />
          </div>
          <div className="about-content">
            <h2 className="section-title">{about.title}</h2>
            <p className="about-description">{about.description}</p>
            
            <div className="about-services">
              <h3>Dịch vụ của chúng tôi</h3>
              <ul>
                {about.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

            <div className="about-stats">
              {about.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-values">
          <div className="values-grid">
            {about.values.map((value, index) => (
              <div key={index} className="value-card">
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
