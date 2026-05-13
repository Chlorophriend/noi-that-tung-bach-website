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
