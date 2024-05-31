"use client";
import BreadCrumb from "../breadcrumb/breadcrumb";
import FooterTwo from "../footer/footerTwo";
import HeaderTwo from "../header/headerTwo";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Gallery from "./gallery";
import Offerarea from "./offer-area";
import Servicestwo from "./services-two";
import KakaoTalkContactButton from "@/app/kakao/kakaomodal";

import SEO from "@/components/seo";

const About = () => {
  return (
    <>
      <SEO pageTitle="About Us" />
      <HeaderTwo />
      <BreadCrumb
        title="스토리"
        innerTitle="STORY"
        bgImage="/img/bg/banner-bg.jpg"
      />
      <Offerarea />
      <Servicestwo />
      <Gallery />
      <FooterTwo />
      <KakaoTalkContactButton />
      <ScrollToTopButton />
    </>
  );
};

export default About;
