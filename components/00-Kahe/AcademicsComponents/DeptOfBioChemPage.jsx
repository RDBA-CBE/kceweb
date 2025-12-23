"use client";

import BreadCrumb from "@/components/00-Kahe/common-components/BreadCrumb";
// import MenuData from "@/data/kahe/MegaMenu.json";
// import BreadcrumbImage from "../../../../../public/images/Kahe/breadcrumb/banner-inner1.jpg";
// import CourseData from "../../../../../data/course-details/courseData.json";
import TabInnerSection from "@/components/00-Kahe/Components/TabInnerSection";
import { subMenu } from "@/JSON/ACADEMIC/Overview";
import InnerBanner from "@/components/KCE/common/InnerBanner";
import Sidebar from "../common-components/Sidebar";
import { base } from "@/utils/constant.util";
import SidebarCopy from "../common-components/Sidebar2";
import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";

console.log("data", data);

const DeptOfBioChemPage = () => {
  const breadcrumbItems = [
    { label: "Academics", href: `academics` },
    {
      label: "Arts, Science, Commerce and Management",
      href: `academics/arts-science-and-humanities/`,
    },

    { label: "Department of Biochemistry" },
  ];

  return (
    <>
      <Provider store={Store}>
        <Context>
          <InnerBanner data={data} />
          <BreadCrumb items={breadcrumbItems} />

          <main className="d-flex pt-5 px-0 mx-0">
            <div className="rbt-course-details-area w-100">
              <div className="row mx-0 px-0">
                <div className="col-lg-12 px-0">
                  <TabInnerSection
                    tabSections={data.tabs}
                    tabContent={data.tabContent}
                  />
                </div>

                {/* <div className="col-lg-3 px-0 d-none d-lg-block">
                  <div className="course-sidebar sticky-top rbt-shadow-box rbt-gradient-border ">
                    <div className="inner">
                      <div className="content-item-content">
                        <Sidebar subMenu={subMenu} />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </main>

          <SidebarCopy subMenu={subMenu} />
        </Context>
      </Provider>
    </>
  );
};

export default DeptOfBioChemPage;
