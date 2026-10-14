import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";

export const metadata = {
  title: "Best Science and Humanities College in Coimbatore",
  description:
    "KCE is a leading science and humanities college in Coimbatore, offering advanced labs, skilled faculty, and practical learning programs.",
};

const newpageData = {
  slug: "department-of-science-and-humanities",
  banner: {
    bannerImg: "/images/kce/banner_computer_technology.jpg",
    title: "Faculty Members of Department of Science and Humanities",
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
        href: "/department-of-science-and-humanities",
        label: "Department of Science and Humanities",
      },
      {
        label: "Faculty Members",
      },
    ],
  },
  sectionTi: "Our Faculty Members",
  // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",

  FacultyImage: [
    {
      src: "/images/kce/faculties/SE-faculty.jpeg",
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
