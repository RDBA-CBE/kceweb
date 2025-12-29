
"use client"
import React from "react";
import { CheckCircle, Camera, Play, ZoomIn, ExternalLink } from "lucide-react";
import Gallery from "@/components/KCE/common/Gallery";

export default function ClubsPage() {
  return (
    <>
      <section className="clubs-hero-section">
        <div className="clubs-content-wrapper">
          <div className="container">
            <div className="clubs-text-content">
              <h1 className="clubs-main-title">
                Student Clubs & Campus Engagement
              </h1>
              <p className="clubs-description">
                KCE has many student clubs to connect, engage and explore the
                talents of the students! Student clubs allow for further
                exploration and discovery in academic and non- academic areas,
                enabling growth experiences and learning beyond the classroom
                setting. Through this, students are able to develop and hone
                their leadership skills, as well as appreciate the value of
                teamwork and cooperation.
              </p>
            </div>
          </div>
        </div>

        <div className="clubs-image-section">
          <img
            src="/images/kce/Rectangle 39922.png"
            alt="Student clubs gathering"
            className="clubs-hero-image"
          />
          <div className="clubs-quote-overlay">
            <div className="container">
              <blockquote className="clubs-quote">
                <span className="quote-text">
                  At KCE, you can pour your passion into any interest
                  imaginable....
                </span>
                <span className="quote-mark">""</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="clubs-listing-section">
        <div className="container">
          <h2 className="clubs-section-title">
            Take a peek at some of our clubs...
          </h2>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="clubs-column">
                <div className="club-item">
                  <CheckCircle size={20} className="club-icon" />
                  <span className="club-name">Nature Club</span>
                </div>
                <div className="club-item">
                  <CheckCircle size={20} className="club-icon" />
                  <span className="club-name">Photography Club</span>
                </div>
                <div className="club-item">
                  <CheckCircle size={20} className="club-icon" />
                  <span className="club-name">Film Makers Club</span>
                </div>
                <div className="club-item">
                  <CheckCircle size={20} className="club-icon" />
                  <span className="club-name">Food and Nutrition Club</span>
                </div>
                <div className="club-item">
                  <CheckCircle size={20} className="club-icon" />
                  <span className="club-name">Cycling Club</span>
                </div>
                <div className="club-item">
                  <CheckCircle size={20} className="club-icon" />
                  <span className="club-name">Yoga/ Health Club</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="clubs-column">
                <div className="club-item">
                  <CheckCircle size={20} className="club-icon" />
                  <span className="club-name">Journalism Club</span>
                </div>
                <div className="club-item">
                  <CheckCircle size={20} className="club-icon" />
                  <span className="club-name">
                    Free Thinkers and Sky Watching Club
                  </span>
                </div>
                <div className="club-item">
                  <CheckCircle size={20} className="club-icon" />
                  <span className="club-name">Ethnic Club</span>
                </div>
                <div className="club-item">
                  <CheckCircle size={20} className="club-icon" />
                  <span className="club-name">
                    Leadership and Toastmasters Club
                  </span>
                </div>
                <div className="club-item">
                  <CheckCircle size={20} className="club-icon" />
                  <span className="club-name">Music and Dance Club</span>
                </div>
                <div className="club-item">
                  <CheckCircle size={20} className="club-icon" />
                  <span className="club-name">
                    Drawing/ Painting/ Crafts Club
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="clubs-footer-text">
            Hundreds of events and programmes are held by these clubs around the
            year with a large number of students participate.
          </p>
        </div>
      </section>

      <Gallery
        images={[
          { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Nature Club Event' },
          { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Photography Workshop' },
          { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Film Making Session' },
          { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Sports Day' },
          { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Cultural Fest' },
          { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Tech Symposium' },
          { src: '/images/kce/b1-940x360-1-435x280.webp', alt: 'Tech Symposium' }

        ]}
        title="Gallery"
      />
    </>
  );
}
