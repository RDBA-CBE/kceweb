"use client";

import SideMenu from "@/components/KCE/ABOUT/sideMenu";
import InnerBanner from "@/components/KCE/common/InnerBanner";
import { department } from "@/utils/constant.util";
import React from "react";

export default function ManagementPage() {
  return (
    <section className="  management-wrapper">
      <InnerBanner
        data={{
          department_name: department.name,
          bannerImg: department.bannerImg,
        }}
      />
      <div className=" container management-wrapper">
        <div className="row ">
          <div className="col-lg-9 management-content-area">
            {/* Chairman */}
            <div className="leader-row">
              <div className="leader-image">
                <img
                  src="https://kiic.in/file/wp-content/uploads/2024/06/Dr.-R.-Vasanthakumar-Managing-trustee.jpg"
                  alt="Dr. R. Vasanthakumar"
                />
              </div>

              <div className="leader-content">
                <span className="leader-designation">Chairman</span>
                <h2 className="leader-name">Dr. R. Vasanthakumar</h2>

                <p>
                  Dr. R. Vasanthakumar is the founder promoter and Chairman of
                  Karpagam College of Engineering. A visionary industrialist, he
                  leads the Karpagam Group of Industries employing over 2000
                  professionals.
                </p>

                <p>
                  A Gold Medalist from Madras University, his contributions to
                  education and philanthropy continue to shape institutional
                  excellence.
                </p>
              </div>
            </div>

            {/* CEO */}
            <div className="leader-row reverse">
              <div className="leader-image">
                <img
                  src="https://karpagamcollegeofengineering.github.io/KCE-ICIC2-23/assets/img/committee/Shri.%20K.%20Murugaiah.jpg"
                  alt="Er. K. Murugaiah"
                />
              </div>

              <div className="leader-content">
                <span className="leader-designation">
                  Chief Executive Officer
                </span>
                <h2 className="leader-name">Er. K. Murugaiah</h2>

                <p>
                  Er. K. Murugaiah serves as the CEO of Karpagam University and
                  is a key member of the Board of Management.
                </p>

                <p>
                  His strategic leadership played a vital role in attaining
                  university status and NAAC accreditation.
                </p>
              </div>
            </div>

            {/* Principal */}
            <div className="leader-row">
              <div className="leader-image">
                <img
                  src="https://kce.ac.in/new/wp-content/uploads/2025/06/Princiapl-message-final-23.06.2025_page-0001-1.jpg"
                  alt="Dr. P. Karthigaikumar"
                />
              </div>

              <div className="leader-content">
                <span className="leader-designation">Principal</span>
                <h2 className="leader-name">Dr. P. Karthigaikumar</h2>

                <p>
                  Dr. P. Karthigaikumar holds a Ph.D. in Information and
                  Communication Engineering with over 24 years of academic
                  experience.
                </p>

                <p>
                  He actively promotes innovation, research excellence, and
                  industry-driven education.
                </p>
              </div>
            </div>
          </div>

          <SideMenu active="Management Profile" />
        </div>
      </div>
    </section>
  );
}
