// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import logo from "../../../public/images/logo/logo.png";
// import { useAppContext } from "@/context/Context";

// const SidebarCopy = ({ subMenu }) => {
//   const { sidebar, setSidebar } = useAppContext();

//   console.log("sidebar", sidebar);

//   return (
//     <>
//       <div
//         className={`inner-sidebar popup-mobile-menu kahe ${
//           sidebar ? "active" : ""
//         }`}
//       >
//         <div className="backdrop" onClick={() => setSidebar(!sidebar)}></div>
//         <div className="inner-wrapper">
//           <div className="inner-top">
//             <div className="content">
//               <div className="rbt-btn-close">
//                 <button
//                   className="close-button rbt-round-btn"
//                   onClick={() => setSidebar(!sidebar)}
//                 >
//                   <i className="feather-x"></i>
//                 </button>
//               </div>
//             </div>

//             <ul className="mainmenu">
//               {subMenu?.content?.map((menu) => {
//                 const isActive = activeMenuItem === menu.menuType;
//                 const hasMegaMenu = menu.menuItems && menu.menuItems.length > 0;

//                 return (
//                   <li
//                     key={menu.menuType}
//                     className={`with-megamenu has-menu-child-item ${
//                       hasMegaMenu ? "position-static" : ""
//                     }`}
//                   >
//                     <Link
//                       className={`${isActive ? "open" : ""}`}
//                       href="#"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         isMobile && toggleMenuItem(menu.menuType);
//                       }}
//                     >
//                       {menu.menuTitle}
//                       <i className="feather-chevron-down"></i>
//                     </Link>

//                     {/* Mega Menu */}
//                     {hasMegaMenu && (
//                       <div
//                         className={`rbt-megamenu ${
//                           showThreeCols ? "grid-item-3" : "grid-item-2"
//                         } ${isActive ? "active d-block" : ""}`}
//                       >
//                         <div className="wrapper">
//                           <div className="row row--15">
//                             <MobileMenuList
//                               items={menu.menuItems}
//                               activeKeys={activeKeys}
//                               toggleKey={toggleKey}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SidebarCopy;

"use client";

import Link from "next/link";
import { useAppContext } from "@/context/Context";

const Sidebar2 = ({ subMenu }) => {
  const { sidebar, setSidebar } = useAppContext();

  return (
    <div
      className={`inner-sidebar popup-mobile-menu kahe ${
        sidebar ? "active" : ""
      }`}
    >
      <div className="backdrop" onClick={() => setSidebar(false)}></div>

      <div className="inner-wrapper">
        <div className="inner-top">
          <div className="content">
            {subMenu?.title && (
              <h6 className="sidebar-title">{subMenu.title}</h6>
            )}
            <div className="rbt-btn-close">
              <button
                className="close-button rbt-round-btn"
                onClick={() => setSidebar(false)}
              >
                <i className="feather-x"></i>
              </button>
            </div>
          </div>

          {/* Menu */}
          <ul className="mainmenu">
            {subMenu?.content?.map((menu, index) => {
              const hasItems = menu?.items && menu.items.length > 0;

              return (
                <li key={index} className={hasItems ? "has-submenu" : ""}>
                  {/* Category link */}
                  <Link
                    href={`/kahe/${menu.link}` || "#"}
                    onClick={() => setSidebar(false)}
                  >
                    {menu.category || menu.name}
                  </Link>

                  

                  {/* Sub items */}
                  {hasItems && (
                    <ul className="submenu">
                      {menu.items.map((item, i) => (
                        <li key={i}>
                          <Link
                           href={`/kahe/${item.link}` || "#"}
                            onClick={() => setSidebar(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
