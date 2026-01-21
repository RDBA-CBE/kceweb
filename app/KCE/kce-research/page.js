"use client";

import React, { useState, useEffect } from "react";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import { FileText, Mic, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import dataJson from "@/JSON/research.json"; // JSON file

const ResearchPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedCentre, setExpandedCentre] = useState(null);

  const { banner, menuItems, overview, committee, publications, projects, seedMoney, centres } = dataJson;

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const renderSection = (sectionId, title, content) => (
    <section id={sectionId} className="research-section">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="table-container">{content}</div>
    </section>
  );

  return (
    <>
      <InnerBanner data={banner} />

      {/* STICKY TABS */}
      <div className="sticky-tabs">
        <div className="section-wid">
          <div className="tabs-wrapper">
            <button className="scroll-arrow scroll-left" onClick={() => {
              document.querySelector('.tabs-navigation').scrollBy({ left: -200, behavior: 'smooth' });
            }}>◀</button>

            <div className="tabs-navigation">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  className={`nav-tab ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button className="scroll-arrow scroll-right" onClick={() => {
              document.querySelector('.tabs-navigation').scrollBy({ left: 200, behavior: 'smooth' });
            }}>▶</button>
          </div>
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="research-content">
        <div className="container">

          {/* RESEARCH OVERVIEW */}
          {renderSection('overview', 'Research Overview', (
            <div className="overview-table">
              <div className="overview-header">
                <div>S.No</div>
                <div>Description</div>
                <div>Details</div>
              </div>
              {overview.map((item, i) => (
                <div key={i} className={`overview-row ${item.sno === '' ? 'sub-row' : ''}`}>
                  <div>{item.sno}</div>
                  <div>{item.description}</div>
                  <div>{item.details}</div>
                </div>
              ))}
            </div>
          ))}

          {/* RESEARCH COMMITTEE */}
          {renderSection('committee', 'Research Committee', (
            <div className="committee-list">
              {committee.map((item, i) => (
                <div key={i} className="committee-member">
                  <div className="member-number">{item.sno}</div>
                  <div className="member-info">
                    <div className="member-header">
                      <h4 className="member-name">{item.name}</h4>
                      <span className={`role-tag ${item.role.toLowerCase()}`}>{item.role}</span>
                    </div>
                    <div className="member-details">
                      <div><strong>Designation:</strong> {item.designation}</div>
                      <div><strong>Institution:</strong> {item.institution}</div>
                      <div><strong>Cluster:</strong> {item.cluster}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* PUBLICATIONS */}
          {renderSection('publications', 'Publications', (
            <div className="publications-dashboard">
              {publications.map((item, i) => (
                <div key={i} className="publication-card">
                  <div className="card-year">{item.year}</div>
                  <div className="metrics-grid">
                    <div className="metric-item journals">
                      <FileText size={20} />
                      <div>{item.journal} Journals</div>
                    </div>
                    <div className="metric-item conferences">
                      <Mic size={20} />
                      <div>{item.conf} Conferences</div>
                    </div>
                    <div className="metric-item books">
                      <BookOpen size={20} />
                      <div>{item.book} Books</div>
                    </div>
                  </div>
                  <div className="card-total">Total: {item.journal + item.conf + item.book}</div>
                </div>
              ))}
            </div>
          ))}

          {/* RESEARCH PROJECTS */}
          {renderSection('projects', 'Research Projects', (
            <div className="projects-modern-table">
              {projects.map((item, i) => (
                <div key={i} className="table-data-row">
                  <div className="year-cell">{item.year}</div>
                  <div className="count-cell">{item.projects}</div>
                  <div className="amount-cell">₹{item.amount} Lakhs</div>
                </div>
              ))}
            </div>
          ))}

          {/* SEED MONEY */}
          {renderSection('seedmoney', 'Seed Money', (
            <div className="modern-seed-layout">
              {seedMoney.map((item, i) => (
                <div key={i} className="seed-row">
                  <div>{item.year}</div>
                  <div>{item.projects} Projects</div>
                  <div>₹{item.amount} Lakhs</div>
                </div>
              ))}
            </div>
          ))}

          {/* CENTRES OF EXCELLENCE */}
          <section id="centres" className="research-section">
            <h2>Centre of Excellence</h2>
            {centres.map((item, i) => (
              <div key={i} className={`accordion-item ${expandedCentre === i ? 'expanded' : ''}`}>
                <div className="accordion-header" onClick={() => setExpandedCentre(expandedCentre === i ? null : i)}>
                  <div>{item.sno}. {item.name} ({item.dept}) - {item.facilities.length} Equipment</div>
                  {expandedCentre === i ? <ChevronUp /> : <ChevronDown />}
                </div>
                {expandedCentre === i && (
                  <div className="accordion-content">
                    {item.facilities.map((f, idx) => (
                      <div key={idx} className="facility-card">⚡ {f}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>

        </div>
      </div>
    </>
  );
};

export default ResearchPage;
