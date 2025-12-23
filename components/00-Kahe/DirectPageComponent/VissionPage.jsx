"use client";

import InnerBanner from "../../KCE/common/InnerBanner";
import CoreValues from "../Components/About/CoreValues";
import QuoteBox from "../Components/About/QuoteBox";
import Vision from "../Components/About/Vission";
import Mission from "../Components/About/Mission";

import { VissionMissiondata } from "@/JSON/About/VissionMission";

const VissionPage = () => {
  return (
    <>
      <InnerBanner data={VissionMissiondata?.data} />

      <section className="section-wid">
        <Vision vision={VissionMissiondata?.vision} />
      </section>
      <section className="bg-lgreen">
        <Mission
          title="Mission"
          buttonText="View All Requirements"
          buttonLink="/mission"
          missionItems={VissionMissiondata?.missionData}
        />
      </section>

      <CoreValues values={VissionMissiondata?.values} title="Core Values" />

      <QuoteBox data={VissionMissiondata?.qualityMottoData} />
    </>
  );
};

export default VissionPage;
