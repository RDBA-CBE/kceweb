"use client";
import Link from "next/link";
import React from "react";
import { useAppContext } from "@/context/Context";

const MobileMenuList = ({ items, activeKeys, toggleKey, level = 1 }) => {
  const { setMobile } = useAppContext();

  return (
    <ul className={`mobile-level-${level}`}>
      {items.map((item, i) => (
        <li key={i} className={item.children ? "has-submenu has-menu-child-item" : ""}>
          <Link
            href={item.link || "#"}
            onClick={(e) => {
              if (item.children) {
                e.preventDefault();
                toggleKey(item.title);
              } else {
                setMobile(true);
              }
            }}
            className={activeKeys.includes(item.title) ? "open" : ""}
          >
            {item.title}
            {item.children && <i className="feather-chevron-down"></i>}
          </Link>

          {item.children && (
            <div
              className={`submenu-wrapper ${
                activeKeys.includes(item.title) ? "d-block" : "d-none"
              }`}
            >
              <MobileMenuList
                items={item.children}
                activeKeys={activeKeys}
                toggleKey={toggleKey}
                level={level + 1}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenuList;
