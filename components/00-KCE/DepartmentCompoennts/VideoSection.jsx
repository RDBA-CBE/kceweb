"use client";
import React from "react";

const VideoSection = ({ data }) => {
  if (!data?.items?.length) return null;

  const renderItem = (item) => {
    switch (item.type) {
      case "video":
        return (
          <div className="media-card media-video">
            <iframe
              src={`https://www.youtube.com/embed/${item.youtubeId}`}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <h6 className="media-title">{item.title}</h6>
          </div>
        );

      case "resource":
        return (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="media-card media-resource"
          >
            <div className="resource-icon">📘</div>
            <div className="resource-text">{item.label}</div>
          </a>
        );

      default:
        return null;
    }
  };

  return (
    <section className="video-section">
      <div className="video-container">
        <div className="media-grid">
          {data.items.map((item) => (
            <div key={item.id} className="media-col">
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
