"use client";

import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import { department } from "@/utils/constant.util";
import { useState, useEffect } from "react";
import { Target, Users, MessageSquare, Brain, ClipboardList, Link, Database, BarChart3, CheckCircle, FileText, Calendar, TrendingUp, Award, ChevronDown, ExternalLink, ChevronRight, Star, Trophy } from "lucide-react";

export default function IQACPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const menuItems = [
    { id: "overview", label: "Overview" },
    { id: "governance", label: "Governance" },
    { id: "reports", label: "Reports" },
    { id: "quality", label: "Quality" },
    { id: "accreditation", label: "Accreditation" }
  ];
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const tabsHeight = document.querySelector('.sticky-tabs')?.offsetHeight || 80;
      const elementPosition = element.offsetTop - tabsHeight - 20;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const tabsHeight = document.querySelector('.sticky-tabs')?.offsetHeight || 80;
      const scrollPosition = window.scrollY + tabsHeight + 50;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <InnerBanner
        data={{
          department_name: department.name,
          bannerImg: department.bannerImg,
        }}
      />
      <div className="sticky-tabs">
        <div className="container">
          <div className="tabs-wrapper">
            <button
              className="scroll-arrow scroll-left"
              onClick={() => {
                const nav = document.querySelector(".tabs-navigation");
                nav.scrollBy({ left: -200, behavior: "smooth" });
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <div className="tabs-navigation">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-tab ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveSection(item.id);
                    scrollToSection(item.id);
                  }}
                >
                  <span className="tab-text">{item.label}</span>
                </button>
              ))}
            </div>

            <button
              className="scroll-arrow scroll-right"
              onClick={() => {
                const nav = document.querySelector(".tabs-navigation");
                nav.scrollBy({ left: 200, behavior: "smooth" });
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        {/* OVERVIEW TAB */}
        <section id="overview" className="iqac-section">
          <div className="iqac-subsection">
            <div className="about-hero-modern">
              <div className="hero-left">
                <div className="hero-badge">
                  <span className="badge-icon">🏛️</span>
                  <span>Est. October 2015</span>
                </div>
                <h2>About IQAC</h2>
                <div className="hero-text">
                  <p>
                    To enhance the quality improvements in the academic process and also as a pre-accreditation exercise Internal Quality Assurance Cell (IQAC) was formed in the college in <strong>October 2015</strong>. The objective of the cell is to develop a system for conscious, consistent and catalytic improvement in the overall performance of the institution at all levels with the involvement of all stakeholders.
                  </p>
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">9+</span>
                    <span className="stat-label">Years Active</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Quality Focus</span>
                  </div>
                </div>
              </div>
              <div className="hero-right">
                <div className="naac-card">
                  <div className="card-header">
                    <div className="naac-logo">🏆</div>
                    <h3>NAAC Accreditation</h3>
                  </div>
                  <div className="grade-showcase">
                    <div className="grade-circle">
                      <span className="grade-text">A+</span>
                    </div>
                    <div className="grade-info">
                      <span className="cycle">Second Cycle</span>
                      <span className="date">27th December 2022</span>
                    </div>
                  </div>
                  <div className="committee-info">
                    <span className="committee-badge">137th Standing Committee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="iqac-subsection">
            <h2>Functions of IQAC</h2>
            <div className="functions-grid">
              <div className="function-item">
                <div className="function-icon"><Target size={24} /></div>
                <div className="function-content">
                  <h4>Quality Parameters</h4>
                  <p>To develop quality parameters for the activities of the Institution</p>
                </div>
              </div>
              <div className="function-item">
                <div className="function-icon"><Users size={24} /></div>
                <div className="function-content">
                  <h4>Student-Centric Environment</h4>
                  <p>To create a student-centric teaching environment conducive to imparting quality education</p>
                </div>
              </div>
              <div className="function-item">
                <div className="function-icon"><MessageSquare size={24} /></div>
                <div className="function-content">
                  <h4>Stakeholder Feedback</h4>
                  <p>To solicit, format and implement feedback/suggestions from stake holders on quality related affairs</p>
                </div>
              </div>
              <div className="function-item">
                <div className="function-icon"><Brain size={24} /></div>
                <div className="function-content">
                  <h4>Quality Consciousness</h4>
                  <p>To create quality consciousness among the stake holders especially students and both teaching and non-teaching faculty</p>
                </div>
              </div>
              <div className="function-item">
                <div className="function-icon"><ClipboardList size={24} /></div>
                <div className="function-content">
                  <h4>Process Documentation</h4>
                  <p>To document the steps taken and process implemented, leading to quality enhancement</p>
                </div>
              </div>
              <div className="function-item">
                <div className="function-icon"><Link size={24} /></div>
                <div className="function-content">
                  <h4>Coordination Hub</h4>
                  <p>To act as a nodal agency to coordinate quality related activities in the campus</p>
                </div>
              </div>
              <div className="function-item">
                <div className="function-icon"><Database size={24} /></div>
                <div className="function-content">
                  <h4>Data Management</h4>
                  <p>To maintain institutional data base through MIS and with ICT enabled</p>
                </div>
              </div>
              <div className="function-item">
                <div className="function-icon"><BarChart3 size={24} /></div>
                <div className="function-content">
                  <h4>AQAR Preparation</h4>
                  <p>To prepare annual quality assurance report (AQAR) for NAAC to be submitted at the end of each academic year</p>
                </div>
              </div>
            </div>
          </div>

          <div className="iqac-subsection">
            <h2>Strategies of IQAC</h2>
            <div className="strategies-horizontal">
              <div className="strategy-timeline">
                <div className="strategy-item">
                  <div className="strategy-circle">01</div>
                  <div className="strategy-box">
                    <h4>Academic Quality</h4>
                    <p>To ensure quality of academic programs.</p>
                  </div>
                </div>
                <div className="strategy-item">
                  <div className="strategy-circle">02</div>
                  <div className="strategy-box">
                    <h4>Modern Teaching</h4>
                    <p>To integrate modern methods of teaching and learning and monitor its effect on the student’s performance.</p>
                  </div>
                </div>
                <div className="strategy-item">
                  <div className="strategy-circle">03</div>
                  <div className="strategy-box">
                    <h4>Stakeholder Trust</h4>
                    <p>To instil confidence and credibility of evaluation procedure among stakeholders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GOVERNANCE TAB */}
        <section id="governance" className="iqac-section">
          <div className="iqac-subsection">
            <h2>IQAC Members</h2>
            <div className="members-grid">
              <div className="member-card leadership">
                <div className="member-badge">Chairperson</div>
                <h4>Dr. Karthigaikumar P</h4>
                <p>Principal</p>
              </div>
              <div className="member-card leadership">
                <div className="member-badge">Director</div>
                <h4>Dr. Jaganathan S</h4>
                <p>Director, IQAC</p>
              </div>
              <div className="member-card leadership">
                <div className="member-badge">Secretary</div>
                <h4>Dr. Tamilselvan V</h4>
                <p>Secretary, IQAC</p>
              </div>
            </div>
            
            <div className="members-categories">
              <div className="category-section">
                <h4>Management & External</h4>
                <div className="member-list">
                  <div className="member-item">
                    <span className="name">Shri. Murugaiah K</span>
                    <span className="role">Management Representative</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Dr. Palaniswamy M</span>
                    <span className="role">Academic Expert</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Harish Ravi</span>
                    <span className="role">Industry Nominee</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Antony Raj B</span>
                    <span className="role">Parent Nominee</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Mr. Suresh Kumar N</span>
                    <span className="role">Local Body Nominee</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Mr. Soundharrajan O</span>
                    <span className="role">Alumni Member</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Mr. Sangeethkumar Rajagopal</span>
                    <span className="role">Employer Nominee</span>
                  </div>
                </div>
              </div>
              
              <div className="category-section">
                <h4>Faculty Members</h4>
                <div className="member-list">
                  <div className="member-item">
                    <span className="name">Dr. Sophia S</span>
                    <span className="role">Dean (Academics)</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Dr. Sethuramalingam T K</span>
                    <span className="role">Controller of Examination</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Dr. Meera C</span>
                    <span className="role">Director, Management Studies</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Dr. Ravikumar K</span>
                    <span className="role">Head, Mechanical Engineering</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Dr. Deepa S</span>
                    <span className="role">Associate Professor, ECE</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Dr. Kiruthiga G</span>
                    <span className="role">Head, AI & DS</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Mr. Gowrishankar L</span>
                    <span className="role">Assistant Professor, S & H</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Mr. Rajapriya D</span>
                    <span className="role">Assistant Professor, CSE</span>
                  </div>
                </div>
              </div>
              
              <div className="category-section">
                <h4>Student Representatives</h4>
                <div className="member-list">
                  <div className="member-item">
                    <span className="name">Mr. Partha Sarathy S</span>
                    <span className="role">Department of EEE</span>
                  </div>
                  <div className="member-item">
                    <span className="name">Mr. Vino Paul</span>
                    <span className="role">Department of Mechanical Engineering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </section>

        {/* REPORTS TAB */}
        <section id="reports" className="iqac-section">
          <div className="modern-reports-layout">
            <div className="report-category">
              <div className="category-header">
                <div className="icon-circle">
                  <FileText size={24} />
                </div>
                <div className="header-info">
                  <h3>Annual Quality Assurance Report (AQAR)</h3>
                  <p>Comprehensive annual reports on institutional quality</p>
                </div>
              </div>
              <div className="reports-grid">
                <a href="#" className="report-card-modern">
                  <span className="report-title">AQAR 2022-2023</span>
                  <ChevronRight size={20} />
                  <span className="report-badge-corner">Latest</span>
                </a>
                <a href="#" className="report-card-modern">
                  <span className="report-title">AQAR 2021-2022</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern">
                  <span className="report-title">AQAR 2020-2021</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern">
                  <span className="report-title">AQAR 2019-2020</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern">
                  <span className="report-title">AQAR 2018-2019</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern">
                  <span className="report-title">AQAR 2017-2018</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern">
                  <span className="report-title">AQAR 2016-2017</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern">
                  <span className="report-title">AQAR 2015-2016</span>
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
            
            <div className="report-category">
              <div className="category-header">
                <div className="icon-circle">
                  <Calendar size={24} />
                </div>
                <div className="header-info">
                  <h3>Minutes of the Meeting</h3>
                  <p>Official meeting records and proceedings</p>
                </div>
              </div>
              <div className="reports-grid minutes">
                <a href="#" className="report-card-modern minutes-card">
                  <span className="report-title">IQAC 2023-2024</span>
                  <ChevronRight size={20} />
                  <span className="report-badge-corner current">Current</span>
                </a>
                <a href="#" className="report-card-modern minutes-card">
                  <span className="report-title">IQAC 2022-2023</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern minutes-card">
                  <span className="report-title">IQAC 2021-2022</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern minutes-card">
                  <span className="report-title">IQAC 2020-2021</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern minutes-card">
                  <span className="report-title">IQAC 2019-2020</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern minutes-card">
                  <span className="report-title">IQAC 2018-2019</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern minutes-card">
                  <span className="report-title">IQAC 2017-2018</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern minutes-card">
                  <span className="report-title">IQAC 2016-2017</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern minutes-card">
                  <span className="report-title">IQAC 2015-2016</span>
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY TAB */}
        <section id="quality" className="iqac-section">
          <div className="modern-reports-layout">
            <div className="report-category">
              <div className="category-header">
                <div className="icon-circle">
                  <Award size={24} />
                </div>
                <div className="header-info">
                  <h3>Quality & Best Practices</h3>
                  <p>Institutional excellence and distinctive practices</p>
                </div>
              </div>
              <div className="quality-practices-grid">
                <a href="#" className="quality-practice-card">
                  <div className="practice-icon">
                    <MessageSquare size={28} />
                  </div>
                  <div className="practice-content">
                    <h4>Feedback Analysis & Action Taken Report</h4>
                    <p>Comprehensive analysis of stakeholder feedback and institutional responses</p>
                  </div>
                  <ChevronRight size={20} className="practice-arrow" />
                </a>
                <a href="#" className="quality-practice-card">
                  <div className="practice-icon">
                    <Star size={28} />
                  </div>
                  <div className="practice-content">
                    <h4>Institutional Distinctiveness</h4>
                    <p>Unique features and special characteristics that distinguish our institution</p>
                  </div>
                  <ChevronRight size={20} className="practice-arrow" />
                </a>
                <a href="#" className="quality-practice-card">
                  <div className="practice-icon">
                    <Trophy size={28} />
                  </div>
                  <div className="practice-content">
                    <h4>Best Practices</h4>
                    <p>Innovative practices that enhance institutional effectiveness and excellence</p>
                  </div>
                  <ChevronRight size={20} className="practice-arrow" />
                </a>
              </div>
            </div>
            
            <div className="report-category">
              <div className="category-header">
                <div className="icon-circle">
                  <TrendingUp size={24} />
                </div>
                <div className="header-info">
                  <h3>Student Satisfaction Survey</h3>
                  <p>Annual student feedback and satisfaction analysis</p>
                </div>
              </div>
              <div className="reports-grid survey">
                <a href="#" className="report-card-modern survey-card">
                  <span className="report-title">KCE SSS Report Analysis 2023-24</span>
                  <ChevronRight size={20} />
                  <span className="report-badge-corner new">New</span>
                </a>
                <a href="#" className="report-card-modern survey-card">
                  <span className="report-title">KCE SSS Report Analysis 2022-23</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern survey-card">
                  <span className="report-title">KCE SSS Report Analysis 2021-22</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#" className="report-card-modern survey-card">
                  <span className="report-title">KCE SSS Report Analysis 2020-21</span>
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

       

        {/* ACCREDITATION TAB */}
        <section id="accreditation" className="iqac-section">
          <div className="modern-reports-layout">
            <div className="report-category">
              <div className="category-header">
                <div className="icon-circle nirf">
                  <TrendingUp size={24} />
                </div>
                <div className="header-info">
                  <h3>NIRF Ranking</h3>
                  <p>National Institutional Ranking Framework submissions and achievements</p>
                </div>
              </div>
              <div className="nirf-single-row">
                <a href="#" className="nirf-card-item">
                  <div className="nirf-card-header">
                    <TrendingUp size={32} />
                    <h4>NIRF Report 2025</h4>
                  </div>
                  <div className="nirf-card-footer">
                    <span>View Report</span>
                    <ChevronRight size={20} />
                  </div>
                  <div className="nirf-badge">New</div>
                </a>
                <a href="#" className="nirf-card-item">
                  <div className="nirf-card-header">
                    <TrendingUp size={32} />
                    <h4>NIRF 2025 - Engineering</h4>
                  </div>
                  <div className="nirf-card-footer">
                    <span>View Report</span>
                    <ChevronRight size={20} />
                  </div>
                </a>
                <a href="#" className="nirf-card-item">
                  <div className="nirf-card-header">
                    <TrendingUp size={32} />
                    <h4>NIRF 2025 - Overall</h4>
                  </div>
                  <div className="nirf-card-footer">
                    <span>View Report</span>
                    <ChevronRight size={20} />
                  </div>
                </a>
              </div>
            </div>

            <div className="report-category">
              <div className="category-header">
                <div className="icon-circle naac">
                  <Award size={24} />
                </div>
                <div className="header-info">
                  <h3>NAAC Accreditation</h3>
                  <p>National Assessment and Accreditation Council recognition and reports</p>
                </div>
              </div>
              <div className="naac-modern-cards">
                <a href="#" className="naac-card-item">
                  <div className="naac-card-header">
                    <FileText size={32} />
                    <h4>Facilities for E-content</h4>
                  </div>
                  <div className="naac-card-footer">
                    <span>Download PDF</span>
                    <ChevronRight size={20} />
                  </div>
                </a>
                <a href="#" className="naac-card-item">
                  <div className="naac-card-header">
                    <FileText size={32} />
                    <h4>PO & PSO</h4>
                  </div>
                  <div className="naac-card-footer">
                    <span>Download PDF</span>
                    <ChevronRight size={20} />
                  </div>
                </a>
                <a href="#" className="naac-card-item">
                  <div className="naac-card-header">
                    <FileText size={32} />
                    <h4>Research Ethics Policy</h4>
                  </div>
                  <div className="naac-card-footer">
                    <span>Download PDF</span>
                    <ChevronRight size={20} />
                  </div>
                </a>
              </div>
            </div>

            <div className="report-category">
              <div className="category-header">
                <div className="icon-circle audit">
                  <FileText size={24} />
                </div>
                <div className="header-info">
                  <h3>Audit Report</h3>
                  <p>Institutional audit and compliance reports</p>
                </div>
              </div>
              <div className="audit-modern-cards">
                <a href="#" className="audit-card-item">
                  <div className="audit-card-header">
                    <Calendar size={32} />
                    <h4>2023-2024</h4>
                  </div>
                  <div className="audit-card-footer">
                    <span>Download PDF</span>
                    <ChevronRight size={20} />
                  </div>
                  <div className="audit-badge">Latest</div>
                </a>
                <a href="#" className="audit-card-item">
                  <div className="audit-card-header">
                    <Calendar size={32} />
                    <h4>2022-2023</h4>
                  </div>
                  <div className="audit-card-footer">
                    <span>Download PDF</span>
                    <ChevronRight size={20} />
                  </div>
                </a>
                <a href="#" className="audit-card-item">
                  <div className="audit-card-header">
                    <Calendar size={32} />
                    <h4>2021-2022</h4>
                  </div>
                  <div className="audit-card-footer">
                    <span>Download PDF</span>
                    <ChevronRight size={20} />
                  </div>
                </a>
              </div>
            </div>

            <div className="report-category">
              <div className="category-header">
                <div className="icon-circle approvals">
                  <CheckCircle size={24} />
                </div>
                <div className="header-info">
                  <h3>Approvals</h3>
                  <p>Official approvals and affiliations</p>
                </div>
              </div>
              <div className="approvals-modern-cards">
                <a href="#" className="approval-card-item">
                  <div className="approval-card-header">
                    <CheckCircle size={32} />
                    <h4>AICTE EOA</h4>
                  </div>
                  <div className="approval-card-footer">
                    <span>View Document</span>
                    <ChevronRight size={20} />
                  </div>
                </a>
                <a href="#" className="approval-card-item">
                  <div className="approval-card-header">
                    <Award size={32} />
                    <h4>AU Affiliation</h4>
                  </div>
                  <div className="approval-card-footer">
                    <span>View Document</span>
                    <ChevronRight size={20} />
                  </div>
                </a>
                <a href="#" className="approval-card-item">
                  <div className="approval-card-header">
                    <Star size={32} />
                    <h4>UGC Autonomous</h4>
                  </div>
                  <div className="approval-card-footer">
                    <span>View Document</span>
                    <ChevronRight size={20} />
                  </div>
                </a>
              </div>
            </div>

            <div className="report-category">
              <div className="category-header">
                <div className="icon-circle undertakings">
                  <FileText size={24} />
                </div>
                <div className="header-info">
                  <h3>Undertakings</h3>
                  <p>Compliance undertakings and regulatory commitments</p>
                </div>
              </div>
              <div className="undertakings-modern-cards">
                <a href="#" className="undertaking-card-item">
                  <div className="undertaking-card-header">
                    <FileText size={32} />
                    <h4>UGC Undertaking</h4>
                  </div>
                  <div className="undertaking-card-footer">
                    <span>View Document</span>
                    <ChevronRight size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}