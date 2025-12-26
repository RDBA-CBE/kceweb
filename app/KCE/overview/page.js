import InnerBanner from "@/components/KCE/common/InnerBanner";
import { department } from "@/utils/constant.util";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="">
      <InnerBanner
        data={{
          department_name: department.name,
          bannerImg: department.bannerImg,
        }}
      />
      <section className="platform-marker-section">
        <div className="container">
          <div className="marker-layout">
            {/* CONTENT */}
            <div className="marker-content">
              <span className="marker-line"></span>

              <h2>Platform to Success</h2>

              <p>
                Karpagam College of engineering, an autonomous institution
                affiliated to Anna University – Chennai, established in the year
                2000. It made a remarkable growth in the placement edge in the
                last decade by a strong, determinant and dynamic placement cell
                catering the need of various industries by ensuring that our
                students meet the necessities of the current industrial
                scenario.The placement office is such a way designed that
                support the requirement of the organization to conduct the
                pre-placement talk, written test, Group Discussion and interview
                in effective manner.
              </p>

              <p>
                The placement cell takes immense effort in guiding the students
                for their successful career.The college has active MoUs &
                Centers of excellence with various prominent players in various
                industries. The college is visited by various Multinational
                companies year after year for placements and hence the college
                had a blistering placement record.
              </p>
            </div>

            {/* IMAGE */}
            <div className="marker-image">
              <Image
                src="/images/kce/DSC_0077-940x360-1-435x280.webp"
                alt="Platform to Success"
                width={700}
                height={460}
                className="marker-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
