"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

import MenuData from "../../../../data/kce/MegaMenu.json";

// import addImage from "../../../../public/images/service/mobile-cat.jpg";
import addImage from "../../../../public/images/banner/co-men.png";

const Nav = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [activeChild, setActiveChild] = useState(null);
  const [activeChildMenu, setActiveChildMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();

  const isActive = (href) => pathname.startsWith(href);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992); // Adjust breakpoint as needed
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
      setActiveChild(null);
      setActiveChildMenu(null);
    } else {
      setActiveMenuItem(item);
      setActiveSub(null);
      setActiveChild(null);
      setActiveChildMenu(null);
    }
  };

  const toggleSubMenu = (item) => {
    if (activeSub == item) {
      setActiveSub(null);
      setActiveChild(null);
      setActiveChildMenu(null);
    } else {
      setActiveSub(item);
      setActiveChild(null);
      setActiveChildMenu(null);
    }
  };

  const toggleChildMenu = (childItem) => {
    if (activeChildMenu == childItem) {
      setActiveChildMenu(null);
    } else {
      setActiveChildMenu(childItem);
    }
  };

  // Hover handlers for desktop
  const handleSubMenuHover = (item) => {
    if (!isMobile) {
      setActiveSub(item);
      setActiveChild(null);
      setActiveChildMenu(null);
    }
  };

  const handleChildHover = (child) => {
    if (!isMobile) {
      setActiveChild(child);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveSub(null);
      setActiveChild(null);
      setActiveChildMenu(null);
    }
  };

  const showThreeCols =
    activeSub && activeSub.children && activeSub.children.length > 0;

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        {MenuData.menuData.map((menu, index) => {
          const isOpen = activeMenuItem === menu.menuType;
          const currentMenuItems = menu.menuItems || [];

          return (
            <li
              key={index}
              className={`with-megamenu ${
                menu.hasMenuChild ? "has-menu-child-item" : ""
              } ${menu.hasPositionStatic ? "position-static" : ""}`}
            >
              {/* TOP LEVEL BUTTON */}
              <Link
                className={`${isOpen ? "open" : ""}`}
                href={menu.link ? menu.link : "#"}
                target={menu.target ? menu.target : "_self"}
                onClick={() => isMobile && toggleMenuItem(menu.menuType)}
              >
                {menu.menuTitle}
                {menu.hasMenuChild && <i className="feather-chevron-down"></i>}
              </Link>

              {/* MEGA MENU WRAPPER */}
              {menu.hasMegamenu && (
                <div
                  className={`rbt-megamenu ${
                    menu?.desc && menu?.src
                      ? showThreeCols
                        ? "grid-item-3"
                        : "grid-item-2"
                      : showThreeCols
                        ? "grid-item-3"
                        : "grid-item-1"
                  } ${isOpen ? "active d-block" : ""}`}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="wrapper">
                    <div className="row row--15">
                      {/* COLUMN 1 — MAIN ITEMS */}
                      <div
                        className={`single-mega-item ${
                          menu?.desc && menu?.src ?
                          showThreeCols
                            ? "col-lg-4 col-xl-4 col-xxl-4"
                            : "col-lg-6 col-xl-6 col-xxl-6"
                          : showThreeCols 
                            ? "col-lg-6 col-xl-6 col-xxl-6"
                            : "col-lg-12 col-xl-12 col-xxl-12"
                        }`}
                      >
                        <ul className="mega-menu-item">
                          {currentMenuItems.map((item, i) => (
                            <li
                              key={i}
                              className={
                                item.children
                                  ? "has-submenu has-menu-child-item"
                                  : ""
                              }
                              onMouseEnter={() => handleSubMenuHover(item)}
                            >
                              <Link
                                className={`${showThreeCols ? "open" : ""} ${
                                  activeSub === item ? "active" : ""
                                }`}
                                href={item.link}
                                target={item.target ? item.target : "_self"}
                                onClick={(e) => {
                                  if (isMobile && item.children) {
                                    e.preventDefault();
                                    toggleSubMenu(item);
                                  }
                                }}
                              >
                                {item.title}
                                {item.children && (
                                  <i className="feather-chevron-right ms-2"></i>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* COLUMN 2 — SUBMENU LIST */}
                      <div
                        className={`single-mega-item ${
                          menu?.desc && menu?.src ?
                          showThreeCols
                            ? "col-lg-4 col-xl-4 col-xxl-4 active d-block"
                            : "d-none"
                          : showThreeCols
                            ? "col-lg-6 col-xl-6 col-xxl-6 active d-block"
                            : "d-none"
                        }`}
                      >
                        {activeSub?.children && (
                          <ul className="mega-menu-item submenu-list">
                            {activeSub.children.map((child, idx) => (
                              <li
                                key={idx}
                                className={
                                  child.children
                                    ? "has-submenu has-menu-child-item position-relative"
                                    : ""
                                }
                                onMouseEnter={() => handleChildHover(child)}
                              >
                                <Link
                                  className={`${child.title} ${
                                    activeChildMenu === child.title
                                      ? "open"
                                      : ""
                                  }`}
                                  href={child.link}
                                  target={child.target ? child.target : "_self"}
                                  onClick={(e) => {
                                    if (isMobile && child.children) {
                                      e.preventDefault();
                                      toggleChildMenu(child.title);
                                    } else if (isMobile) {
                                      setActiveChild(child);
                                    }
                                  }}
                                >
                                  {child.title}
                                  {child.children && (
                                    <i className="feather-chevron-right ms-2"></i>
                                  )}
                                </Link>

                                {/* CHILD SUBMENU */}
                                {child.children && (
                                  <ul
                                    className={`mega-menu-item submenu-list child-submenu position-absolute ${
                                      activeChildMenu === child.title
                                        ? "active d-block"
                                        : "d-none"
                                    }`}
                                    style={{
                                      top: "100%",
                                      left: 0,
                                      minWidth: "200px",
                                      zIndex: 1000,
                                    }}
                                  >
                                    {child.children.map((grand, g) => (
                                      <li key={g}>
                                        <Link
                                          href={grand.link}
                                          onClick={() => setActiveChild(grand)}
                                          target={
                                            grand.target
                                              ? grand.target
                                              : "_self"
                                          }
                                        >
                                          {grand.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* COLUMN 3 — IMAGE & CONTENT */}
                      {(menu?.desc && menu?.src) ? 
                      <div
                        className={`single-mega-item ${
                          showThreeCols
                            ? "col-lg-4 col-xl-4 col-xxl-4"
                            : "col-lg-6 col-xl-6 col-xxl-6"
                        }`}
                      >
                        <div className="rbt-ads-wrapper fade-smooth">
                          <h6 className="sub-dd-ti">
                            {activeChild?.title ||
                              activeSub?.title ||
                              menu.menuTitle}
                          </h6>

                          <p className="sub-dd-p">
                            {activeChild?.desc ||
                              activeSub?.desc ||
                              "Explore more details related to this section."}
                          </p>

                          <Link
                            className="d-block"
                            href={activeChild?.link || activeSub?.link || "#"}
                          >
                            <Image
                              src={
                                activeChild?.src ||
                                activeSub?.src ||
                                addImage
                              }
                              alt="Menu Banner"
                              width={400}
                              height={300}
                            />
                          </Link>
                        </div>
                      </div>
                      : null}
                      
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
export default Nav;
