"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import SEO from "@/components/seo";
import FooterTwo from "./footer/footerTwo";
import HeaderTwo from "./header/headerTwo";
import ScrollToTopButton from "./scroll-to-top/scrollToTop";
import Banner from "./home-two/banner";
import Blog from "./home-two/blog";
import Booking from "./home-two/booking";
import Callarea from "./home-two/call-area";
import Companyarea from "./home-two/company-area";
import Mainclass from "./home-two/deluxe";
import Instagram from "./home-two/instagram";
import Place from "./home-two/place";
import Analytics from "./googleAnalyties/googleApi";
import KakaoTalkContactButton from "./kakao/kakaomodal";

const Home = () => {
  return (
    <>
      <SEO pageTitle="케이놀이문화재단" />
      <HeaderTwo />
      <Banner />
      <Companyarea />
      <Callarea />
      <Mainclass />
      <Booking />
      <Place />
      <Blog />
      <Instagram />
      <FooterTwo />
      <KakaoTalkContactButton />
      <ScrollToTopButton />
      <Analytics />
    </>
  );
};

export default Home;
