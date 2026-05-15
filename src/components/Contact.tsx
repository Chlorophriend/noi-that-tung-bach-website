import React, { useState } from 'react';
import './Contact.css';
import { websiteContent } from '../data/content';

const Contact: React.FC = () => {
  const { contact } = websiteContent;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxDRrKEAM_M4XwiUN8wMev33KnFtxkHkkorY5M670tjx9IM7y4tNnHHF09iC0F_B_0qhA/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      address: formData.get('address'),
      message: formData.get('message'),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title">{contact.title}</h2>
          <div className="info-items">
            <p className="info-item">{contact.info.address}</p>
            <p className="info-item">{contact.info.phone}</p>
            <p className="info-item">{contact.info.email}</p>
            <p className="info-item highlight">{contact.info.zalo}</p>
          </div>
          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.904503219952!2d106.1397988749544!3d21.156198383389917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350b626391d6e9%3A0x7d17fb97d4b6d564!2zTuG7mWkgVGjhuqV0IFTDuW5nIELDoWNo!5e0!3m2!1sen!2s!4v1778840012988!5m2!1sen!2s" 
              width="100%" 
              height="300" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Văn phòng Nội thất Tùng Bách"
            ></iframe>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder={contact.form.namePlaceholder} 
              className="form-input" 
              required
              disabled={status === 'loading'}
            />
            <div className="form-row">
              <input 
                type="tel" 
                name="phone"
                placeholder={contact.form.phonePlaceholder} 
                className="form-input" 
                required
                disabled={status === 'loading'}
              />
              <input 
                type="email" 
                name="email"
                placeholder={contact.form.emailPlaceholder} 
                className="form-input" 
                disabled={status === 'loading'}
              />
            </div>
            <input 
              type="text" 
              name="address"
              placeholder={contact.form.addressPlaceholder} 
              className="form-input" 
              disabled={status === 'loading'}
            />
            <textarea 
              name="message"
              placeholder={contact.form.messagePlaceholder} 
              className="form-textarea"
              required
              disabled={status === 'loading'}
            ></textarea>
            
            <p className="privacy-text">
              {contact.form.privacyClause}
            </p>

            <button 
              type="submit" 
              className={`submit-button ${status === 'loading' ? 'loading' : ''}`}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Đang gửi...' : contact.form.submitButton}
            </button>

            {status === 'success' && (
              <p className="status-message success">Cảm ơn bạn! Chúng tôi đã nhận được yêu cầu và sẽ liên hệ sớm.</p>
            )}
            {status === 'error' && (
              <p className="status-message error">Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline trực tiếp.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
