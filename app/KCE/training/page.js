"use client"

import InnerBanner from "@/components/KCE/common/InnerBanner";
import { department } from "@/utils/constant.util";

export default function AboutKarpagam() {
  return (
    <>
     <InnerBanner
        data={{
          department_name: department.name,
          bannerImg: department.bannerImg,
        }}
      />
      <section className="training-section">
        <div className="container">
          <div className="row gy-5 align-items-start">
            {/* LEFT CONTENT */}
            <div className="col-lg-6">
              {/* <h2 className="training-title">Karpagam</h2> */}

              <p className="training-text">
                Karpagam College of Engineering is one among the Premier
                Autonomous Institutions in Coimbatore. Accredited by TCS, Wipro,
                CTS, Infosys, etc., The Placement and Training Cell has been
                playing a vital role in establishing wonderful job opportunities
                for final-year students. It acts as a bridge between the
                Organizations and college students. A wide range of our students
                got placed through Campus interviews every year.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6 text-center">
              <div className="image-card">
                <img
                  src="/images/kce/b1-940x360-1-435x280.webp"
                  alt="Campus Building"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="row gy-5 mt-5 ">
            <div className="col-lg-6 order-lg-2">
              <p className="training-text">
                We are upholding ample placement opportunities throughout the
                years, so several companies are willing to engage with our
                campus for recruit process. Various students had placed in
                reputed companies like Infosys, cognizant, Wipro, Amazon, Zoho
                Corporation, Informatica, Cap Gemini, Accenture, Infinite,
                Purple Slate, Sandfits Foundries, Rently, Stanadyne, Tata
                Consultancy Services, Ultramain Software, and many others. Our
                students have been attending 3 assessment tests (AMCAT)
                conducted by Aspiring Minds as a practice to be familiar in the
                aptitude content as industry standards.
              </p>

              <p className="training-text">
                A student will undergo an average of 250-300 hours of training
                during his entire stay on the campus. Experts are invited to
                train the students as per industry needs. Apart from external
                training, internal trainers and placed students are organizing
                the following activities for the non–placed students and junior
                students.
              </p>
            </div>

            <div className="col-lg-6 order-lg-1 text-center">
              <div className="image-card small">
                <img
                  src="/images/kce/b1-940x360-1-435x280.webp"
                  alt="Campus View"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sca-wrapper">
        <div className="container">
          <div className="row g-5">
            {/* Student Centric Activities */}
            <div className="col-lg-6">
              <h2 className="sca-title">Student Centric Activities</h2>

              <ul className="sca-list">
                <li>
                  Wipro offering TalentNext program to develop Full Stack Java
                  skills.
                </li>
                <li>
                  Wipro providing Wipro Future Skills program to develop skills
                  in latest trending technologies.
                </li>
                <li>
                  Cognizant offering Learning Portal to equip students in
                  Salesforce and Cyber Security domain.
                </li>
                <li>Infosys offering InfyTQ certification program.</li>
                <li>Virtusa offering Cellinium – Tool Training.</li>
              </ul>
            </div>

            {/* Capacity Development */}
            <div className="col-lg-6">
              <h2 className="sca-title">
                Capacity Development & Skills Enhancement
              </h2>

              <ul className="sca-list secondary">
                <li>Soft skills</li>
                <li>Language and communication skills</li>
                <li>
                  Life skills (Yoga, physical fitness, health and hygiene)
                </li>
                <li>Awareness of trends in technology</li>
              </ul>

              <a href="#" className="sca-cta">
                Know More →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
