import Homepage from "@/components/00-KCE/DirectComponents/Homepage";
import HomePopup from "@/components/00-KCE/common/HomePopup";

export const metadata = {
  title: "Best Engineering Colleges in Coimbatore,Tamilnadu | KCE",
  description: "kce.ac.in",
};

const HomePage = async () => {
  return (
    <>
      <HomePopup />
      <Homepage />
    </>
  );
};

export default HomePage;
