import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";

export const metadata = {
  title: "Electronics and Communication Engineering College in Coimbatore",
  description: "KCE is one of the best  Electronics and Communication Engineering Colleges in Coimbatore, offering modern labs, hands-on learning, and top placements.",
};

const newpageData = {
  slug: "department-of-electronics-and-communication-engineering",
  banner: {
    bannerImg: "/images/kce/banner_computer_technology.jpg",
    title: "Faculty Members of Department of Electronics and Communication Engineering",
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
        href: "/department-of-electronics-and-communication-engineering",
        label: "Department of Electronics and Communication Engineering",
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
      src: "/images/kce/faculties/ECE-Faculty.jpeg",
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
