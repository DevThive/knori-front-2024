"use client";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Blog, Home, Page, Room } from "./Menu";
import DropDown from "./DropDown";
import Link from "next/link";
import SideBar from "./sidebar/sidebar";
import Search from "./sidebar/search";
import Social from "../socials/page";

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
        <div className="container custom__container">
          <div className="header__area-top-bar">
            <div className="header__area-top-bar-left">
              <div className="header__area-top-bar-left-info">
                <span>
                  <Link href="https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%96%91%EC%A3%BC%EC%8B%9C%20%EB%B0%B1%EC%84%9D%EC%9D%8D%20%EA%B8%B0%EC%82%B0%EB%A1%9C%20548/address/14131962.7689992,4548092.0519643,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%96%91%EC%A3%BC%EC%8B%9C%20%EB%B0%B1%EC%84%9D%EC%9D%8D%20%EA%B8%B0%EC%82%B0%EB%A1%9C%20548,new?c=19.00,0,0,0,dh&isCorrectAnswer=true">
                    <i className="fal fa-map-marker-alt"></i>QWHX+4V 양주시
                    경기도
                  </Link>
                </span>
              </div>
            </div>
            <div className="header__area-top-bar-right">
              <div className="header__area-top-bar-right-info">
                <span>Follow Us :</span>
                <Social />
              </div>
            </div>
          </div>
          <div
            className={`header__area-menubar three header__sticky ${
              variant ? variant : ""
            } ${isSticky ? "header__sticky-sticky-menu" : ""}`}
          >
            <div className="header__area-menubar-left">
              <div className="header__area-menubar-left-logo">
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
            <div className="header__area-menubar-right three">
              <div className="header__area-menubar-right-menu three menu-responsive">
                <ul
                  className="mobile__menu"
                  style={{ display: `${mobileToggle ? "block" : "none"}` }}
                >
                  {/* <li className="menu-item-has-children">
                    <a href="#">Home</a>
                    <DropDown>
                      <ul className="sub-menu">
                        <Home />
                      </ul>
                    </DropDown>
                  </li> */}
                  <li className="menu-item-has-children">
                    <a href="#">재단소개</a>
                    <DropDown>
                      <ul className="sub-menu">
                        <Page />
                      </ul>
                    </DropDown>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">클래스</a>
                    <DropDown>
                      <ul className="sub-menu">
                        <Room />
                      </ul>
                    </DropDown>
                  </li>
                  <li>
                    <Link href="/gallery">갤러리</Link>
                    {/* <a onClick={() => alert("업데이트 예정입니다.")}>갤러리</a> */}
                  </li>
                  <li>
                    <Link href="/contact">문의하기</Link>
                  </li>
                </ul>
              </div>
              <div className="header__area-menubar-right-box">
                <div className="header__area-menubar-right-box-search">
                  <div className="search">
                    <span
                      className="header__area-menubar-right-box-search-icon two open"
                      onClick={() => setSearch(true)}
                    >
                      <i className="fal fa-search"></i>
                    </span>
                  </div>
                  <Search isOpen={search} setIsOpen={setSearch} />
                </div>
                <div className="header__area-menubar-right-sidebar">
                  <div
                    className="header__area-menubar-right-sidebar-popup-icon three"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <i className="fal fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    </>
  );
};

export default HeaderTwo;
