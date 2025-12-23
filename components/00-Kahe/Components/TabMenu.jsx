"use client";

import { useAppContext } from "@/context/Context";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const TabMenu = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(sections?.[0]?.id);
  const [isScrolled, setIsScrolled] = useState(false);
  const { sidebar, setSidebar } = useAppContext();
  useEffect(() => {
    const sectionIds = sections.map((sec) => sec.id);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Determine current section
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop) {
          setCurrentSection(sectionId);
        }
      }

      // Check if scrolled past top
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <nav className={`mainmenu-nav onepagenav ${isScrolled ? "scrolled" : ""}`}>
      <ul className="mainmenu">
        {sections?.map((sec, i) => (
          <li className={currentSection === sec.id ? "current" : ""} key={i}>
            <ScrollLink
              to={sec.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              style={{ cursor: "pointer" }}
            >
              {sec.label}
            </ScrollLink>
          </li>
        ))}

        <span className="mobile-menu-bar d-none d-lg-block">
          <div
            href="#"
            className="hamberger"
            onClick={() => setSidebar(!sidebar)}
          >
            <i className="feather-menu"></i>
          </div>
        </span>
      </ul>
    </nav>
  );
};

export default TabMenu;
