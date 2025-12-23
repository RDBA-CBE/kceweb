import AboutSection from "@/components/KCE/CIVIL/about";
import Content from "@/components/KCE/CIVIL/content";
import CivilEngineeringDept from "@/components/KCE/CIVIL/content";
import LabFacility from "@/components/KCE/CIVIL/labFacilities";
import VissionMission from "@/components/KCE/CIVIL/vissionMission";
import InnerBanner from "@/components/KCE/common/InnerBanner";
import TabSection from "@/components/KCE/common/tabSection";
import ClassData from "../../../JSON/ACADEMIC/CIVIL/academic-civil.json";
import React from "react";
import StudentsIcon from "@/public/images/Kahe/icons/StudentsIcon";
import LabIcon from "@/public/images/Kahe/icons/LabIcon";
import BooksIcon from "@/public/images/Kahe/icons/BooksIcon";
import SmartClass from "@/components/KCE/CIVIL/smartClass";
import TeachingLearningSection from "@/components/KCE/CIVIL/TeachingLearningSection";

export default function page() {
  const data = {
    department_name: "Civil Engineering",
    bannerImg: "/public/images/kce/overlay.png",
  };

  const content = [
    "The Department has good infrastructure and it is well equipped with state-of-the art laboratory facilities necessary for imparting high quality of education and is structured to meet our present day needs of the Civil Engineering. Students from our department have always proved to be meritorious. The department has well experienced, qualified and diversified team of faculty members who are regularly presenting papers in and national and international conferences and publishing their technical papers in reputed peer reviewed journals.",
    "Our faculty members are life members of various professional bodies such as Indian Concrete Institute (ICI), Indian Society for Technical Education (ISTE), International Society for Research and Development (ISRD), International Association of Engineers (IAENG), Indian Academicians and Researchers Association (IARA) etc.,. for the necessary networking and knowledge upskilling.",
    "The department actively promotes curriculum development activity by updating existing courses, developing new courses and preparing resource material for teaching and learning process. The department is also very active in conducting conferences, workshops, seminars and visit to industries and construction sites. Visits are arranged regularly to impart technical inputs to the students more effectively through experiential learning. Wi-Fi enabled internet facilities are available in the department. Students are motivated to undergo mini projects to improve their practical knowledge and are encouraged to undergo internship to improve their practical exposure. Soft skill training programs are offered to enhance their communication, aptitude and interpersonal skills.",
    "The Department of Civil Engineering has signed MoU with reputed construction companies to help the students in training and to upgrade their technical skills through practical exposure.",
  ];

  const classes = [
    {
      ttile: "",
    },
  ];
  return (
    <div>
      <InnerBanner data={data} />
      <AboutSection />
      <Content data={content} />

      <div className="container">
        <VissionMission />
        <LabFacility />
        <TabSection />

       {/* <SmartClass data={ClassData} /> */}
       <TeachingLearningSection />
      </div>
    </div>
  );
}
