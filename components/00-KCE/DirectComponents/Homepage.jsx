// "use client";

import React from "react";

import Cart from "@/components/Header/Offcanvas/Cart";

import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import { getAllPostsMeta } from "@/mdx";
import About from "../Home/AboutSection/About";
import HeroSection from "../Home/HeroSection/HeroSection";
import ProgrammesSection from "../Home/ProgrammesSection/ProgrammesSection";
import AlumniSuccess from "../Home/AlumniSuccess/AlumniSuccess";
import AlumniSlider from "../Home/AlumniSuccess/AlumniSlider";
import StudentsAchievements from "../Home/StudentsAchievements/StudentsAchievements";

const Homepage = async ({ getBlog }) => {
  const blog = await getAllPostsMeta();
  return (
    <main>
      <HeroSection />
      <About />
      <ProgrammesSection />
      <AlumniSlider />
      <StudentsAchievements />
      <MainDemo blogs={blog} />
      <Cart />
    </main>
  );
};

export default Homepage;
