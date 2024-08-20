"use client";
import Link from "next/link";
import React from "react";
import Social from "../socials/page";
import footerOne from "@/components/data/footerOne";
import noticeData from "@/components/data/notices";
import { useState, useEffect } from "react";

const FooterTwo = () => {
  const [notices, setNotices] = useState([]); // 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      const data = await noticeData();
      setNotices(data);
    };
    fetchData();
  }, []);

  const currentNoticeItems = notices.slice(0, 3);

  return (
    <>
      <div className="footer__two">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-8 sm-mb-30">
              <div className="footer__two-widget">
                <div className="footer__two-widget-about">
                  <div className="footer__two-widget-about-logo">
                    <Link href="/">
                      <img src="/playnori.png" alt="logo" />
                    </Link>
                  </div>
                  <p>
                    (재) 케이놀이문화재단 대표이사 : 김봉현 <br />
                    체험장 : 경기도 양주시 기산로 548 <br /> 본사 : 서울 송파구
                    위례성대로 18. 9층 <br />
                    Tel : (031) 876 9500 Fax : 0508 118 1514 <br />
                    E-mail : knori2024@gmail.com
                  </p>
                  <div className="footer__two-widget-about-social">
                    <Social />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 lg-mb-30">
              <div className="footer__two-widget">
                <h5>페이지 바로가기</h5>
                <div className="footer__two-widget-menu">
                  <ul>
                    {footerOne.widgetMenus.map((item, index) => (
                      <li key={index}>
                        <Link href={item.link}>
                          <i className="fal fa-angle-double-right"></i>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 sm-mb-30">
              <div className="footer__two-widget">
                <h5>최근글</h5>
                <div className="footer__two-widget-post">
                  {currentNoticeItems?.map((data, id) => (
                    <div className="footer__two-widget-post-item">
                      <span>
                        <i className="fal fa-calendar-check"></i>
                        {data.year} - {data.month}
                      </span>
                      <h6>
                        <Link href={`/notice-details/${data.id}`}>
                          {data.title}
                        </Link>
                      </h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-7 col-sm-6">
              <div className="footer__two-widget">
                <h5>오픈시간</h5>
                <div className="footer__two-widget-hours">
                  <p>
                    월요일<span>9 : 00 AM - 18 : 00 PM</span>
                  </p>
                  <p>
                    화요일<span>9 : 00 AM - 18 : 00 PM</span>
                  </p>{" "}
                  <p>
                    수요일<span>9 : 00 AM - 18 : 00 PM</span>
                  </p>{" "}
                  <p>
                    목요일<span>9 : 00 AM - 18 : 00 PM</span>
                  </p>{" "}
                  <p>
                    금요일<span>9 : 00 AM - 18 : 00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright__two">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="copyright__two-title">
                  <p>
                    Copyright © 2023
                    <a href="#"> </a> Website by
                    <Link href="/">K-PLAY CULTURE</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterTwo;
