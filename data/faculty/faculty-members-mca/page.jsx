import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";

export const metadata = {
  title: "Best MCA College in Coimbatore Overview",
  description:
    "KCE is one of the Best MCA Colleges in Coimbatore, offering courses in cloud computing, data analytics, and practical computer applications.",
};

const newpageData = {
  slug: "department-of-mca",
  banner: {
    bannerImg: "/images/kce/banner_computer_technology.jpg",
    title: "Faculty Members of Department of MCA",
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
        href: "/department-of-mca",
        label: "Department of MCA",
      },
      {
        label: "Faculty Members",
      },
    ],
  },
  sectionTi: "Our Faculty Members",
  // desc: "The MCA department at KCE is supported by a team of qualified and dedicated faculty committed to student success.They use simple, practical, and interactive teaching methods to make learning effective and engaging.Faculty guide students in projects, internships, and career development with continuous mentoring.With expertise in modern technologies, they ensure students stay updated with industry trends.Their support helps students become confident, skilled, and job-ready IT professionals. ",

  FacultyImage: [
    {
      src: "/images/kce/faculties/MCA.jpg",
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
