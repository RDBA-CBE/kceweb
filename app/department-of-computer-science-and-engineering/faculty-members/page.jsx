import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";

export const metadata = {
  title: "Best Computer Science and Engineering college in Coimbatore",
  description:
    "KCE offers a strong foundation as the Best Computer Science and Engineering college in Coimbatore with industry-ready courses and modern labs",
};

const newpageData = {
  slug: "department-of-computer-sciences-and-engineering",
  banner: {
    bannerImg: "/images/kce/banner_computer_technology.jpg",
    title: "Faculty Members of Department of Computer Science and Engineering ",
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
        href: "/department-of-computer-science-and-engineering",
        label: "Department of Computer Science and Engineering ",
      },
      {
        label: "Faculty Members",
      },
    ],
  },
  sectionTi: "Our Faculty Members",
  // "desc": "At KCE, the Department of Computer Science and Engineering is supported by a team of highly qualified, passionate, and approachable faculty members who are dedicated to student success. Our faculty combine strong academic knowledge with practical industry exposure to ensure students gain both conceptual clarity and real-world skills.",

  FacultyImage: [
    {
      src: "/images/kce/faculties/CSE-Faculty.jpeg",
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
