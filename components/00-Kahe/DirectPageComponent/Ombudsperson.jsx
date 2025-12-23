"use client";

import InnerBanner from "../../KCE/common/InnerBanner";
import data from "../../../JSON/About/commitee.json";
import Sidebar from "../common-components/Sidebar";
import { NonStatutoryCommitee } from "@/JSON/ACADEMIC/Overview";
import ListStyle from "../Components/ListStyle";
import { FirstLetterUp } from "@/utils/functions.utils";

const Ombudsperson = () => {
  console.log("data", data);

  const commiteeData = data?.Ombudsperson;
  return (
    <>
      <InnerBanner data={commiteeData?.bannerCon} />

      <main className="section-wid d-flex gap-4 py-5">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">
              <div>
                <h2
                  className="decor-ti"
                  dangerouslySetInnerHTML={{ __html: FirstLetterUp(commiteeData?.title) }}
                ></h2>
              </div>

              <div className="d-flex justify-content-between flex-wrap omb-sec">
                <div className="omb-item1">
                  <div>
                    <span>Name : </span>
                    <span className="main-sub-ti" dangerouslySetInnerHTML={{__html:FirstLetterUp(commiteeData.content[0].title)}}></span>
                  </div>
                  <p>
                    <a href="mailto:ombudsperson@kahedu.edu.in">
                      <span>Email : </span> {commiteeData.content[0].email}
                    </a>
                  </p>
                </div>
                {/* <div className="omb-item2">
                  <img src="/images/Kahe/Innerpages/Ombudsperson.jpg" alt="" />
                </div> */}
              </div>
            </div>

            <div className="col-lg-3 px-0 d-none d-lg-block">
              <div className="course-sidebar sticky-top rbt-shadow-box rbt-gradient-border ">
                <div className="inner">
                  <div className="content-item-content">
                    <Sidebar subMenu={NonStatutoryCommitee} />
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

export default Ombudsperson;
