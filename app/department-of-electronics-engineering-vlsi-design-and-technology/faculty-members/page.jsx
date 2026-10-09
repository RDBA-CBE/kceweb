import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";

export const metadata = {
  title: "Electronics and Communication Engineering College in Coimbatore",
  description: "KCE is one of the best  Electronics and Communication Engineering Colleges in Coimbatore, offering modern labs, hands-on learning, and top placements.",
};

const newpageData = {
  slug: "department-of-electronics-engineering-vlsi-design-and-technology",
  banner: {
    bannerImg: "/images/kce/banner_computer_technology.jpg",
    title: "Faculty Members of Department of Electronics Engineering [VLSI Design and Technology]",
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
        href: "/department-of-electronics-engineering-vlsi-design-and-technology",
        label: "Department of Electronics Engineering [VLSI Design and Technology]",
      },
      {
        label: "Faculty Members",
      },
    ],
  },
  sectionTi: "Our Faculty Members",
  // desc: "Our faculty members actively guide students in academic projects, internships, skill development programs, and placement preparation. With expertise in areas such as VLSI design, wireless communication, IoT, and embedded systems, they ensure students stay aligned with current industry trends.",

  FacultyImage: [
    {
      src: "/images/kce/faculties/EE-VLSI-faculty.jpeg",
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
