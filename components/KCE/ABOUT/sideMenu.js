"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function SideMenu(props) {
  const { active, menuItems, onMenuClick } = props;
  const router = useRouter();

  const defaultMenuItems = [
    { label: "About Karpagam", path: "/KCE/profile" },
    { label: "Vision & Mission", path: "/KCE/vision-mission" },
    { label: "Management Profile", path: "/KCE/management-profile" },
    { label: "Programmes Offered", path: "/KCE/courses-offered" },
    { label: "Centers of Excellence", path: "/KCE/centers-of-excellence" },
    { label: "Accreditations", path: "/KCE/accreditations/" },
    { label: "Placement", path: "/KCE/overview/" },
  ];

  const items = menuItems || defaultMenuItems;

  return (
    <div className="col-lg-3 about-sidebar">
      <div className="about-sticky-menu fade-left">
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={active === item.label ? "active" : ""}
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
          ))}
        </ul>
      </div>
    </div>
  );
}

// "use client";

// import { useRouter } from "next/navigation";
// import React from "react";
// import {
//   FaUniversity,
//   FaEye,
//   FaUsers,
//   FaGraduationCap,
//   FaFlask,
//   FaAward,
//   FaBriefcase,
//   FaExternalLinkAlt
// } from "react-icons/fa";

// export default function SideMenu({ active }) {
//   const router = useRouter();

//   const menuItems = [
//     {
//       label: "About Karpagam",
//       path: "/KCE/profile",
//       icon: <FaUniversity />,
//       description: "College overview"
//     },
//     {
//       label: "Vision & Mission",
//       path: "/KCE/vision-mission",
//       icon: <FaEye />,
//       description: "Our goals & objectives"
//     },
//     {
//       label: "Management Profile",
//       path: "/management",
//       icon: <FaUsers />,
//       description: "Leadership team"
//     },
//     {
//       label: "Programmes Offered",
//       path: "/programmes",
//       icon: <FaGraduationCap />,
//       description: "Courses & degrees"
//     },
//     {
//       label: "Centers of Excellence",
//       path: "/centers",
//       icon: <FaFlask />,
//       description: "Research centers"
//     },
//     {
//       label: "Accreditations",
//       path: "/accreditations",
//       icon: <FaAward />,
//       description: "Certifications & ratings"
//     },
//     {
//       label: "Placement",
//       path: "/placement",
//       icon: <FaBriefcase />,
//       description: "Career opportunities"
//     },
//   ];

//   return (
//     <div className="col-lg-3 about-sidebar">
//       <div className="about-sticky-menu fade-left">
//         {/* Menu Header */}

//         {/* Menu Items */}
//         <ul className="nav-menu">
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               className={`nav-item ${active === item.label ? "active" : ""}`}
//               onClick={() => router.push(item.path)}
//             >
//               <div className="nav-item-content">
//                 <div className="nav-icon-wrapper">
//                   {item.icon}
//                 </div>
//                 <div className="nav-text-wrapper">
//                   <span className="nav-label">{item.label}</span>
//                   <span className="nav-description">{item.description}</span>
//                 </div>
//                 <div className="nav-arrow">
//                   <FaExternalLinkAlt />
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>

//       </div>

//     </div>
//   );
// }
