import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";

export const metadata = {
  title: "Best Mechanical Engineering College in Coimbatore",
  description:
    "Best Mechanical Engineering College in Coimbatore, KCE delivers practical training, innovative lab sessions, and industry-focused learning.",
};

const newpageData = {
  slug: "department-of-mechanical-engineering",
  banner: {
    bannerImg: "/images/kce/banner_computer_technology.jpg",
    title: "Faculty Members of Department of Mechanical Engineering",
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
        href: "/department-of-mechanical-engineering",
        label: "Department of Mechanical Engineering",
      },
      {
        label: "Faculty Members",
      },
    ],
  },
  sectionTi: "Our Faculty Members",
  // desc: "At KCE, the Department of Mechanical Engineering is a place where ideas are transformed into real-world solutions. With a strong focus on both fundamentals and practical learning, the department prepares students to understand how machines work, how systems are designed, and how innovations shape everyday life",

  FacultyImage: [
    {
      src: "/images/kce/faculties/ME-faculty.jpeg",
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
