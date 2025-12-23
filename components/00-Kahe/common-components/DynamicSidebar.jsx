"use client";

import { useState } from "react";
import Link from "next/link";

const DynamicSidebar = ({ menuItems }) => {
  const [openAccordions, setOpenAccordions] = useState([]);

  const toggleAccordion = (e, title) => {
    e.preventDefault();
    setOpenAccordions((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  // FILTER OUT PDF MENUS + OVERVIEW
  const filteredItems =
    menuItems?.filter((item) => {
      // Remove Overview
      if (item?.title?.toLowerCase() === "overview") return false;

      const url = item?.link || item?.url;
      const hasPdfInItem = url?.toLowerCase()?.includes(".pdf");

      const children = item?.children || item?.SubMenu;

      const hasPdfInSub =
        children?.some((sub) =>
          (sub?.link || sub?.url)?.toLowerCase()?.includes(".pdf")
        ) ?? false;

      return !hasPdfInItem && !hasPdfInSub;
    }) ?? [];

  return (
    <aside className="sidebar-wrap d-none d-xl-block">
      <ul className="list-unstyled">
        {filteredItems.map((item) => {
          const children = item?.children || item?.SubMenu;
          return (
            <li key={item.title} className="mb-2">
              {children && children.length > 0 ? (
                <>
                  <Link
                    className="d-flex justify-content-between"
                    href={item.link || "#"}
                    onClick={(e) => toggleAccordion(e, item.title)}
                  >
                    {item.title}
                    <i className="feather-chevron-down mt-2"></i>
                  </Link>

                  {openAccordions.includes(item.title) && (
                    <ul className="list-unstyled ps-3 mt-1">
                      {children.map((child) => (
                        <li
                          key={child.title}
                          className="mb-1 d-flex justify-content-between"
                        >
                          <Link href={child.link || "#"}>{child.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.link || "#"}>{item.title}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default DynamicSidebar;
