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
      date: 'July 25, 2026',
      image: 'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture12.png',
      title:
        'Value Added Course on Embedded Intelligence – Department of Computer Science and Engineering',
      description: '',
    },
    {
      date: 'July 25, 2026',
      image: 'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture11.png',
      title:
        'Career Awareness Program on Prompt Engineering Is Not Enough: The New Full-Stack of AI – Department of Information Technology',
      description: '',
    },
    {
      date: 'July 25, 2026',
      image: 'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture10.png',
      title:
        'Strategies for Success in GATE and Competitive Examinations – Department of Electrical and Electronics Engineering',
      description: '',
    },
    {
      date: 'July 24, 2026',
      image: 'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture9.png',
      title:
        'Future Trends in Information Technology and Career Opportunities – Department of Computer Science and Engineering (Cyber Security)',
      description: '',
    },
    {
      date: 'July 20, 2026',
      image: 'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture8.png',
      title:
        'AI-Based Hands-on Training Organized by the Department of Artificial Intelligence and Data Science',
      description: '',
    },
    {
      date: 'July 20, 2026',
      image: 'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture7.png',
      title:
        'Department of Computer Science and Engineering Organizes Hands-on Training on Foundation of AWS Cloud Platform',
      description: '',
    },
    {
      date: 'July 17, 2026',
      image: 'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture6.png',
      title:
        'Women Development Cell and Department of Information Technology Organize Workshop on Breast & Cervical Cancer Awareness',
      description: '',
    },
    {
      date: 'July 11, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture5-804x1024.png',
      title:
        'Department of Artificial Intelligence and Data Science Organizes Partial Industrial Delivery on Deep Learning',
      description: '',
    },
    {
      date: 'July 11, 2026',
      image: 'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture4.png',
      title:
        'Research and Development Cell Organizes Hands-on Workshop on Patent Filing and Publication',
      description: '',
    },
    {
      date: 'July 8, 2026',
      image: 'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture3.png',
      title:
        'The Karpagam Innovation Centre (KIC) Proudly Invites Students and Aspiring Entrepreneurs to Participate in STARTUP SPARK 2.0',
      description: '',
    },
    {
      date: '',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture2-819x1024.png',
      title:
        'Launch of the Certificate Programme in Banking, Finance and Insurance (CBFI) by Bajaj Finserv for the Batch 2025–27',
      description: '',
    },
    {
      date: '',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture1-823x1024.png',
      title:
        'Faculty members of Karpagam College of Engineering for the successful completion of the AICTE QIP PG Certificate Programme (January 2026 – June 2026)',
      description: '',
    },
  ];

  const eventsData = [
    {
      month: 'JUN',
      day: '30',
      title:
        'Workshop on "Bits to Qubits: A Hands-on Students Development Programme on Quantum Computing"',
    },
    {
      month: 'JUL',
      day: '08',
      title:
        'Student Development Programme: Launch of the Certificate Programme in Banking, Finance and Insurance (CBFI)',
    },
    {
      month: 'JUL',
      day: '11',
      title: 'Start-Up Spark 2.0',
    },
    {
      month: 'JUL',
      day: '11',
      title: 'Partial Industrial Delivery',
    },
    {
      month: 'JUL',
      day: '17',
      title:
        'Workshop on Pink Care Initiative Breast & Cervical Cancer Awareness',
    },
    {
      month: 'JUL',
      day: '17',
      title:
        'Guest Lecture on Beyond OpenAI: Building Custom Analytics Engines on Open-Source AI',
    },
    {
      month: 'JUL',
      day: '17',
      title: 'Eco Care Club - Seed Balls Preparation Event',
    },
    {
      month: 'JUL',
      day: '20',
      title: 'Workshop on Foundation on AWS Cloud Platform',
    },
    {
      month: 'JUL',
      day: '20',
      title: 'Workshop on AI-Based Hands-on Training',
    },
    {
      month: 'JUL',
      day: '22',
      title:
        'Seminar on Predictive Modeling Frameworks: Deploying Regression Algorithms via Scikit-Learn',
    },
    {
      month: 'JUL',
      day: '22',
      title:
        'Career Guidance Programme for Civil Engineering Students – KCEians By KCEian',
    },
    {
      month: 'JUL',
      day: '23',
      title: 'Workshop on Rebar Detailing and Bar Bending Schedule',
    },
    {
      month: 'JUL',
      day: '24',
      title: 'Association and Club Inauguration',
    },
    {
      month: 'JUL',
      day: '25',
      title: 'Value Added Course on Embedded Intelligence',
    },
    {
      month: 'JUL',
      day: '25',
      title:
        'Career Awareness Program on Prompt Engineering is Not Enough: The New Full-Stack of AI',
    },
    {
      month: 'JUL',
      day: '25',
      title:
        'Seminar on Strategies for Success in GATE and Competitive Examinations',
    },
    {
      month: 'JUL',
      day: '30',
      title: 'Workshop on Full Stack Web Development',
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
