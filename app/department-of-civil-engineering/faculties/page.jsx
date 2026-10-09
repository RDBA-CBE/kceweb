import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";
import data from "../../../JSON/ACADEMIC/dept_of_civil.json";

export const metadata = {
  title: "Top Civil Engineering College in Coimbatore",
  description:
    "Join KCE, one of the Top Civil Engineering Colleges in Coimbatore, for applied learning, modern facilities, and excellent placements.",
};

const newpageData = {
  slug: "department-of-civil-engineering",
  banner: {
    bannerImg: "/images/kce/banner_computer_technology.jpg",
    title: "Faculties of Department of Civil Engineering",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Academics",
        href: "/academics",
      },
      {
        href: "/department-of-civil-engineering",
        label: "Department of Civil Engineering",
      },
      {
        label: "Faculty",
      },
    ],
  },
  sectionTi: "Our Faculty Members",
  //   desc: "At KCE, our Civil Engineering faculty are not just teachers they are dedicated mentors who guide students at every step of their academic journey. With strong qualifications and valuable industry experience, our faculty ensure that students clearly understand concepts and are well-prepared for real-world engineering challenges. ",
  FacultyImage: [
    {
      src: "/images/faculties/civil-eng-faculties.jpg",
    },
  ],
};

const page = () => {
  return (
    <>
      <FacultyPage data={newpageData} />
    </>
  );
};

export default page;
