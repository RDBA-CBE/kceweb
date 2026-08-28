'use client';

import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import Link from 'next/link';

import './LatestNews.css';


const NEWS_URL =
  'https://learn.kce.ac.in/category/news-event/';


/* ======================================================
   FEATURED NEWS HORIZONTAL SLIDER
====================================================== */

const FeaturedNewsSlider = ({ stories }) => {
  const sliderRef = useRef(null);

  const [activeIndex, setActiveIndex] =
    useState(0);


  /* ====================================================
     GET ALL CARDS
  ==================================================== */

  const getCards = () => {
    if (!sliderRef.current) {
      return [];
    }

    return Array.from(
      sliderRef.current.querySelectorAll(
        '.featured-slider-card'
      )
    );
  };


  /* ====================================================
     SCROLL TO SPECIFIC CARD
  ==================================================== */

  const scrollToCard = (index) => {
    const slider = sliderRef.current;

    if (!slider) return;


    const cards = getCards();

    if (!cards.length) return;


    let nextIndex = index;


    /* Loop slider */
    if (nextIndex < 0) {
      nextIndex = cards.length - 1;
    }

    if (nextIndex >= cards.length) {
      nextIndex = 0;
    }


    const card = cards[nextIndex];


    const sliderRect =
      slider.getBoundingClientRect();

    const cardRect =
      card.getBoundingClientRect();


    const targetLeft =
      slider.scrollLeft +
      cardRect.left -
      sliderRect.left;


    slider.scrollTo({
      left: targetLeft,
      behavior: 'smooth',
    });


    setActiveIndex(nextIndex);
  };


  /* ====================================================
     PREVIOUS
  ==================================================== */

  const handlePrevious = () => {
    scrollToCard(activeIndex - 1);
  };


  /* ====================================================
     NEXT
  ==================================================== */

  const handleNext = () => {
    scrollToCard(activeIndex + 1);
  };


  /* ====================================================
     UPDATE ACTIVE INDEX WHEN USER SWIPES
  ==================================================== */

  const handleSliderScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;


    const cards = getCards();

    if (!cards.length) return;


    const sliderRect =
      slider.getBoundingClientRect();


    let closestIndex = 0;

    let smallestDistance =
      Number.POSITIVE_INFINITY;


    cards.forEach((card, index) => {
      const cardRect =
        card.getBoundingClientRect();


      const distance = Math.abs(
        cardRect.left -
        sliderRect.left
      );


      if (
        distance <
        smallestDistance
      ) {
        smallestDistance =
          distance;

        closestIndex = index;
      }
    });


    setActiveIndex(
      closestIndex
    );
  };


  /* ====================================================
     RESET TO FIRST CARD WHEN DATA CHANGES
  ==================================================== */

  useEffect(() => {
    setActiveIndex(0);

    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
    }
  }, [stories]);


  return (
    <div className="featured-slider-area">

      {/* ================================================
          HEADER
      ================================================= */}

      <div className="featured-slider-header">

        <div className="featured-slider-heading-content">

       

        </div>


        {/* ================================================
            CONTROLS
        ================================================= */}

        <div className="featured-slider-controls">

          <div className="featured-slider-counter">

            <strong>
              {String(
                activeIndex + 1
              ).padStart(2, '0')}
            </strong>

            <span className="counter-divider">
              /
            </span>

            <span>
              {String(
                stories.length
              ).padStart(2, '0')}
            </span>

          </div>


          <button
            type="button"
            className="featured-slider-arrow"
            onClick={handlePrevious}
            aria-label="Previous news"
          >
            <i className="feather-arrow-left"></i>
          </button>


          <button
            type="button"
            className="featured-slider-arrow"
            onClick={handleNext}
            aria-label="Next news"
          >
            <i className="feather-arrow-right"></i>
          </button>

        </div>

      </div>


      {/* ================================================
          SLIDER
      ================================================= */}

      <div
        ref={sliderRef}
        className="featured-news-slider"
        onScroll={handleSliderScroll}
      >

        {stories.map(
          (story, index) => (

            <article
              key={`${story.title}-${index}`}
              className="featured-slider-card"
            >

              {/* IMAGE */}

              <div className="featured-slider-image">

                <img
                  src={story.image}
                  alt={story.title}
                  loading={
                    index < 2
                      ? 'eager'
                      : 'lazy'
                  }
                />


                <span className="featured-slider-number">

                  {String(
                    index + 1
                  ).padStart(2, '0')}

                </span>

              </div>


              {/* CONTENT */}

              <div className="featured-slider-content">

                {story.date && (

                  <div className="featured-slider-date">

                    <span className="featured-slider-date-icon">
                      <i className="feather-calendar"></i>
                    </span>

                    <span>
                      {story.date}
                    </span>

                  </div>

                )}


                <h3 className="featured-slider-card-title">
                  {story.title}
                </h3>


                {story.description && (

                  <p className="featured-slider-description">
                    {story.description}
                  </p>

                )}

              </div>

            </article>

          )
        )}

      </div>


      {/* ================================================
          PROGRESS
      ================================================= */}

      <div className="featured-slider-progress">

        <div className="featured-slider-progress-track">

          <span
            className="featured-slider-progress-value"
            style={{
              width: `${
                ((activeIndex + 1) /
                  stories.length) *
                100
              }%`,
            }}
          />

        </div>

      </div>


      {/* ================================================
          FOOTER
      ================================================= */}

      <div className="featured-news-footer">

        <Link
          href={NEWS_URL}
          className="kce-btn-primary rbt-btn hover-icon-reverse"
          target="_blank"
          rel="noopener noreferrer"
        >

          <span className="icon-reverse-wrapper">

            <span className="btn-text">
              View All News
            </span>

            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>

            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>

          </span>

        </Link>

      </div>

    </div>
  );
};



