import React, { useState, useEffect } from 'react';
import './Hero.css';
import { websiteContent } from '../data/content';

// Import images for the slideshow (updated to jpg after resizing)
import a10Bep from '../assets/hero-slides/a10-bep.jpg';
import a10Khach from '../assets/hero-slides/a10-khach.jpg';
import a10Ngu from '../assets/hero-slides/a10-ngu.jpg';
import a11_1 from '../assets/hero-slides/a11-1.jpg';
import a11_2 from '../assets/hero-slides/a11-2.jpg';

const slideshowImages = [a10Bep, a10Khach, a10Ngu, a11_1, a11_2];

const Hero: React.FC = () => {
  const { hero } = websiteContent;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      {slideshowImages.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <a href={hero.ctaLink} className="hero-cta">
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
