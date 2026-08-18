'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './LatestNews.css';

const NEWS_URL =
  'https://learn.kce.ac.in/category/news-event/';

/* ======================================================
   GET MONTH / YEAR
====================================================== */

const getMonthLabel = (story) => {
  // First use actual date
  if (story.date) {
    const parsedDate = new Date(story.date);

    if (!Number.isNaN(parsedDate.getTime())) {
      return parsedDate.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      });
    }
  }

  // If date is empty, detect month/year from image URL
  // Example:
  // /uploads/2026/07/Picture1.png
  const imageMatch = story.image?.match(
    /\/(\d{4})\/(\d{2})\//
  );

  if (imageMatch) {
    const year = Number(imageMatch[1]);
    const month = Number(imageMatch[2]);

    const parsedDate = new Date(
      year,
      month - 1,
      1
    );

    return parsedDate.toLocaleDateString(
      'en-US',
      {
        month: 'long',
        year: 'numeric',
      }
    );
  }

  return 'Other News';
};

/* ======================================================
   SORT MONTHS - LATEST FIRST
====================================================== */

const getMonthSortValue = (label) => {
  if (label === 'Other News') {
    return 0;
  }

  const parsedDate = new Date(`1 ${label}`);

  if (Number.isNaN(parsedDate.getTime())) {
    return 0;
  }

  return parsedDate.getTime();
};

/* ======================================================
   LEFT SIDE ACCORDION
====================================================== */

