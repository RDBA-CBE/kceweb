import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";

export const metadata = {
  title: "Best Cyber Security College in Coimbatore",
  description: "Explore the top Cyber Security Colleges in Coimbatore offering advanced programs and practical learning for career growth.",
};

const newpageData = {
  slug: "department-of-computer-sciences-and-engineering-cyber-security",
  banner: {
    bannerImg: "/images/kce/banner_computer_technology.jpg",
    title: "Faculty Members of Department of Computer Science and Engineering (Cyber Security)",
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
        href: "/department-of-computer-science-and-engineering-cyber-security",
        label:
          "Department of Computer Science and Engineering (Cyber Security)",
      },
      {
        label: "Faculty Members",
      },
    ],
  },
  sectionTi: "Our Faculty Members",
  // desc: "At KCE, the Department of Computer Science and Engineering (Cyber Security) is led by a team of skilled, dedicated, and student-focused faculty members who are committed to building strong technical foundations and ensuring student success in the fast-growing field of cybersecurity.",

  FacultyImage: [
    {
      src: "/images/kce/faculties/CY-Faculty.jpeg",
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
