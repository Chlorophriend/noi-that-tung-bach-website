import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { websiteContent } from '../data/content';
import './ProjectDetail.css';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = websiteContent.portfolio.projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container section-padding text-center">
        <h2>Không tìm thấy dự án</h2>
        <Link to="/" className="hero-cta" style={{ marginTop: '2rem' }}>Quay lại trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-detail-header section-padding" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${project.image})` }}>
        <div className="container">
          <span className="portfolio-category">{project.category}</span>
          <h1 className="hero-title">{project.title}</h1>
        </div>
      </div>

      <div className="container section-padding">
        <div className="project-info">
          <p className="project-description">{project.description}</p>
        </div>

        {project.videoSrc && (
          <div className="project-video-section" style={{ marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Video thực tế</h3>
            <div className="project-video-container">
              {project.videoSrc.includes('youtube.com') || project.videoSrc.includes('youtu.be') ? (
                <div className="video-responsive">
                  <iframe
                    width="100%"
                    height="500"
                    src={project.videoSrc}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ borderRadius: '12px' }}
                  ></iframe>
                </div>
              ) : (
                <video 
                  className="detail-video" 
                  controls 
                  poster={project.poster}
                >
                  <source src={project.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        )}

        <div className="project-gallery">
          {project.gallery && project.gallery.length > 0 ? (
            project.gallery.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`${project.title} ${index + 1}`} loading="lazy" />
              </div>
            ))
          ) : !project.videoSrc && (
            <div className="gallery-placeholder">
              <img src={project.image} alt={project.title} />
              <p style={{ marginTop: '1rem', fontStyle: 'italic', opacity: 0.7 }}>
                Hình ảnh chi tiết đang được cập nhật...
              </p>
            </div>
          )}
        </div>

        <div className="detail-actions">
          <Link to="/" className="hero-cta">Quay lại trang chủ</Link>
          <a href="/#contact" className="hero-cta secondary">Liên hệ tư vấn</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
