'use client';

import React, { useState, useEffect } from 'react';
import './LatestNews.css';
import Link from 'next/link';

// --- Sub-Component: FeaturedNews (Cross-fade individual item) ---
const FeaturedNewsItem = ({ data, isActive }) => (
  <div className={`featured-story ${isActive ? 'active' : 'inactive'}`}>
    <p className='featured-news-date'>{data.date}</p>
    <div className='featured-news-image'>
      <img src={data.image} alt={data.title} />
    </div>
    <h3 className='featured-news-title'>{data.title}</h3>
    <p className='featured-news-description'>{data.description}</p>

    <Link
      href='https://learn.kce.ac.in/category/news-event/'
      className='kce-btn-primary rbt-btn hover-icon-reverse mt-4'
      target='_blank'
    >
      <span className='icon-reverse-wrapper'>
        <span className='btn-text'>Know More</span>
        <span className='btn-icon'>
          <i className='feather-arrow-right'></i>
        </span>
        <span className='btn-icon'>
          <i className='feather-arrow-right'></i>
        </span>
      </span>
    </Link>
  </div>
);

// --- Sub-Component: NewsList (Marquee Logic) ---
const NewsList = ({ events }) => (
  <div className='news-list-sidebar'>
    <div className='ticker-wrapper'>
      <div className='ticker-track'>
        {/* Double the array for a seamless loop */}
        {[...events, ...events].map((event, index) => (
          <div key={index} className='news-list-item'>
            <div className='news-list-date-box'>
              <span className='month'>{event.month}</span>
              <span className='day'>{event.day}</span>
            </div>
            <p className='news-list-item-title'>{event.title}</p>
          </div>
        ))}
      </div>
    </div>
    <div className='sidebar-footer'>
      <Link
        href='https://learn.kce.ac.in/category/news-event/'
        className='kce-btn-primary rbt-btn hover-icon-reverse mt-4'
        target='_blank'
      >
        <span className='icon-reverse-wrapper'>
          <span className='btn-text'>More News</span>
          <span className='btn-icon'>
            <i className='feather-arrow-right'></i>
          </span>
          <span className='btn-icon'>
            <i className='feather-arrow-right'></i>
          </span>
        </span>
      </Link>
    </div>
    <div className='decor-dots'></div>
  </div>
);

