// "use client";

import React from "react";

import Cart from "@/components/Header/Offcanvas/Cart";

import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import { getAllPostsMeta } from "@/mdx";
import About from "../Home/AboutSection/About";
import HeroSection from "../Home/HeroSection/HeroSection";
import ProgrammesSection from "../Home/ProgrammesSection/ProgrammesSection";
import AlumniSlider from "../Home/AlumniSuccess/AlumniSlider";
import StudentsAchievements from "../Home/StudentsAchievements/StudentsAchievements";
import QuickLinks from "../Home/QuicklinksSection/QuickLinks";
import IndustryPartners from "../Home/IndustrySection/IndustryPartners";
import PlacementBanner from "../Home/PlacementSection/PlacementBanner";
import LatestNewsSection from "../Home/NewsSection/LatestNewsSection";

const Homepage = async ({ getBlog }) => {
  const blog = await getAllPostsMeta();
  return (
    <main>
      <HeroSection />
      <About />
      <ProgrammesSection />
      <AlumniSlider />
      <StudentsAchievements />
      <LatestNewsSection />
      <PlacementBanner />
      <IndustryPartners />
      <QuickLinks />
    </main>
  );
};

export default Homepage;
