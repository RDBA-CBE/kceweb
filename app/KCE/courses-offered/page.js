"use client";
import InnerBanner from "@/components/KCE/common/InnerBanner";
import { department } from "@/utils/constant.util";
import React from "react";

export default function AdmissionProcedure() {
  const programmes = [
    "B.E. Civil Engineering",
    "B.E. Computer Science and Engineering",
    "B.E. Computer Science and Engineering (Cyber Security)",
    "B.E. Computer Science and Technology",
    "B.E. Electronics and Communication Engineering +",
    "B.E. Electrical and Electronics Engineering +",
    "B.E. Electronics and Telecommunications Engineering",
    "B.E. Mechanical Engineering +",
    "B.E. Computer Science and Design",
    "B.Tech. Information Technology +",
    "B.Tech. Artificial Intelligence and Data Science",
  ];
  return (
    <>
    <InnerBanner
        data={{
          department_name: department.name,
          bannerImg: department.bannerImg,
        }}
      />
      <section className="admission-panel">
        <div className="container">
          <div className="row align-items-stretch">
            {/* LEFT CONTENT */}
            <div className="col-lg-7 admission-left">
              <h1 className="admission-heading">Admission Procedure</h1>

              <div className="admission-block">
                <h4>Government Quota</h4>
                <p>
                  The Department of Technical Education (DoTE), Government of
                  Tamil Nadu releases admission notifications through Anna
                  University and leading newspapers.
                </p>
              </div>

              <div className="admission-block">
                <h4>Single Window Counseling</h4>
                <p>
                  Admissions are conducted through Single Window Counseling by
                  Anna University, Chennai. Seat availability is updated daily
                  on the University website.
                </p>
              </div>

              <div className="admission-block">
                <h4>Management Quota</h4>
                <p>
                  Consortium of Self Financing Engineering Colleges Management
                  Association publishes advertisements regarding admission
                  process and entrance tests.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-5 admission-right">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                alt="Students admission discussion"
              />
              <div className="admission-tag">ADMISSIONS 2025</div>
            </div>
          </div>
        </div>
      </section>
      <section className="ug-wall">
        <div className="container">
          <h1 className="ug-wall-title">UG Programmes</h1>

          <div className="ug-ribbon">
            {programmes.map((item, index) => (
              <div key={index} className="ug-ribbon-item">
                <span className="prog-name">{item.replace("+", "")}</span>
                {item.includes("+") && <span className="prog-badge">NBA</span>}
              </div>
            ))}
          </div>

          <p className="ug-wall-note">+ Programmes Accredited by NBA</p>
        </div>
      </section>

      <section className="rail-section">
      <div className="container">

        <div className="row gy-5">

          {/* PG PROGRAMMES */}
          <div className="col-lg-6">
            <div className="rail-block">
              <div className="rail-line blue"></div>
              <h2>PG Programmes</h2>
              <ul>
                <li>MBA – Master of Business Administration</li>
                <li>MCA – Master of Computer Application</li>
              </ul>
            </div>
          </div>

          {/* RESEARCH PROGRAMMES */}
          <div className="col-lg-6">
            <div className="rail-block">
              <div className="rail-line green"></div>
              <h2>Research Programmes</h2>
              <ul>
                <li>Mechanical Engineering</li>
                <li>Electrical & Electronics Engineering</li>
                <li>Electronics & Communication Engineering</li>
                <li>Information Technology</li>
              </ul>
              <p className="rail-note">
                Recognized as a Research Institute by Anna University
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  );
}

// "use client";
// import React from "react";

// export default function AdmissionProcedure() {
//   return (
//     <section className="admission-journey container">

//       {/* Top Section */}
//       <div className="row align-items-center mb-5">
//         <div className="col-lg-6">
//           <h1 className="journey-title">Admission Procedure</h1>
//           <p className="journey-intro">
//             Admissions are carried out through Government and Management
//             quota channels as per norms prescribed by the Government of
//             Tamil Nadu and Anna University.
//           </p>
//         </div>

//         <div className="col-lg-6">
//           <div className="journey-image">
//             <img
//               src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"
//               alt="Students discussing admission"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Steps */}
//       <div className="journey-steps">
//         <div className="step-item">
//           <span className="step-number">01</span>
//           <h3>Government Quota</h3>
//           <p>
//             DoTE releases admission notifications through Anna University
//             and leading newspapers. Admissions are conducted via Single
//             Window Counseling.
//           </p>
//         </div>

//         <div className="step-item">
//           <span className="step-number">02</span>
//           <h3>Seat Availability</h3>
//           <p>
//             Availability status of seats is updated daily on the University
//             website during the counseling period.
//           </p>
//         </div>

//         <div className="step-item">
//           <span className="step-number">03</span>
//           <h3>Management Quota</h3>
//           <p>
//             Consortium of Self Financing Engineering Colleges Management
//             Association advertises admission details and entrance tests.
//           </p>
//         </div>
//       </div>

//     </section>
//   );
// }

// "use client";
// import React from "react";

// export default function AdmissionProcedure() {
//   return (
//     <section className="admission-section container">
//       <div className="row align-items-center">

//         {/* Left Content */}
//         <div className="col-lg-6 admission-content">
//           <h1 className="admission-title">Admission Procedure</h1>

//           <div className="admission-text">
//             <p>
//               The Department of Technical Education (DoTE), Government of
//               Tamil Nadu releases advertisement for admission through the
//               affiliating University in leading newspapers and in the
//               University website for admission under Government Quota seats.
//             </p>

//             <p>
//               DoTE conducts Single Window Counseling through Anna University,
//               Chennai for admissions. During the time of admission, the
//               availability status is updated every day in the University
//               website.
//             </p>

//             <p>
//               For the Management Quota seats, the Consortium of Self Financing
//               Engineering Colleges Management Association advertises in the
//               newspapers about the admission process and entrance test.
//             </p>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="col-lg-6 admission-image">
//           <img
//             src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
//             alt="Students discussing admission"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }
