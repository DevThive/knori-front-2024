import Social from "@/app/socials/page";
import Link from "next/link";
import React from "react";

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`header__area-menubar-right-sidebar-popup three ${
          isOpen ? "active" : ""
        }`}
      >
        <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>
          <i className="fal fa-times"></i>
        </div>
        <div className="header__area-menubar-right-sidebar-popup-logo">
          <Link href="/">
            <img src="/playnori.png" alt="logo" />
          </Link>
        </div>
        <p>
          케이놀이문화재단은 수백 년 전통 놀이를 현대적으로 재해석하여 힐링
          공간을 제공합니다. 전통과 현대가 어우러진 체험을 통해 방문객들은
          영감을 얻고, 모든 사람이 문화를 향유할 수 있는 기회를 마련합니다.
          이곳은 전통 속에서 현대적 감성을 발견하며 마음의 안식을 찾는 곳입니다.
        </p>
        <div className="header__area-menubar-right-box-sidebar-popup-image">
          <img src="/img/SiteImage/SubImage1.jpeg" alt="" />
        </div>
        <div className="header__area-menubar-right-box-sidebar-popup-contact">
          <h4 className="mb-30">Contact Info</h4>
          <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
              <i className="fal fa-phone-alt"></i>
            </div>
            <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
              <span>Call Now</span>
              <h6>
                <Link href="tel:+82(031)8769500"> (031) 876 9500 </Link>
              </h6>
            </div>
          </div>
          <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
              <i className="fal fa-envelope"></i>
            </div>
            <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
              <span>Quick Email</span>
              <h6>
                <Link href="mailto:knori2024@gmail.com">
                  knori2024@gmail.com
                </Link>
              </h6>
            </div>
          </div>
          <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
              <i className="fal fa-map-marker-alt"></i>
            </div>
            <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
              <span>Office Address</span>
              <h6>
                <Link href="https://www.google.com/maps">
                  경기도 양주시 백석읍 기산로 548
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <div className="header__area-menubar-right-box-sidebar-popup-social">
          <Social />
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen ? "show" : ""}`}></div>
    </>
  );
};

export default SideBar;
