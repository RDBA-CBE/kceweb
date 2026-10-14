import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";

export const metadata = {
  title: "Best Information Technology College In Coimbatore",
  description: "Discover the best information technology colleges in Coimbatore that provide hands-on learning in networking, cybersecurity, and data analytics.",
};

const newpageData = {
  slug: "department-of-information-technology",
  banner: {
    bannerImg: "/images/kce/banner_computer_technology.jpg",
    title: "Faculty Members of Department of Information Technology",
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
        href: "/department-of-information-technology",
        label: "Department of Information Technology",
      },
      {
        label: "Faculty Members",
      },
    ],
  },
  sectionTi: "Our Faculty Members",
  // desc: "The Department of Information Technology at KCE adopts interactive and technology-driven teaching methods to make learning engaging and effective, while fostering innovation, problem-solving, and critical thinking skills. Faculty members actively mentor students in academic projects, internships, certifications, and career planning, ensuring continuous growth, confidence, and industry readiness.",

  FacultyImage: [
    {
      src: "/images/kce/faculties/IT-faculty.jpeg",
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
