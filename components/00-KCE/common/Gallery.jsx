import React from 'react';

const Gallery = ({ images = [], title = "Gallery" }) => {
  const getGridLayout = (count) => {
    if (count <= 4) return 'grid-small';
    if (count <= 8) return 'grid-medium';
    if (count <= 12) return 'grid-large';
    return 'grid-xlarge';
  };

  const defaultImages = [
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 1' },
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 2' },
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 3' },
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 4' },
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 5' },
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 6' },
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 7' },
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 8' },
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 9' },
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 10' },
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 11' },
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 12' },
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 13' },
    { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Campus Event 14' }
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;
  const gridClass = getGridLayout(galleryImages.length);

  return (
    <section className="dynamic-gallery container">
      <div className="container-fluid">
        <div className="gallery-hero">
          <h2 className="gallery-mega-title">{title}</h2>
        </div>
        
        <div className={`gallery-grid ${gridClass}`}>
          {galleryImages.map((image, index) => (
            <div key={index} className={`gallery-item item-${index + 1}`}>
              <div className="image-container">
                <img src={image.src} alt={image.alt} />
                <div className="hover-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;