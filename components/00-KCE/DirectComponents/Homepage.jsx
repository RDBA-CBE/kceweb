// "use client";

import React from "react";

import Cart from "@/components/Header/Offcanvas/Cart";

import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import { getAllPostsMeta } from "@/mdx";

const Homepage = async ({ getBlog }) => {
  const blog = await getAllPostsMeta();
  return (
    <main>
      <MainDemo blogs={blog} />
      <Cart />
    </main>
  );
};

export default Homepage;
