import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";

export const metadata = {
  title: "B.Tech Artificial Intelligence College In Coimbatore",
  description:
    "Top B.Tech Artificial Intelligence Colleges in Coimbatore focus on robotics, data analytics, and innovative AI applications.",
};

const newpageData = {
  slug: "department-of-artificial-intelligence-and-data-science",
  banner: {
    bannerImg: "/images/kce/banner_computer_technology.jpg",
    title:
      "Faculty Members of Department of Artificial Intelligence and Data Science",
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
        href: "/department-of-artificial-intelligence-and-data-science",
        label: "Department of Artificial Intelligence and Data Science",
      },
      {
        label: "Faculty Members",
      },
    ],
  },
  sectionTi: "Our Faculty Members",
  // desc: "The Department of Artificial Intelligence and Data Science at KCE is led by qualified and dedicated faculty who combine strong academic knowledge with practical expertise. They use interactive and hands-on teaching methods to make learning engaging while fostering innovation and problem-solving skills. Faculty actively mentor students in projects, internships, and career development, ensuring they become confident and industry-ready professionals.",
  FacultyImage: [
    {
      src: "/images/kce/faculties/AIDS-faculty.jpeg",
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
