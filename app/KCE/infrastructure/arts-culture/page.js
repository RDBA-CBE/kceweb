import React from 'react';
import { Palette, Music, Users, Star, Calendar, Trophy, Heart, Sparkles } from 'lucide-react';
import '@/public/scss/kce/infrastructure/arts-culture.scss';

export default function ArtsCulturePage() {
  const culturalActivities = [
    { icon: <Music size={32} />, title: 'Music & Dance', desc: 'Express through rhythm and melody' },
    { icon: <Palette size={32} />, title: 'Arts & Crafts', desc: 'Create visual masterpieces' },
    { icon: <Users size={32} />, title: 'Drama & Theatre', desc: 'Storytelling through performance' },
    { icon: <Trophy size={32} />, title: 'Competitions', desc: 'Showcase your talents' }
  ];

  const festivals = [
    'Diwali Celebration', 'Pongal Festival', 'Holi Colors', 'Navratri Dance',
    'Christmas Joy', 'Eid Festivities', 'Independence Day', 'Republic Day'
  ];

  return (
    <>
      <section className="arts-hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={18} />
              <span>Arts & Culture</span>
            </div>
            <h1 className="hero-title">
              Beyond <span className="gradient-text">Academics</span>
              <br />Nurturing Creativity
            </h1>
            <p className="hero-description">
              Discover your artistic potential through our vibrant cultural programs designed to enhance creativity and personal growth.
            </p>
          </div>
        </div>
      </section>

      <section className="cultural-activities-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Cultural Excellence</h2>
            <p className="section-subtitle">Explore diverse opportunities for creative expression</p>
          </div>
          
          <div className="activities-grid">
            {culturalActivities.map((activity, index) => (
              <div key={index} className="activity-card">
                <div className="activity-icon">
                  {activity.icon}
                </div>
                <h3 className="activity-title">{activity.title}</h3>
                <p className="activity-desc">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="philosophy-content">
                <h2 className="philosophy-title">Our Cultural Philosophy</h2>
                <p className="philosophy-text">
                  At KCE, we believe that enhancing student skills requires opportunities to explore creativity. Cultural programs organized throughout the year encourage creative pursuits and nurture talent.
                </p>
                <p className="philosophy-text">
                  Students form teams and share responsibility in organizing events. We strongly feel that leisure, recreation, and extra-curricular activities are essential for peak performance.
                </p>
                <div className="achievement-highlight">
                  <Star size={24} className="highlight-icon" />
                  <span>Producing stars in arts and sports who shine brighter each day</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="philosophy-visual">
                <div className="visual-card">
                  <Heart size={48} className="visual-icon" />
                  <h3>Passion Driven</h3>
                  <p>Encouraging students to pursue their artistic passions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="festivals-section">
        <div className="container">
          <div className="festivals-header">
            <Calendar size={32} className="festivals-icon" />
            <h2 className="festivals-title">Festival Celebrations</h2>
            <p className="festivals-subtitle">All Indian festivals celebrated with enthusiasm and vigor</p>
          </div>
          
          <div className="festivals-grid">
            {festivals.map((festival, index) => (
              <div key={index} className="festival-item">
                <span className="festival-name">{festival}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
