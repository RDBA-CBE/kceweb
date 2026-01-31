"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

export default function SideMenu(props) {
  const { data, onMenuClick } = props;
  const router = useRouter();
  const pathname = usePathname(); // 👈 current URL

  // helper to normalize paths (remove trailing slash)
  const normalizePath = (path) =>
    path?.replace(/\/$/, "");

  return (
    <div className="col-lg-3 about-sidebar">
      <div className="about-sticky-menu fade-left">
        <ul>
          {data.map((item, index) => {
            const isActive =
              normalizePath(pathname) ===
              normalizePath(item.path);

            return (
              <li
                key={index}
                className={isActive ? "active" : ""}
                onClick={() => {
                  if (onMenuClick) {
                    onMenuClick(item.label);
                  } else {
                    router.push(item.path);
                  }
                }}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
