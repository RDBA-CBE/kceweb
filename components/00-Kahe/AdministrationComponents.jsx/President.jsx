import { Administration } from "@/JSON/ACADEMIC/Overview";
import data from "../../../JSON/Administration/BoardOfTrustees.json";
import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import Sidebar from "../common-components/Sidebar";
import ImageLink from "../Components/ImageLink";


export const metadata = {
  title: "About Us 01 - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};



const President = () => {
    const BoardOfTrustees = data?.president;

    console.log("BoardOfTrustees", BoardOfTrustees);
    

  return (
    <>
      <InnerBanner data={BoardOfTrustees?.bannerCon} />

      <main className="section-wid d-flex gap-4 py-5">
        <div className="rbt-course-details-area w-100">
          <div className="row g-5">
            <div className="col-lg-9">

              <ImageLink data={BoardOfTrustees}/>
              
            </div>

            <div className="col-lg-3 px-0 d-none d-lg-block">
              <div className="course-sidebar sticky-top rbt-shadow-box rbt-gradient-border ">
                <div className="inner">
                  <div className="content-item-content">
                    <Sidebar subMenu={Administration} />
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

export default President;
