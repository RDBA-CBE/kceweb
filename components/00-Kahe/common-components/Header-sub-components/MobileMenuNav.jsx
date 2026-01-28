"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import MenuData from "../../../../data/kce/MegaMenu.json";
import MobileMenuList from "./MobileMenuList";

const MobileMenuNav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();

  const isActive = (href) => pathname.startsWith(href);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1200); // Adjust breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleMenuItem = (item) => {
    if (activeMenuItem == item) {
      setActiveMenuItem(null);
      setActiveSub(null);
    } else {
      setActiveMenuItem(item);
      setActiveSub(null);
    }
  };

  const showThreeCols =
    activeSub && activeSub.children && activeSub.children.length > 0;

  const [activeKeys, setActiveKeys] = useState([]);

  const toggleKey = (title) => {
    setActiveKeys((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <nav className="mainmenu-nav mobile-menu">
      <ul className="mainmenu">
        {MenuData.menuData.map((menu) => {
          const isActive = activeMenuItem === menu.menuType;
          const hasMegaMenu = menu.menuItems && menu.menuItems.length > 0;

          return (
            <li
              key={menu.menuType}
              className={`with-megamenu has-menu-child-item ${
                hasMegaMenu ? "position-static" : ""
              }`}
            >
              <Link
                className={`${isActive ? "open" : ""}`}
                href="#"
                onClick={(e) => {
                   e.preventDefault(); 
                  isMobile && toggleMenuItem(menu.menuType)}}
              >
                {menu.menuTitle}
                <i className="feather-chevron-down"></i>
              </Link>

              {/* Mega Menu */}
              {hasMegaMenu && (
                <div
                  className={`rbt-megamenu ${
                    showThreeCols ? "grid-item-3" : "grid-item-2"
                  } ${isActive ? "active d-block" : ""}`}
                >
                  <div className="wrapper">
                    <div className="row row--15">
                      <MobileMenuList
                        items={menu.menuItems}
                        activeKeys={activeKeys}
                        toggleKey={toggleKey}
                      />
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default MobileMenuNav;