const FeaturedNewsAccordion = ({ stories }) => {
  const groupedStories = stories.reduce(
    (groups, story) => {
      const month = getMonthLabel(story);

      if (!groups[month]) {
        groups[month] = [];
      }

      groups[month].push(story);

      return groups;
    },
    {}
  );

  const months = Object.keys(groupedStories).sort(
    (a, b) =>
      getMonthSortValue(b) -
      getMonthSortValue(a)
  );

  // Latest month opens automatically
  const [activeMonth, setActiveMonth] = useState(
    months[0] || ''
  );

  const toggleMonth = (month) => {
    setActiveMonth((current) =>
      current === month ? '' : month
    );
  };

  return (
    <div className='featured-news-area'>
      {/* ACCORDION */}
      <div className='featured-news-accordion'>
        {months.map((month) => {
          const items = groupedStories[month];
          const isOpen =
            activeMonth === month;

          return (
            <div
              key={month}
              className={`featured-month-item ${
                isOpen ? 'active' : ''
              }`}
            >
              {/* MONTH HEADER */}

              <button
                type='button'
                className='featured-month-header'
                onClick={() =>
                  toggleMonth(month)
                }
                aria-expanded={isOpen}
              >
                <div className='featured-month-heading'>
                  <span className='featured-month-name'>
                    {month}
                  </span>

                  <span className='featured-month-count'>
                    {items.length}
                  </span>
                </div>

                <span
                  className='featured-month-toggle'
                  aria-hidden='true'
                >
                  <span></span>
                  <span></span>
                </span>
              </button>

              {/* MONTH CONTENT */}

              <div className='featured-month-content'>
                <div className='featured-month-inner'>
                  <div className='featured-news-card-grid'>
                    {items.map(
                      (story, index) => (
                        <article
                          className='featured-news-card'
                          key={`${story.title}-${index}`}
                        >
                          {/* IMAGE */}

                          <div className='featured-card-image'>
                            <img
                              src={story.image}
                              alt={story.title}
                              loading='lazy'
                            />
                          </div>

                          {/* CONTENT */}

                          <div className='featured-card-content'>
                            {story.date && (
                              <p className='featured-card-date'>
                                {story.date}
                              </p>
                            )}

                            <h3 className='featured-card-title'>
                              {story.title}
                            </h3>

                            {story.description && (
                              <p className='featured-card-description'>
                                {
                                  story.description
                                }
                              </p>
                            )}
                          </div>
                        </article>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ONE BUTTON AFTER COMPLETE ACCORDION */}

      <div className='featured-news-footer'>
        <Link
          href={NEWS_URL}
          className='kce-btn-primary rbt-btn hover-icon-reverse mt-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='icon-reverse-wrapper'>
            <span className='btn-text'>
              Know More
            </span>

            <span className='btn-icon'>
              <i className='feather-arrow-right'></i>
            </span>

            <span className='btn-icon'>
              <i className='feather-arrow-right'></i>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

/* ======================================================
   RIGHT SIDE NEWS LIST
====================================================== */

const NewsList = ({ events }) => (
  <div className='news-list-sidebar'>
    {/* NEW HEADING INSIDE BLUE BOX */}

    <h3 className='upcoming-events-title'>
      Upcoming Events
    </h3>

    <div className='ticker-wrapper'>
      <div className='ticker-track'>
        {/* Double array for seamless loop */}

        {[...events, ...events].map(
          (event, index) => (
            <div
              key={index}
              className='news-list-item'
            >
              <div className='news-list-date-box'>
                <span className='month'>
                  {event.month}
                </span>

                <span className='day'>
                  {event.day}
                </span>
              </div>

              <p className='news-list-item-title'>
                {event.title}
              </p>
            </div>
          )
        )}
      </div>
    </div>

    <div className='sidebar-footer'>
      <Link
        href={NEWS_URL}
        className='kce-btn-primary rbt-btn hover-icon-reverse mt-4'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='icon-reverse-wrapper'>
          <span className='btn-text'>
            More News
          </span>

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

/* ======================================================
   MAIN COMPONENT
====================================================== */

export default function LatestNewsSection() {
  const featuredStories = [
    {
      date: 'August 08, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/08/ChatGPT-Image-Aug-14-2026-06_07_05-PM.png',
      title:
        '22nd Graduation Ceremony – Class of 2025',
      description: '',
    },

    {
      date: 'July 25, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture12.png',
      title:
        'Value Added Course on Embedded Intelligence – Department of Computer Science and Engineering',
      description: '',
    },

    {
      date: 'July 25, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture11.png',
      title:
        'Career Awareness Program on Prompt Engineering Is Not Enough: The New Full-Stack of AI – Department of Information Technology',
      description: '',
    },

    {
      date: 'July 25, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture10.png',
      title:
        'Strategies for Success in GATE and Competitive Examinations – Department of Electrical and Electronics Engineering',
      description: '',
    },

    {
      date: 'July 24, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture9.png',
      title:
        'Future Trends in Information Technology and Career Opportunities – Department of Computer Science and Engineering (Cyber Security)',
      description: '',
    },

    {
      date: 'July 20, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture8.png',
      title:
        'AI-Based Hands-on Training Organized by the Department of Artificial Intelligence and Data Science',
      description: '',
    },

    {
      date: 'July 20, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture7.png',
      title:
        'Department of Computer Science and Engineering Organizes Hands-on Training on Foundation of AWS Cloud Platform',
      description: '',
    },

    {
      date: 'July 17, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture6.png',
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
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture4.png',
      title:
        'Research and Development Cell Organizes Hands-on Workshop on Patent Filing and Publication',
      description: '',
    },

    {
      date: 'July 8, 2026',
      image:
        'https://learn.kce.ac.in/wp-content/uploads/2026/07/Picture3.png',
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
      title:
        'Eco Care Club - Seed Balls Preparation Event',
    },

    {
      month: 'JUL',
      day: '20',
      title:
        'Workshop on Foundation on AWS Cloud Platform',
    },

    {
      month: 'JUL',
      day: '20',
      title:
        'Workshop on AI-Based Hands-on Training',
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
      title:
        'Workshop on Rebar Detailing and Bar Bending Schedule',
    },

    {
      month: 'JUL',
      day: '24',
      title:
        'Association and Club Inauguration',
    },

    {
      month: 'JUL',
      day: '25',
      title:
        'Value Added Course on Embedded Intelligence',
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
      title:
        'Workshop on Full Stack Web Development',
    },
  ];

  return (
    <section className='latest-news-wrapper'>
      <h2 className='latest-news-heading'>
        LATEST NEWS
      </h2>

      <div className='latest-news-grid'>
        {/* LEFT - ACCORDION */}

        <div className='featured-news-column'>
          <FeaturedNewsAccordion
            stories={featuredStories}
          />
        </div>

        {/* RIGHT - ORIGINAL MARQUEE */}

        <NewsList events={eventsData} />
      </div>
    </section>
  );
}