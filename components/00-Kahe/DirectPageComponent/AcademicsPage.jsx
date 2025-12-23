"use client";
import { CustomHook } from "@/utils/customHook";

const AcademicsPage = ({ slug = "" }) => {
  const { data, loading, error } = CustomHook(slug);
console.log('✌️data --->', data?.content?.rendered);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>{data?.title?.rendered}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: (data?.content?.rendered),
        }}
      />
    </div>
  );
};

export default AcademicsPage;