/* ======================================================
   RIGHT SIDE EVENTS LIST
====================================================== */

/* ======================================================
   RIGHT SIDE EVENTS LIST
====================================================== */

const NewsList = ({ events }) => {
  const shouldAnimate = events.length > 4;

  const EventItems = () => (
    <>
      {events.map((event, index) => (
        <div
          key={`${event.title}-${index}`}
          className="news-list-item"
        >
          <div className="news-list-date-box">
            <span className="month">
              {event.month}
            </span>

            <span className="day">
              {event.day}
            </span>
          </div>

          <div className="news-list-item-content">
            <a
              href={event.url || NEWS_URL}
              className="news-list-item-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              {event.title}
            </a>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="news-list-sidebar">
      <div className="events-heading-area">       

        <h3 className="events-title">
          Upcoming Events
        </h3>
      </div>

      <div
        className={`ticker-wrapper ${
          shouldAnimate ? "has-animation" : "no-animation"
        }`}
      >
        {shouldAnimate ? (
          <div className="ticker-track">
            {/* First complete set */}
            <div className="ticker-group">
              <EventItems />
            </div>

            {/* Exact duplicate for seamless loop */}
            <div
              className="ticker-group"
              aria-hidden="true"
            >
              <EventItems />
            </div>
          </div>
        ) : (
          <div className="ticker-static">
            <EventItems />
          </div>
        )}
      </div>

      <div className="sidebar-footer">
        <a
          href={NEWS_URL}
          className="kce-btn-primary rbt-btn hover-icon-reverse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-reverse-wrapper">
            <span className="btn-text">
              More News
            </span>

            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>

            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </span>
        </a>
      </div>

      <div className="decor-dots"></div>
    </div>
  );
};



/* ======================================================
   MAIN COMPONENT
====================================================== */

export default function LatestNewsSection() {


  /* ====================================================
     ALL FEATURED NEWS
  ==================================================== */

const featuredStories = [
  {
    date: 'August 21, 2026',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-20-at-11.45.42-AM.jpeg',
    title:
      'World Entrepreneur Day Revels & Inauguration of Startup Club',
    description: '',
    url:
      'https://learn.kce.ac.in/world-entrepreneur-day-revels-inauguration-of-startup-club/',
  },

  {
    date: 'August 08, 2026',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/08/ChatGPT-Image-Aug-14-2026-06_07_05-PM.png',
    title:
      '22nd Graduation Ceremony – Class of 2025',
    description: '',
  },

  {
    date: 'July 31, 2026',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/08/12_page-0001.jpg',
    title:
      'Beyond Education: Creating Social Impact through NGOs',
    description: '',
    url:
      'https://learn.kce.ac.in/beyond-education-creating-social-impact-through-ngos/',
  },

  {
    date: 'July 30, 2026',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/08/5_page-0001-724x1024.jpg',
    title:
      'Data Processing of Biomedical Signal and Images',
    description: '',
    url:
      'https://learn.kce.ac.in/data-processing-of-biomedical-signal-and-images/',
  },

  {
    date: 'July 29, 2026',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/08/16_page-0001-724x1024.jpg',
    title:
      'Aspire Higher: Higher Education Opportunities in Australia and New Zealand',
    description: '',
    url:
      'https://learn.kce.ac.in/aspire-higher-higher-education-opportunities-in-australia-and-new-zealand/',
  },

  {
    date: 'July 28, 2026',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/08/Poster-hod-cse_page-0001.jpg',
    title:
      'Karpagam College of Engineering Signs MoU with Towards Technology',
    description: '',
    url:
      'https://learn.kce.ac.in/karpagam-college-of-engineering-proudly-signed-a-memorandum-of-understanding-mou-with-towards-technology-on-28-07-2026/',
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
    date: 'July 08, 2026',
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



  /* ====================================================
     UPCOMING EVENTS
  ==================================================== */

const eventsData = [
  {
    month: 'SEP',
    day: '11',
    title: 'Hackverse 2.0 – External Hackathon',
    url: 'https://learn.kce.ac.in/hackverse-2-0-external-hackathon/',
  },

  {
    month: 'SEP',
    day: '10',
    title:
      'YUVA 2026 – Freshmen Induction Programme – ECE & Electronics Engineering (VLSI)',
    url: 'https://learn.kce.ac.in/yuva-2026-freshmen-induction-programme/',
  },

  {
    month: 'SEP',
    day: '09',
    title:
      'YUVA 2026 – Freshmen Induction Programme – EEE, Civil & Mechanical Engineering',
    url: 'https://learn.kce.ac.in/yuva-2026-freshmen-induction-programme/',
  },

  {
    month: 'SEP',
    day: '08',
    title:
      'YUVA 2026 – Freshmen Induction Programme – AI & Data Science and Information Technology',
    url: 'https://learn.kce.ac.in/yuva-2026-freshmen-induction-programme/',
  },

  {
    month: 'SEP',
    day: '07',
    title:
      'YUVA 2026 – Freshmen Induction Programme – CSE & CSE (Cyber Security)',
    url: 'https://learn.kce.ac.in/yuva-2026-freshmen-induction-programme/',
  },

  {
    month: 'AUG',
    day: '29',
    title:
      'One Day Seminar on Challenges in Fluid Flow Design over Drone Wings',
    url: 'https://learn.kce.ac.in/one-day-seminar-on-challenges-in-fluid-flow-design-over-drone-wings/',
  },

  {
    month: 'AUG',
    day: '29',
    title:
      'Unplug & Unwind – Awareness Program on Excessive Mobile Phone Usage',
    url: 'https://learn.kce.ac.in/unplug-unwind-awareness-program-on-excessive-mobile-phone-usage/',
  },

  {
    month: 'AUG',
    day: '29',
    title:
      'Workshop on Next-Gen AI: Practical Skills, Emerging Applications and Industry Impact',
    url: 'https://learn.kce.ac.in/next-gen-ai-practical-skills-emerging-applications-and-industry-impact/',
  },

];



  /* ====================================================
     OUTPUT
  ==================================================== */

  return (

    <section className="latest-news-wrapper">


      <div className="latest-news-section-header">

        <span className="latest-news-small-title">
          Discover KCE
        </span>


        <h2 className="latest-news-heading">
          Latest News 
        </h2>

      </div>


      <div className="latest-news-grid">


        {/* LEFT SIDE */}

        <div className="featured-news-column">

          <FeaturedNewsSlider
            stories={featuredStories}
          />

        </div>


        {/* RIGHT SIDE */}

        <NewsList
          events={eventsData}
        />


      </div>

    </section>

  );
}