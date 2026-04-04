export const buttonActions = {
  goToFaculty: ({ sectionData, block, router }) => {
    sessionStorage.setItem("facultyData", JSON.stringify(sectionData));
    sessionStorage.setItem("facultyUrl", window.location.href);
    router.push(`/faculty/${sectionData.slug}`);
  },
};
