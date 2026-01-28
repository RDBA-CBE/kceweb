import React from 'react';

const FeaturedNews = ({ data }) => {
  return (
    <div className="featured-news-container fade-in-element">
      <p className="featured-news-date">{data.date}</p>
      <div className="featured-news-image">
        <img src={data.image} alt="Featured" />
      </div>
      <h2 className="featured-news-title">{data.title}</h2>
      <p className="featured-news-description">{data.description}</p>
      <button className="btn-primary">KNOW MORE</button>
    </div>
  );
};

export default FeaturedNews;