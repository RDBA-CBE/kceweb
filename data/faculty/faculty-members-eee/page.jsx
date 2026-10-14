import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";

export const metadata = {
  title: "Electrical and Electronics Engineering College In Coimbatore",
  description:
    "KCE stands out as an Electrical and Electronics Engineering College In Coimbatore, providing advanced labs, practical learning, and strong placements",
};

const newpageData = {
  slug: "department-of-electrical-and-electronics-engineering",
  banner: {
    bannerImg: "/images/kce/banner_computer_technology.jpg",
    title: "Faculty Members of Department of Electrical and Electronics Engineering",
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
        href: "/department-of-electrical-and-electronics-engineering",
        label: "Department of Electrical and Electronics Engineering",
      },
      {
        label: "Faculty Members",
      },
    ],
  },
  sectionTi: "Our Faculty Members",
  // desc: "The Department of Electrical and Electronics Engineering at KCE brings together experienced faculty with deep knowledge in electrical systems and energy technologies. Through research, industry exposure and engaging pedagogy, they prepare students for impactful careers in power and automation sectors.",

  FacultyImage: [
    {
      src: "/images/kce/faculties/EEE-faculty.jpeg",
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
