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

{
  month: 'SEP',
  day: '02',
  title:
    'Smart India Internal Hackathon 2026 – Jury Evaluation Session',
  url:
    'https://learn.kce.ac.in/smart-india-internal-hackathon-2026-jury-evaluation-session/',
  image:
    'https://learn.kce.ac.in/wp-content/uploads/2026/09/smart-india.jpeg',
},

{
  month: 'SEP',
  day: '02',
  title:
    'Seminar on VLSI for Autonomous Systems',
  url:
    'https://learn.kce.ac.in/seminar-on-vlsi-for-autonomous-systems/',
  image:
    'https://learn.kce.ac.in/wp-content/uploads/2026/08/VLSI-workshop.jpeg',
},

{
  month: 'SEP',
  day: '02',
  title:
    'MoU Signing Ceremony – Aadyon AI Robotics, Coimbatore',
  url:
    'https://learn.kce.ac.in/mou-signing-ceremony/',
  image:
    'https://learn.kce.ac.in/wp-content/uploads/2026/08/VLSI-design.jpeg',
},

{
  month: 'SEP',
  day: '02',
  title:
    'Club Inauguration – Electronics Engineering (VLSI Design and Technology)',
  url:
    'https://learn.kce.ac.in/club-inaugurationvlsi-design-and-technology/',
  image:
    'https://learn.kce.ac.in/wp-content/uploads/2026/09/event-1.jpeg',
},

{
  month: 'SEP',
  day: '02',
  title:
    'Club Inauguration – Electronics and Communication Engineering',
  url:
    'https://learn.kce.ac.in/club-inauguration/',
  image:
    'https://learn.kce.ac.in/wp-content/uploads/2026/09/event-3.jpeg',
},


  
  // ...remaining older featuredStories
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
  url:
    'https://learn.kce.ac.in/yuva-2026-freshmen-induction-programme/',
},
  // {
  //   month: 'SEP',
  //   day: '10',
  //   title:
  //     'YUVA 2026 – Freshmen Induction Programme – ECE & Electronics Engineering (VLSI)',
  //   url: 'https://learn.kce.ac.in/yuva-2026-freshmen-induction-programme/',
  // },

  {
    month: 'SEP',
    day: '09',
    title:
      'YUVA 2026 – First Year B.E./B.Tech. Induction Programme – Civil, EEE & ME',
    url:
      'https://learn.kce.ac.in/yuva-2026-first-year-b-e-b-tech-induction-programme-civil-eee-me/',
  },

  {
    month: 'SEP',
    day: '09',
    title:
      'YUVA 2026 – First Year B.E./B.Tech. Induction Programme – EEE, Civil & ME',
    url:
      'https://learn.kce.ac.in/yuva-2026-induction-programme-eee-civil-me/',
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