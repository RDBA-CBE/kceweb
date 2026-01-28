"use client";

import React, { useState, useEffect } from 'react';
import './LatestNews.css';

// --- Sub-Component: FeaturedNews (Cross-fade individual item) ---
const FeaturedNewsItem = ({ data, isActive }) => (
  <div className={`featured-story ${isActive ? 'active' : 'inactive'}`}>
    <p className="featured-news-date">{data.date}</p>
    <div className="featured-news-image">
      <img src={data.image} alt={data.title} />
    </div>
    <h2 className="featured-news-title">{data.title}</h2>
    <p className="featured-news-description">{data.description}</p>
    <button className="btn-primary">KNOW MORE</button>
  </div>
);

// --- Sub-Component: NewsList (Marquee Logic) ---
const NewsList = ({ events }) => (
  <div className="news-list-sidebar">
    <div className="ticker-wrapper">
      <div className="ticker-track">
        {/* Double the array for a seamless loop */}
        {[...events, ...events].map((event, index) => (
          <div key={index} className="news-list-item">
            <div className="news-list-date-box">
              <span className="month">{event.month}</span>
              <span className="day">{event.day}</span>
            </div>
            <p className="news-list-item-title">{event.title}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="sidebar-footer">
      <button className="btn-primary btn-more">MORE NEWS</button>
    </div>
    <div className="decor-dots"></div>
  </div>
);

// --- Main Section Component ---
export default function LatestNewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredStories = [
    {
      date: "December 10, 2025",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      title: "Sustainable Materials Conference",
      description: "National Conference On 'sustainable Materials, Automotive Technologies And Artificial Intelligence (SMATAI)'"
    },
    {
      date: "January 15, 2026",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      title: "AI Integration in Automotive",
      description: "Workshop on Machine Learning Techniques for EEG Processing and AI optimization."
    },
    {
      date: "February 02, 2026",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      title: "Next-Gen Robotics Expo",
      description: "Showcasing the latest breakthroughs in collaborative robotics and automation."
    }
  ];

  const eventsData = [
    { month: "DEC", day: "18", title: "National Conference On Sustainable Materials (SMATAI)" },
    { month: "JAN", day: "11", title: "One Day National Level Workshop on Data Analytics" },
    { month: "JAN", day: "22", title: "Machine Learning Techniques for EEG Processing" },
    { month: "FEB", day: "05", title: "Future of Robotics and AI in Healthcare" },
    { month: "MAR", day: "12", title: "Annual Tech Innovation Summit 2026" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredStories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredStories.length]);

  return (
    <section className="latest-news-wrapper">
      <h1 className="latest-news-heading">Latest News</h1>
      
      <div className="latest-news-grid">
        {/* Left: Featured News Stack */}
        <div className="featured-news-column">
          <div className="transition-stack">
            {featuredStories.map((story, index) => (
              <FeaturedNewsItem 
                key={index} 
                data={story} 
                isActive={index === currentIndex} 
              />
            ))}
          </div>
        </div>

        {/* Right: Marquee Sidebar */}
        <NewsList events={eventsData} />
      </div>
    </section>
  );
}