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
    { month: "JAN", day: "23", title: "From Classical to Quantum: Machine Learning in the Era of Quantum Computing" },
    { month: "DEC", day: "04", title: "Understanding Stocks, IPOs & Equity Market Instruments: A Beginner’s Roadmap" },
    { month: "DEC", day: "10", title: "7th National Level Management Fest – “Takshak 2025” at Karpagam College of Engineering (Autonomous)" },
    { month: "NOV", day: "14", title: "Workshop on “Click & Conquer: Digital Marketing Strategies”" },
    { month: "SEP", day: "26", title: "Debunking Menstrual Myths and Taboos" },
    { month: "AUG", day: "01", title: "Webinar on “Business Without Borders: Embracing Diversity in Leadership and Strategy”" },
    { month: "SEP", day: "27", title: "One-Day Village Immersion Program at Sokkanoor village" },
    { month: "SEP", day: "17", title: "Industrial visit for its students to Lakshmi Machine Works (LMW), TMD – Unit 1" },
    { month: "SEP", day: "17", title: "Report on IDEA TO IPO: THE STARTUP JOURNEY" },
    { month: "AUG", day: "1", title: "Report on Driving Logistics Efficiency in India: From Traditional Trucking to Tech-Driven Transport" },
    
   
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredStories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredStories.length]);

  return (
    <section className="latest-news-wrapper">
      <h2 className="latest-news-heading">LATEST NEWS</h2>
      
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