import { useAppContext } from "@/context/Context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderTop = ({
  gapSpaceBetween,
  bgColor,
  flexDirection,
  btnText,
  btnClass,
  container,
}) => {
  const pathname = usePathname();
  const { toggle, setToggle } = useAppContext();
  return (
    <>
      <div
        className={`rbt-header-top rbt-header-top-1 ${
          pathname === "/19-modern-university" ||
          "/24-health-wellness-institute"
            ? ""
            : "variation-height-50"
        } ${gapSpaceBetween} ${bgColor} d-none d-xl-block ${
          !toggle ? "d-none" : ""
        }`}
      >
        <div className={`${container}`}>
          <div className={`rbt-header-sec align-items-center ${flexDirection}`}>
            <div className="rbt-header-sec-col rbt-header-left">
              <div className="rbt-header-content">
                <div className="header-info">
                  <ul className="rbt-information-list">
                    <li>
                      <Link href="tellto:+1-202-555-0174">
                        <i className="feather-phone"></i>+1-202-555-0174
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="rbt-separator"></div>
                <div className="header-info">
                  <ul className="rbt-information-list">
                    <li>
                      <Link href="mailto:abc@gmail.com">
                        <i className="feather-mail"></i>abc@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>

            <div className="rbt-header-sec-col rbt-header-right">
              <div className="rbt-header-content">
                <div className="header-info">
                  <ul className="rbt-secondary-menu">
                    <li>
                      <Link href="/my-account">Academic Calendar</Link>
                    </li>
                    <li>
                      <Link href="#">Alumni Association</Link>
                    </li>
                    <li>
                      <Link href="/contact"> Student Login</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Karpagam Publications</Link>
                    </li>
                    <li>
                      <Link href="#">Center for ODL/DL</Link>
                    </li>
                    <li>
                      <Link href="#">Admission Enquiry</Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="rbt-separator"></div> */}
                {/* <div className="header-info" onClick={() => setToggle(!toggle)}>
                  <div className="header-right-btn d-flex">
                    <Link className={`rbt-btn ${btnClass}`} href="#">
                      <span data-text={`${btnText}`}>{btnText}</span>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
