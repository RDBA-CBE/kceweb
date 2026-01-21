"use client";

import InnerBanner from "../../00-KCE/common/InnerBanner";
import data from "../../../JSON/About/commitee.json";
import Sidebar from "../common-components/Sidebar";
import { about } from "@/JSON/ACADEMIC/Overview";
import ImageLink from "../Components/ImageLink";

const RTIpage = () => {
  console.log("data", data);

  const commiteeData = data?.RTI;
  return (
    <>
      <InnerBanner data={commiteeData?.bannerCon} />

      <main className="section-wid d-flex gap-4 py-5">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              <ImageLink data={commiteeData} />
            </div>

            <div className="col-lg-3 px-0 d-none d-lg-block">
              <div className="course-sidebar sticky-top rbt-shadow-box rbt-gradient-border ">
                <div className="inner">
                  <div className="content-item-content">
                    <Sidebar subMenu={about} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RTIpage;
