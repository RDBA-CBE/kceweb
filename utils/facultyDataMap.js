// import aids from "@/JSON/ACADEMIC/dept_of_aids.json";
import civil from "@/JSON/ACADEMIC/dept_of_civil.json";
// import csd from "@/JSON/ACADEMIC/dept_of_csd.json";
// import cse from "@/JSON/ACADEMIC/dept_of_cse.json";
// import cseCyber from "@/JSON/ACADEMIC/dept_of_cse_cyber.json";
// import cst from "@/JSON/ACADEMIC/dept_of_cst.json";
// import ece from "@/JSON/ACADEMIC/dept_of_ece.json";
// import eee from "@/JSON/ACADEMIC/dept_of_eee.json";
// import ete from "@/JSON/ACADEMIC/dept_of_ete.json";
// import it from "@/JSON/ACADEMIC/dept_of_it.json";
// import mca from "@/JSON/ACADEMIC/dept_of_mca.json";
// import mech from "@/JSON/ACADEMIC/dept_of_mechengg.json";
// import ms from "@/JSON/ACADEMIC/dept_of_ms.json";
// import sciHum from "@/JSON/ACADEMIC/dept_of_sci_hum.json";

// const allDepts = [aids, civil, csd, cse, cseCyber, cst, ece, eee, ete, it, mca, mech, ms, sciHum];```
const allDepts = [ civil];


function extractFacultyData(deptJson) {
  const sections = deptJson?.sections || [];
  for (const section of sections) {
    if (section.type === "split-image-content") {
      for (const content of section.data?.content || []) {
        if (content.type === "button" && content.newpageData) {
          return content.newpageData;
        }
      }
    }
  }
  return null;
}

export function getFacultyDataBySlug(slug) {
  const normalize = (s) => s?.toLowerCase().replace(/\s+/g, "-");
  for (const dept of allDepts) {
    const data = extractFacultyData(dept);
    if (normalize(data?.slug) === normalize(slug)) {
      return data;
    }
  }
  return null;
}
