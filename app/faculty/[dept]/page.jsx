import FacultyPage from "@/components/00-KCE/Academics/FacultyPage";
import { getFacultyDataBySlug } from "@/utils/facultyDataMap";
import { notFound } from "next/navigation";

const page = ({ params }) => {
  const data = getFacultyDataBySlug(params?.dept);

  if (!data) return notFound();

  return <FacultyPage data={data} />;
};

export default page;