// --- Main Section Component ---
export default function LatestNewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredStories = [
    {
      date: "June 29, 2026",
      image: "https://learn.kce.ac.in/wp-content/uploads/2026/07/29.06.2026-12-1229x1536.jpeg",
      title: "Anti-drug Awarenes Seminar & Taking Anti-drug Pledge ",
      description: ""
    },
    {
      date: "June 25, 2026",
      image: "https://learn.kce.ac.in/wp-content/uploads/2026/07/25.06.2026-1.jpeg",
      title: "International Day Against Drug Abuse and Illicit Trafficking 2026 Awareness Programme",
      description: ""
    },
    {
      date: "June 21, 2026",
      image: "https://learn.kce.ac.in/wp-content/uploads/2026/07/21.06.2026-1-1229x1536.jpeg",
      title: "International Day of Yoga-2026",
      description: ""
    },
    {
      date: "April 24, 2026",
      image: "https://learn.kce.ac.in/wp-content/uploads/2026/04/MAR.26.KCE-POSTER-11-2-819x1024.jpg",
      title: "Workshop on Deployment Ready: Dockerizing Your Spring Boot Applications” ",
      description: ""
    },
    {
      date: 'June 25, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/25.06.2026-1.jpeg',
      title:
        'International Day Against Drug Abuse and Illicit Trafficking 2026 Awareness Programme',
      description: '',
    },
    {
      date: 'June 21, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/21.06.2026-1.jpeg',
      title: 'International Day of Yoga-2026',
      description: '',
    },
    {
      date: 'June 18, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/18.06.2026-13.jpeg',
      title:
        'Women Safety Awareness Programme – Singappen Sirappu Athiradi Padai',
      description: '',
    },
    {
      date: 'June 1, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/AD-Workshop-on-30.06.26.jpeg',
      title:
        'Workshop on Bits to Qubits – Hands-on Student Development Programme on Quantum Computing',
      description: '',
    },
    {
      date: 'April 24, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/04/MAR.26.KCE-POSTER-11-2-1.jpg',
      title:
        'Workshop on Deployment Ready: Dockerizing Your Spring Boot Applications',
      description: '',
    },
    {
      date: 'December 20, 2025',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/02/DEC.KCE-POSTER-10-1.jpg',
      title:
        'Alumni Seminar on A Path for Career Opportunity with Entrepreneurship Development',
      description: '',
    },
    {
      date: 'December 20, 2025',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/02/DEC.KCE-POSTER-7.jpg',
      title:
        'Alumni Seminar on Java-Driven IoT: Scalable Solutions for Smart Devices',
      description: '',
    },
  ];

  const eventsData = [
     {
      month: "JUNE",
      day: "30",
      title:
        "Workshop on Bits to Qubits – Hands-on Student Development Programme on Quantum Computing",
    },
   
    {
      month: "JUNE",
      day: "18",
      title:
        "Women Safety Awareness Programme Singappen Sirappu Athiradi Padai",
    },
   
    {
      month: 'JUN',
      day: '29',
      title: 'Anti-drug Awareness Seminar & Taking Anti-drug Pledge',
    },
    {
      month: 'JUN',
      day: '25',
      title:
        'International Day Against Drug Abuse and Illicit Trafficking 2026 Awareness Programme',
    },
    {
      month: 'JUN',
      day: '21',
      title: 'International Day of Yoga-2026',
    },
    {
      month: 'JUN',
      day: '18',
      title:
        'Women Safety Awareness Programme – Singappen Sirappu Athiradi Padai',
    },
    {
      month: 'JUN',
      day: '01',
      title:
        'Workshop on Bits to Qubits – Hands-on Student Development Programme on Quantum Computing',
    },
    {
      month: 'APR',
      day: '24',
      title:
        'Workshop on Deployment Ready: Dockerizing Your Spring Boot Applications',
    },
    {
      month: 'JAN',
      day: '23',
      title:
        'From Classical to Quantum: Machine Learning in the Era of Quantum Computing',
    },
    {
      month: 'JAN',
      day: '7',
      title: 'MOU With RAM Kalam – Centre for Energy Consultancy and Training',
    },
    {
      month: 'DEC',
      day: '20',
      title:
        'Alumni Seminar on A Path for Career Opportunity with Entrepreneurship Development',
    },
    {
      month: 'DEC',
      day: '20',
      title:
        'Alumni Seminar on Java-Driven IoT: Scalable Solutions for Smart Devices',
    },
    {
      month: 'DEC',
      day: '10',
      title:
        '7th National Level Management Fest – “Takshak 2025” at Karpagam College of Engineering (Autonomous)',
    },
    {
      month: 'DEC',
      day: '04',
      title:
        'Understanding Stocks, IPOs & Equity Market Instruments: A Beginner’s Roadmap',
    },
    {
      month: 'NOV',
      day: '14',
      title: 'Workshop on “Click & Conquer: Digital Marketing Strategies”',
    },
    {
      month: 'OCT',
      day: '11',
      title: 'Seminar on Career Exploration and Planning',
    },
    {
      month: 'OCT',
      day: '07',
      title:
        'One Day Workshop on Transforming Industries through IoT and ESP32 for Smart Applications',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredStories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredStories.length]);

  return (
    <section className='latest-news-wrapper'>
      <h2 className='latest-news-heading'>LATEST NEWS</h2>

      <div className='latest-news-grid'>
        {/* Left: Featured News Stack */}
        <div className='featured-news-column'>
          <div className='transition-stack'>
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
