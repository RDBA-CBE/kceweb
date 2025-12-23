"use client";

import { base } from "@/utils/constant.util";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
// import { useAppContext } from "@/context/Context";

const Breadcrumb = ({ items = [], showHome = true }) => {
  // const { sidebar, setSidebar } = useAppContext();

  // Default Home item
  const homeItem = { label: "Home", href: "/" };

  // Merge Home + passed items (avoid duplicate Home)
  const finalItems =
    showHome && items[0]?.label !== "Home" ? [homeItem, ...items] : items;

  if (!finalItems.length) return null;

  return (
    <nav
      aria-label="Breadcrumb "
      className="section-wid py-3 px-0 mt-3 kahe-breadcrumb"
    >
      <ol
        className="d-flex flex-wrap  align-items-center mb-0 ps-0"
        style={{ whiteSpace: "nowrap" }}
      >
        {finalItems.map((item, index) => {
          const isLast = index === finalItems.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="d-flex align-items-center py-0 my-0 mt-2"
            >
              {!isLast && item.href ? (
                <Link
                  href={
                    item.label !== "Home" ? `${base}/${item.href}` : item.href
                  }
                  className="fw-medium text-decoration-none text-secondary"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="fw-semibold text-success">{item.label}</span>
              )}

              {!isLast && (
                <FaChevronRight className="mx-2 small text-success" />
              )}
            </li>
          );
        })}
      </ol>

      {/* <div className="mobile-menu-bar">
        <div className="hamberger">
          <button
            className="hamberger-button rbt-round-btn"
            onClick={() => setSidebar(!sidebar)}
          >
            <i className="feather-menu"></i>
          </button>
        </div>
      </div> */}
    </nav>
  );
};

export default Breadcrumb;
