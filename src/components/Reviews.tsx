import React from 'react';
import './Reviews.css';
import { websiteContent } from '../data/content';

const Reviews: React.FC = () => {
  const { reviews } = websiteContent;

  return (
    <section id="reviews" className="reviews section-padding">
      <div className="container">
        <h2 className="section-title centered">{reviews.title}</h2>
        <div className="reviews-grid">
          {reviews.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="review-card">
              <div className="review-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="review-comment">"{testimonial.comment}"</p>
              <div className="review-author">
                <h4 className="author-name">{testimonial.name}</h4>
                <span className="author-role">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
