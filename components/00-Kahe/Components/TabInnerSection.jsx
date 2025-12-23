"use client";
import "venobox/dist/venobox.min.css";

import TabMenu from "./TabMenu";
import Overview from "./tabContentComponents/Overview";
import Events from "./tabContentComponents/Events";
import Faculty from "./tabContentComponents/Faculty";
import Infrastructure from "./tabContentComponents/Infrastructure";
import Publications from "./tabContentComponents/Publications";
import Programmes from "./tabContentComponents/Programmes";
import ProgrammesMbl from "./tabContentComponents/ProgrammesMbl";
import Gal_Pub_Event from "./tabContentComponents/Gal_Pub_Event";

const TabInnerSection = ({ tabSections, tabContent }) => {
  const tabItems = tabContent;

  console.log("tabItems", tabItems);

  const overviewContent = tabContent?.find(
    (item) => item.tab == "Overview"
  ).items;
  const programmeContent = tabContent.find((item) => item.tab == "Programme");
  const facultyContent = tabContent.find((item) => item.tab == "Faculty");
  const infrastructureContent = tabContent.find(
    (item) => item.tab == "Infrastructure"
  );
  const publicationsContent = tabContent.find(
    (item) => item.tab == "Publications"
  );
  const eventsContent = tabContent.find((item) => item.tab == "Events");

  const InfraGallery = infrastructureContent.items?.find(
    (item) => item.type == "gallery"
  );

  return (
    <>
      <div className="course-details-content tab-in ">
        <div className="section-wid rbt-inner-onepage-navigation sticky-top">
          <TabMenu sections={tabSections} />
        </div>

        {overviewContent && <Overview overviewContent={overviewContent} />}

        {programmeContent && (
          <div
            className="rbt-course-feature-box details-wrapper section-bg1"
            id="programme"
          >
            <div className="row mx-0 px-0 ">
              <Programmes programmeContent={programmeContent} />
              <ProgrammesMbl programmeContent={programmeContent} />
            </div>
          </div>
        )}

        {facultyContent && (
          <div
            className="section-wid rbt-instructor  intructor-wrapper section-bg1"
            id="faculty"
          >
            <Faculty facultyContent={facultyContent} />
          </div>
        )}

        {infrastructureContent && (
          <div
            className=" rbt-review-wrapper review-wrapper section-bg3"
            id="infrastructure"
          >
            <Infrastructure infrastructureContent={infrastructureContent} />
          </div>
        )}
        <div
          className="section-bg1  course-content  coursecontent-wrapper"
          id="events"
          style={{padding:"80px 0"}}
        >
          <Gal_Pub_Event
           InfraGallery={InfraGallery}
           publicationsContent={publicationsContent}
           eventsContent={eventsContent}/>
        </div>

        {/* {publicationsContent && (
          <div
            className="section-wid rbt-review-wrapper review-wrapper section-bg1"
            id="publications"
          >
            <Publications publicationsContent={publicationsContent} />
          </div>
        )}

        {eventsContent && (
          <div
            className="section-bg2 course-content  coursecontent-wrapper"
            id="events"
          >
            <Events eventsContent={eventsContent} />
          </div>
        )} */}
      </div>
    </>
  );
};

export default TabInnerSection;
