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
    month: 'SEP',
    day: '21',
    title:
      'One-Week ATAL Offline FDP on AI-Driven Quantum Computing: Foundations and Real-World Applications',
    url:
      'https://learn.kce.ac.in/one-week-atal-offline-fdp-on-ai-driven-quantum-computing/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/09/One-Week-ATAL-1024x768.jpeg', // Add featured image URL
  },
 {
    month: 'SEP',
    day: '16',
    title:
      'Inaugural of Cyber Security Clubs & Awareness Programme on Women Cyber Safety',
    url:
      'https://learn.kce.ac.in/inaugural-of-cyber-security-clubs-awareness-programme-on-women-cyber-safety/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/09/women-819x1024.jpeg', // Add featured image URL
  },
  // SEP 11
{
    month: 'SEP',
    day: '11',
    title:
      'Hackverse 2.0 – External Hackathon',
    url:
      'https://learn.kce.ac.in/hackverse-2-0-external-hackathon/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-20-at-11.45.42-AM-1.jpeg', // Add featured image URL
  },


  {
    month: 'SEP',
    day: '11',
    title:
      'YUVA 2026 – Industry Expert Talk by Mr. Sathiyan Kaliyamoorthy',
    url:
      'https://learn.kce.ac.in/yuva-2026-industry-expert-talk-by-mr-sathiyan-kaliyamoorthy/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/09/Industry-Expert-Talk-683x1024.jpeg', // Add featured image URL
  },

  {
    month: 'SEP',
    day: '11',
    title:
      'YUVA 2026 – Motivational Session by Dr. N. Rajeshkumar',
    url:
      'https://learn.kce.ac.in/yuva-2026-motivational-session-by-dr-n-rajeshkumar/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/09/Motivational-Session-683x1024.jpeg', // Add featured image URL
  },

  {
    month: 'SEP',
    day: '11',
    title:
      'Career Pathways – Connecting Education, Skills and Future Opportunities',
    url:
      'https://learn.kce.ac.in/career-pathways-connecting-education-skills-and-future-opportunities/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/09/Career-Pathways-819x1024.jpeg', // Add featured image URL
  },

  {
    month: 'SEP',
    day: '11',
    title:
      'YUVA 2026 – First Year B.E./B.Tech. Induction Programme',
    url:
      'https://learn.kce.ac.in/yuva-2026-first-year-b-e-b-tech-induction-programme-sep11/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/09/kalai-819x1024.jpeg', // Add featured image URL
  },

  // SEP 10
  {
    month: 'SEP',
    day: '10',
    title:
      'KCE YUVA 2026 Freshmen Induction Programme for ECE & VLSI Students',
    url:
      'https://learn.kce.ac.in/kce-yuva-2026-freshmen-induction-programme-for-ece-vlsi-students/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/09/1styear-vlsi-819x1024.webp', // Add featured image URL
  },

  // SEP 09
  {
    month: 'SEP',
    day: '09',
    title:
      'YUVA 2026 – First Year B.E./B.Tech. Induction Programme – Civil, EEE & ME',
    url:
      'https://learn.kce.ac.in/yuva-2026-first-year-b-e-b-tech-induction-programme-civil-eee-me/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-09-at-11.26.07-AM-1024x798.jpeg', // Add featured image URL
  },

  {
    month: 'SEP',
    day: '09',
    title:
      'YUVA 2026 – First Year B.E./B.Tech. Induction Programme – EEE, Civil & ME',
    url:
      'https://learn.kce.ac.in/yuva-2026-induction-programme-eee-civil-me/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-09-at-11.26.10-AM-1024x774.jpeg', // Add featured image URL
  },

  // SEP 08
  {
    month: 'SEP',
    day: '08',
    title:
      'YUVA 2026: Welcoming the Next Generation of Tech Leaders at Karpagam College of Engineering',
    url:
      'https://learn.kce.ac.in/yuva-2026-welcoming-tech-leaders/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-08-at-2.32.06-PM.jpeg',
  },

  {
    month: 'SEP',
    day: '08',
    title:
      'YUVA 2026 – Freshmen Induction Programme for the 27th Batch B.E./B.Tech. Students',
    url:
      'https://learn.kce.ac.in/yuva-2026-freshmen-induction-programme-for-the-27th-batch-b-e-b-tech-students/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-08-at-11.23.35-AM.jpeg',
  },

  {
    month: 'SEP',
    day: '08',
    title:
      'YUVA 2026 – Freshmen Induction Programme - 27th Batch – First Year B.E./B.Tech',
    url:
      'https://learn.kce.ac.in/yuva-2026-first-year-b-e-b-tech-induction-programme/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/09/WhatsApp-Image-2026-09-08-at-11.23.34-AM.jpeg',
  },

  {
    month: 'SEP',
    day: '08',
    title:
      'YUVA 2026 – Freshmen Induction Programme – AI & Data Science and Information Technology',
    url:
      'https://learn.kce.ac.in/yuva-2026-freshmen-induction-programme/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/08/3.jpeg',
  },

  // SEP 07
  {
    month: 'SEP',
    day: '07',
    title:
      'YUVA 2026 – Freshmen Induction Programme – CSE & CSE (Cyber Security)',
    url:
      'https://learn.kce.ac.in/yuva-2026-freshmen-induction-programme/',
    image:
      'https://learn.kce.ac.in/wp-content/uploads/2026/08/3.jpeg',
  },

 

];

  /* ====================================================
     UPCOMING EVENTS
  ==================================================== */

const eventsData = [

       {
  month: 'SEP',
  day: '26',
  title: 'Freshers’ Day 2026 – Live in Concert',
  url: 'https://learn.kce.ac.in/freshers-day-2026-live-in-concert/',
},
     {
  month: 'SEP',
  day: '25',
  title: 'PG Induction Programme – MBA 2026',
  url: 'https://learn.kce.ac.in/pg-induction-programme-mba-2026/',
},
   {
  month: 'SEP',
  day: '25',
  title: 'NOVAH 2026 | PG Induction Programme for MCA 2026–2028',
  url: 'https://learn.kce.ac.in/novah-2026-pg-induction-programme-for-mca-2026-2028/',
},

   {
  month: 'SEP',
  day: '25',
  title: 'NOVAH 2026 | PG Induction Programme for MCA 2026–2028',
  url: 'https://learn.kce.ac.in/novah-2026-pg-induction-programme-for-mca-2026-2028/',
},
  {
  month: 'SEP',
  day: '24',
  title: 'PG Induction Programme 2026 | ALOHA x NOVAH | KCE',
  url: 'https://learn.kce.ac.in/pg-induction-programme-2026-aloha-x-novah-kce/',
},
{
  month: 'SEP',
  day: '25',
  title: 'The Big Bang Theory | 5th Installation Ceremony of Rotaract Club of KCE',
  url: 'https://learn.kce.ac.in/the-big-bang-theory-5th-installation-ceremony-of-rotaract-club-of-kce/',
},
{
  month: 'SEP',
  day: '25',
  title: 'Hackverse 2.0 | External Hackathon by Department of CSE, KCE',
  url: 'https://learn.kce.ac.in/hackverse-2-0-external-hackathon-by-department-of-cse-kce/',
},

  {
  month: 'SEP',
  day: '23',
  title: 'ALOHA 2026 & NOVAH 2026 – Inauguration of PG Programme 2026',
  url: 'https://learn.kce.ac.in/aloha-2026-novah-2026-inauguration-of-pg-programme-2026/',
},
{
  month: 'SEP',
  day: '23',
  title: 'ALOHA & NOVAH 2026',
  url: 'https://learn.kce.ac.in/aloha-novah-2026/',
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