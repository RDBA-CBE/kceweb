"use client";

import React, { useState, useEffect } from "react";
import InnerBanner from "@/components/KCE/common/InnerBanner";
import { department } from "@/utils/constant.util";
import { FileText, Mic, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

const ResearchPage = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const [expandedCentre, setExpandedCentre] = useState(null)

  const menuItems = [
    { id: 'overview', label: "Research Overview" },
    { id: 'committee', label: "Research Committee" },
    { id: 'publications', label: "Publications" },
    { id: 'projects', label: "Research Projects" },
    { id: 'seedmoney', label: "Seed Money" },
    { id: 'centres', label: "Centre of Excellence" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const overviewData = [
    { sno: 1, description: 'No of Ph.D. Faculty Members', details: '96' },
    { sno: 2, description: 'No. of Approved guides by Anna University', details: '31' },
    { sno: 3, description: 'Number of Ph.D.s Produced', details: '' },
    { sno: '', description: '2011-2012', details: '2' },
    { sno: '', description: '2012-2013', details: '2' },
    { sno: '', description: '2013-2014', details: '7' },
    { sno: '', description: '2014-2015', details: '2' },
    { sno: '', description: '2015-2016', details: '11' },
    { sno: '', description: '2016-2017', details: '5' },
    { sno: '', description: '2017-2018', details: '6' },
    { sno: '', description: '2018-2019', details: '4' },
    { sno: '', description: '2019-2020', details: '8' },
    { sno: '', description: '2020-2021', details: '5' },
    { sno: '', description: '2021-2022', details: '11' },
    { sno: '', description: '2022-2023', details: '8' },
    { sno: '', description: '2023-2024*', details: '10' },
    { sno: '', description: '2024-2025', details: '12' },
    { sno: 4, description: 'Number of Ph.D. scholars registered and in progress', details: '110' },
    { sno: 5, description: 'Number of KCE faculty perusing Ph.D.', details: '103' },
    { sno: 6, description: 'Publications in journals', details: '209' },
    { sno: 7, description: 'Citation', details: '12346' },
    { sno: 8, description: 'h index', details: '56' },
    { sno: 9, description: 'i 10 Index', details: '235' }
  ]

  const committeeData = [
    { sno: 1, name: 'Dr. P.Karthigaikumar', designation: 'Principal', role: 'Chairman', institution: 'Karpagam College of Engineering, Coimbatore', cluster: 'ECE' },
    { sno: 2, name: 'Dr.V. Senthilkumar', designation: 'Professor, Department of Production Engineering', role: 'Member', institution: 'National Institute of Technology, Tiruchirappalli – 620 015, Tamil Nadu, INDIA', cluster: 'Mech. and Civil' },
    { sno: 3, name: 'Dr.D.Karthika Renuka', designation: 'Professor, Department of Information Technology', role: 'Member', institution: 'PSG College of Technology, Peelamedu, Coimbatore. TamilNadu-6410 04, India', cluster: 'CSE, IT, AI and CY' },
    { sno: 4, name: 'Dr.S.Balamurugan', designation: 'Prof/EEE (Chairperson)', role: 'Member', institution: 'Amritha Vishwa Vidyapeetham Ettimadai (P.O.) Coimbatore-641112', cluster: 'EEE,ECE and ETE' },
    { sno: 5, name: 'Dr. S Sofia', designation: 'Dean / Academics', role: 'Member', institution: 'Karpagam College of Engineering', cluster: 'ECE' },
    { sno: 6, name: 'Dr. K.Ravikumar', designation: 'Prof/MECH', role: 'Member', institution: 'Karpagam College of Engineering', cluster: 'MECH' },
    { sno: 7, name: 'Dr. J. Ganesh Murali', designation: 'AU Research Coordinator', role: 'Member', institution: 'Karpagam College of Engineering', cluster: 'MECH' },
    { sno: 8, name: 'Dr. C.Kumar', designation: 'Prof/EEE', role: 'Member', institution: 'Karpagam College of Engineering', cluster: 'EEE' },
    { sno: 9, name: 'Dr. C N.Vanitha', designation: 'Prof/IT', role: 'Member', institution: 'Karpagam College of Engineering', cluster: 'Computer Cluster' },
    { sno: 10, name: 'Dr. C.Meera', designation: 'Prof/MBA', role: 'Member', institution: 'Karpagam College of Engineering', cluster: 'MBA' },
    { sno: 11, name: 'Dr. P.Shanthi', designation: 'Prof/MCA', role: 'Member', institution: 'Karpagam College of Engineering', cluster: 'MCA' }
  ]

  const publicationData = [
    { year: 2022, journal: 256, conf: 82, book: 24 },
    { year: 2023, journal: 206, conf: 101, book: 65 },
    { year: 2024, journal: 209, conf: 282, book: 27 },
    { year: 2025, journal: 107, conf: 106, book: 12 }
  ]

  const projectData = [
    { year: '2024-25', projects: 18, amount: 93.67 },
    { year: '2023-24', projects: 12, amount: 91.41 },
    { year: '2022-23', projects: 14, amount: 78.02 },
    { year: '2021-22', projects: 11, amount: 28.58 },
    { year: '2020-21', projects: 10, amount: 53.58 },
    { year: '2019-20', projects: 7, amount: 98.79 },
    { year: '2018-19', projects: 5, amount: 14 }
  ]

  const seedMoney = [
    { year: '2024-25', projects: 11, amount: 17.39 },
    { year: '2023-24', projects: 9, amount: 15.38 },
    { year: '2022-23', projects: 28, amount: 20.58 },
    { year: '2021-22', projects: 10, amount: 6.16 },
    { year: '2020-21', projects: 28, amount: 27.24 },
    { year: '2019-20', projects: 12, amount: 9.03 },
    { year: '2018-19', projects: 10, amount: 10.85 }
  ]

  const centres = [
    { 
      sno: 1,
      dept: 'EEE', 
      name: 'BR Automation Lab', 
      facilities: [
        'Power panel pp45 Touch screen resistive display',
        'X20BR9300 –Bus receiver',
        'X20DI9371 – Digital input Module',
        'X20Do9322 – Digital Output Module',
        'X20AI2622 –Analog Input Module',
        'X20AO2622- Analog output module',
        'X20AT2402 –Temperature input Module',
        '8V1016.50 -2 Nos –Servo drive',
        '8MSA2L.R0-67 -2Nos –Synchronous Motor',
        '0PS05.1 -24V DC Power Supply',
        '8CM002.12 – Motor cable',
        '8CR002.12 – Resolver cable'
      ]
    },
    { 
      sno: 2,
      dept: 'EEE', 
      name: 'NI LabVIEW ACADEMY', 
      facilities: [
        'NI ELVIS PROTOTYPING BOARD –6 Nos',
        'DAQ Signal Accessory – 5 Nos',
        'NI 9263 – Voltage Output Module',
        'NI9225 – 24 bit 3 channel Voltage Input Module',
        'NI 9234 – Sound and Vibration Module',
        'NI 9512 – Motor Drive Interface Module',
        'NI 9205 – 16 bit 32 channel Voltage Input Module',
        'NI 9211 – Temperature Input Module',
        'NI 9516 – Servo motor drive interface Module',
        'NI 9219 – Multi range sensor module',
        'NI 9224 -24 Bit 8 channel Voltage Input Module',
        'NI 9401 – Digital Bi directional port',
        'NI CRIO 9074 – FPGA embedded controller'
      ]
    },
    { 
      sno: 3,
      dept: 'CSE', 
      name: 'Centre of Excellence in Algorithms', 
      facilities: [
        'R Programming Software',
        'Python Development Environment',
        'TensorFlow Machine Learning Framework',
        'Weka Data Mining Tool'
      ]
    },
    { 
      sno: 4,
      dept: 'IT', 
      name: 'Virtusa Training Tools', 
      facilities: [
        'Selenium Software Testing Tool'
      ]
    },
    { 
      sno: 5,
      dept: 'ECE', 
      name: 'Embedded Systems', 
      facilities: [
        'World class Trainer Kits',
        'Launch Pad Development Boards',
        'ARM Processor Systems',
        'Real time Controllers'
      ]
    },
    { 
      sno: 6,
      dept: 'ECE', 
      name: 'Communication and Networks', 
      facilities: [
        'Well-connected Server Systems',
        'Client Structured Systems',
        'Networking Protocol Study Tools',
        'Hardware-based Routing Protocol Implementation'
      ]
    },
    { 
      sno: 7,
      dept: 'ECE', 
      name: 'VLSI Design', 
      facilities: [
        'Cadence Virtuoso Design Tools',
        'Analog Circuit Design Software',
        'Digital Circuit Design Software'
      ]
    },
    { 
      sno: 8,
      dept: 'ECE', 
      name: 'Signal Processing', 
      facilities: [
        'MATLAB Software Suite',
        'Simulink Simulation Tools'
      ]
    },
    { 
      sno: 9,
      dept: 'MECH', 
      name: 'Centre for Composite Materials', 
      facilities: [
        'Industrial Hot air oven',
        'Metallurgical Microscopes',
        'Electric Furnace',
        'Muffle Furnace (1000 °C)',
        'Universal Tensile Testing Machine (40 Ton)',
        'Torsion Testing Machine (60 Nm)',
        'Impact Testing Machine (300 Joules)',
        'Spring Testing Machine (50 KN)',
        'CNC Turning Machine',
        'CNC Milling Machine',
        'Arc/MIG/TIG/Gas Welding Machine',
        'Double Disc Polishing Machine',
        'Profile Projector',
        'Brinell Cum Rockwell Hardness Testing Machine',
        'Injection Moulding Equipment',
        'Surface Roughness Tester'
      ]
    },
    { 
      sno: 10,
      dept: 'AIDS', 
      name: 'Data Science and Analytics Centre', 
      facilities: [
        'Qlik Business Analytics Certification',
        'Big Data and Hadoop Training',
        'GenAI Training Programs',
        'Computer Vision and IoT'
      ]
    },
    { 
      sno: 11,
      dept: 'AIDS', 
      name: 'Computer Vision and IoT', 
      facilities: [
        'NVIDIA DGX Super Computing System',
        'NVIDIA Jetson IoT Development Kits',
        'High Performance Computing Setup'
      ]
    },
    { 
      sno: 12,
      dept: 'Placement', 
      name: 'NTT DATA Training Center', 
      facilities: [
        'Data Science Curriculum',
        'Train the Trainer Programs',
        'Online Training Portal (60 students)',
        'Industry-based Recruitment Programs'
      ]
    }
  ]

  const renderSection = (sectionId, title, content) => (
    <section id={sectionId} className="research-section">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="table-container">
        {content}
      </div>
    </section>
  )

  return (
    <>
      <InnerBanner
        data={{
          department_name: department.name,
          bannerImg: department.bannerImg,
        }}
      />
      
      {/* STICKY TABS */}
      <div className="sticky-tabs">
        <div className="container">
          <div className="tabs-wrapper">
            <button className="scroll-arrow scroll-left" onClick={() => {
              const nav = document.querySelector('.tabs-navigation');
              nav.scrollBy({ left: -200, behavior: 'smooth' });
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            
            <div className="tabs-navigation">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-tab ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  <span className="tab-text">{item.label}</span>
                </button>
              ))}
            </div>
            
            <button className="scroll-arrow scroll-right" onClick={() => {
              const nav = document.querySelector('.tabs-navigation');
              nav.scrollBy({ left: 200, behavior: 'smooth' });
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="research-content">
        <div className="container">
          
          {/* FIRST TAB - RESEARCH POLICY & OVERVIEW */}
          <section id="overview" className="research-section">
            
            {/* RESEARCH POLICY SECTION */}
            <div className="policy-container">
              <div className="section-header">
                <h2>Research Policy</h2>
              </div>
              <div className="policy-section">
                <div className="policy-header">
                  <p>Access our comprehensive research guidelines and institutional policies</p>
                  <button className="policy-download-btn">
                    View Document
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* RESEARCH OVERVIEW SECTION */}
            <div className="overview-container">
              <div className="section-header">
                <h2>Research Overview</h2>
              </div>
              <div className="table-container">
                <div className="overview-table">
                  <div className="overview-header">
                    <div>S.No</div>
                    <div>Description</div>
                    <div>Details</div>
                  </div>
                  {overviewData.map((item, i) => (
                    <div key={i} className={`overview-row ${item.sno === '' ? 'sub-row' : ''}`}>
                      <div>{item.sno}</div>
                      <div>{item.description}</div>
                      <div>{item.details}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </section>

          {renderSection('committee', 'Research Committee (2021-22)', (
            <div className="committee-list">
              {committeeData.map((item, i) => (
                <div key={i} className="committee-member">
                  <div className="member-number">{item.sno}</div>
                  <div className="member-info">
                    <div className="member-header">
                      <h4 className="member-name">{item.name}</h4>
                      <span className={`role-tag ${item.role.toLowerCase()}`}>{item.role}</span>
                    </div>
                    <div className="member-details">
                      <div className="detail-item">
                        <span className="detail-label">Designation:</span>
                        <span className="detail-value">{item.designation}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Institution:</span>
                        <span className="detail-value">{item.institution}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Department Cluster:</span>
                        <span className="cluster-badge">{item.cluster}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {renderSection('publications', 'Publications', (
            <div className="publications-dashboard">
              {publicationData.map((item, i) => (
                <div key={i} className="publication-card">
                  <div className="card-year">
                    <span className="year-number">{item.year}</span>
                    <div className="year-indicator"></div>
                  </div>
                  <div className="metrics-grid">
                    <div className="metric-item journals">
                      <div className="metric-icon"><FileText size={20} /></div>
                      <div className="metric-data">
                        <span className="metric-value">{item.journal}</span>
                        <span className="metric-label">Journals</span>
                      </div>
                    </div>
                    <div className="metric-item conferences">
                      <div className="metric-icon"><Mic size={20} /></div>
                      <div className="metric-data">
                        <span className="metric-value">{item.conf}</span>
                        <span className="metric-label">Conferences</span>
                      </div>
                    </div>
                    <div className="metric-item books">
                      <div className="metric-icon"><BookOpen size={20} /></div>
                      <div className="metric-data">
                        <span className="metric-value">{item.book}</span>
                        <span className="metric-label">Books</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-total">
                    <span>Total: {item.journal + item.conf + item.book}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {renderSection('projects', 'Research Projects', (
            <div className="projects-modern-table">
              <div className="table-header-row">
                <div className="header-cell year-header">Academic Year</div>
                <div className="header-cell count-header">Projects</div>
                <div className="header-cell amount-header">Funding</div>
                <div className="header-cell progress-header">Distribution</div>
              </div>
              
              {projectData.map((item, i) => (
                <div key={i} className="table-data-row">
                  <div className="data-cell year-cell">
                    <div className="year-info">
                      <span className="year-main">{item.year}</span>
                      <span className="year-sub">Academic Year</span>
                    </div>
                  </div>
                  
                  <div className="data-cell count-cell">
                    <div className="count-badge">
                      <span className="count-number">{item.projects}</span>
                    </div>
                    <span className="count-label">Projects</span>
                  </div>
                  
                  <div className="data-cell amount-cell">
                    <div className="amount-info">
                      <span className="amount-value">₹{item.amount}</span>
                      <span className="amount-unit">Lakhs</span>
                    </div>
                  </div>
                  
                  <div className="data-cell progress-cell">
                    <div className="progress-container">
                      <div className="progress-bar-wrapper">
                        <div className="progress-bar" style={{width: `${(item.amount / Math.max(...projectData.map(p => p.amount))) * 100}%`}}></div>
                      </div>
                      <span className="progress-percentage">{((item.amount / projectData.reduce((sum, p) => sum + p.amount, 0)) * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {renderSection('seedmoney', 'Seed Money', (
            <div className="modern-seed-layout">
              <div className="seed-header">
                <div className="header-item">Year</div>
                <div className="header-item">Projects</div>
                <div className="header-item">Funding (₹ Lakhs)</div>
              </div>
              <div className="seed-grid">
                {seedMoney.map((item, i) => (
                  <div key={i} className="seed-row">
                    <div className="seed-year">{item.year}</div>
                    <div className="seed-projects">
                      <span className="number">{item.projects}</span>
                      <span className="label">Projects</span>
                    </div>
                    <div className="seed-funding">
                      <span className="amount">₹{item.amount}</span>
                      <span className="unit">Lakhs</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <section id="centres" className="research-section">
            <div className="section-header">
              <h2>Centre of Excellence</h2>
            </div>
            <div className="excellence-accordion-wrapper">
              <div className="excellence-accordion">
                {centres.map((item, i) => (
                  <div key={i} className={`accordion-item ${expandedCentre === i ? 'expanded' : ''}`}>
                    <div className="accordion-header" onClick={() => setExpandedCentre(expandedCentre === i ? null : i)}>
                      <div className="header-content">
                        <div className="centre-badge">
                          <span className="centre-number">{String(item.sno).padStart(2, '0')}</span>
                          <div className="dept-info">
                            <span className="dept-name">{item.dept}</span>
                            <span className="facilities-count">{item.facilities.length} Equipment</span>
                          </div>
                        </div>
                        <div className="centre-details">
                          <h3 className="centre-title">{item.name}</h3>
                          <p className="centre-description">Advanced research facilities and cutting-edge technology</p>
                        </div>
                      </div>
                      <div className="expand-control">
                        <div className="expand-icon">
                          {expandedCentre === i ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </div>
                      </div>
                    </div>
                    
                    <div className="accordion-content">
                      <div className="content-inner">
                        <div className="facilities-showcase">
                          {item.facilities.map((facility, idx) => (
                            <div key={idx} className="facility-card">
                              <div className="facility-icon">⚡</div>
                              <div className="facility-content">
                                <h4 className="facility-name">{facility}</h4>
                                <span className="facility-type">Research Equipment</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default ResearchPage;