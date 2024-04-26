"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Search from "./sidebar/search";
import Social from "../socials/page";
import SideBar from "./sidebar/sidebar";
import { closeModal } from "../home-two/bookingmodal";

const HeaderTwo = ({ variant }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  // 로고를 클릭하여 모달을 닫고 첫 화면으로 돌아가는 함수
  const handleLogoClick = () => {
    closeModal(); // 모달을 닫음
    window.location.href = "/"; // 첫 화면으로 이동
  };

  return (
    <>
      <div className="header__area three">
        {/* 나머지 코드 */}
        <div className="header__area-menubar-left">
          <div className="header__area-menubar-left-logo">
            {/* 로고 클릭 시 handleLogoClick 함수 호출 */}
            <Link href="/" onClick={handleLogoClick}>
              <img src="/logo2.png" alt="logo" height={"300px"} />
            </Link>
            <span
              className={
                mobileToggle
                  ? "mobile-menu two mobile-menu-active"
                  : "mobile-menu two"
              }
              onClick={() => setMobileToggle(!mobileToggle)}
            >
              <span></span>
            </span>
          </div>
        </div>
        {/* 나머지 코드 */}
      </div>
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    </>
  );
};

export default HeaderTwo;
