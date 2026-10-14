import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";

export const metadata = {
  title: "Best MBA College in Coimbatore For Management Studies",
  description: "Best MBA Colleges in Coimbatore offer industry-focused management programs, experienced faculty, and practical business learning.",
};

const newpageData = {
  slug: "department-of-management-studies",
  banner: {
    bannerImg: "/images/kce/banner_computer_technology.jpg",
    title: "Faculty Members of Department of Management Studies",
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
        href: "/department-of-management-studies",
        label: "Department of Management Studies",
      },
      {
        label: "Faculty Members",
      },
    ],
  },
  sectionTi: "Our Faculty Members",
  // desc: "The Department of Management Studies at KCE is supported by a team of experienced and dedicated faculty focused on developing future business leaders.They adopt practical and interactive teaching methods to help students understand real-world management concepts with ease. Faculty members actively mentor students in projects, internships, and career planning to ensure professional growth.With expertise in areas like marketing, finance, human resources, and entrepreneurship, they keep students aligned with current industry trends.Their continuous guidance and support help students build confidence, leadership skills, and become successful management professionals.",

  FacultyImage: [
    {
      src: "/images/kce/faculties/MBA-faculty.jpeg",
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
