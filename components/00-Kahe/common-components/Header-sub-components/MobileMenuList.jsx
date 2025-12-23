import Link from "next/link";
import React from "react";

const MobileMenuList = ({ items, activeKeys, toggleKey, level = 1 }) => {
  return (
    <ul className={`mobile-level-${level}`}>
      {items.map((item, i) => (
        <li key={i} className={item.children ? "has-submenu has-menu-child-item" : ""}>
          {/* Menu title */}
          <Link
            href={item.link || "#"}
            onClick={(e) => {
              if (item.children) {
                e.preventDefault();
                toggleKey(item.title);
              }
            }}
            className={activeKeys.includes(item.title) ? "open" : ""}
          >
            {item.title}

            {item.children && <i className="feather-chevron-down"></i>}
          </Link>

          {/* Submenu */}
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
