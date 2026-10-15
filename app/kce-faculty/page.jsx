import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";

export const metadata = {
  title: "Our Faculty | KCE College – Expert Educators",
  description: "Explore the faculty at KCE College, featuring qualified educators and experienced professionals dedicated to quality education, practical learning, and student success.",
};

const newpageData = {
  slug: "department-of-management-studies",
  banner: {
    bannerImg: "/images/kce/banner_computer_technology.jpg",
    title: "KCE Faculty Members",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      
      {
        label: "KCE Faculty",
      },
    ],
  },
  sectionTi: "Our Faculty Members",
  // desc: "The Department of Management Studies at KCE is supported by a team of experienced and dedicated faculty focused on developing future business leaders.They adopt practical and interactive teaching methods to help students understand real-world management concepts with ease. Faculty members actively mentor students in projects, internships, and career planning to ensure professional growth.With expertise in areas like marketing, finance, human resources, and entrepreneurship, they keep students aligned with current industry trends.Their continuous guidance and support help students build confidence, leadership skills, and become successful management professionals.",

  FacultyImage: [
    {
      src: "/images/kce/kceFaculty/AD_Page.jpeg",
    },

    {
      src: "/images/kce/kceFaculty/CE.jpeg",
    },

    {
      src: "/images/kce/kceFaculty/CSE.jpeg",
    },

    {
      src: "/images/kce/kceFaculty/CY.jpeg",
    },

    {
      src:"/images/kce/kceFaculty/EC.jpeg",
    },

    {
      src:"/images/kce/kceFaculty/EE.jpeg",
    },

    {
      src:"/images/kce/kceFaculty/IT.jpeg",
    },
     
    {
      src:"/images/kce/kceFaculty/MBA.jpeg",
    },
     
    {
      src:"/images/kce/kceFaculty/MCA.jpeg",
    },

    {
      src:"/images/kce/kceFaculty/ME.jpeg",
    },

    {
      src:"/images/kce/kceFaculty/S&H.jpeg",
    },

    {
      src:"/images/kce/kceFaculty/GE.jpeg",
    },

    {
      src:"/images/kce/kceFaculty/VLSI.jpeg",
    }
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
