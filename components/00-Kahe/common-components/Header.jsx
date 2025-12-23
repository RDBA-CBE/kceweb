import { useAppContext } from "@/context/Context";
import HeaderTop from "./Header-sub-components/HeaderTop";
import HeaderMenu from "./Header-sub-components/HeaderMenu";
import HeaderLogos from "./Header-sub-components/HeaderLogos";

// 17-online-academy header

const Header = () => {
  const { isLightTheme, toggleTheme } = useAppContext();
  return (
    <>
      <header className="rbt-header rbt-header-4 rbt-header-4-container-var kahe">
        <div className="rbt-sticky-placeholder"></div>
        {/* <HeaderTop
          bgColor="bg-green rbt-border-bottom"
          gapSpaceBetween=""
          container="section-wid"
          flexDirection=""
          btnClass="rbt-switch-btn btn-gradient btn-xs"
          btnText="Register Now"
        /> */}

         <HeaderLogos
          sticky="bg-color-white"
          gapSpaceBetween="shadow-none"
          container="section-wid"
          navigationEnd="rbt-navigation-start"
          btnClass="rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
          btnText="Enroll Now"
        />

        <HeaderMenu
          sticky="bg-gray header-sticky kahe-header-menu"
          gapSpaceBetween=" shadow-none"
          container="section-wid"
          navigationEnd="rbt-navigation-start"
          btnClass="rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none"
          btnText="Enroll Now"
        />
      </header>
    </>
  );
};

export default Header;
