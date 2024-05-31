"use client";

import FooterTwo from "../footer/footerTwo";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Classcontainer from "./class-info";
import BreadCrumb from "../breadcrumb/breadcrumb";
import HeaderTwo from "../header/headerTwo";
import SEO from "@/components/seo";
import KakaoTalkContactButton from "@/app/kakao/kakaomodal";

const Class = () => {
  return (
    <>
      <SEO pageTitle="Class List" />
      <HeaderTwo />
      <BreadCrumb
        title="클래스 목록"
        innerTitle="Class List"
        bgImage="/img/bg/banner-bg.jpg"
      />
      <Classcontainer />
      <FooterTwo />
      <KakaoTalkContactButton />
      <ScrollToTopButton />
    </>
  );
};

export default Class;
