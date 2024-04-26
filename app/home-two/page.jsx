"use client";

import { useEffect } from "react";

import SEO from "@/components/seo";
import FooterTwo from "../footer/footerTwo";
import HeaderTwo from "../header/headerTwo";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Banner from "./banner";
import Blog from "./blog";
import Booking from "./booking";
import Callarea from "./call-area";
import Companyarea from "./company-area";
import Mainclass from "./deluxe";
import Instagram from "./instagram";
import Place from "./place";

const Home2 = () => {
  // const router = useRouter(); // 이 부분을 제거하거나 주석 처리합니다.

  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 window 객체의 유무를 체크합니다.
    if (typeof window !== "undefined") {
      // URL의 해시(#) 값을 기반으로 스크롤을 이동합니다.
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth",
          });
        }
      }
    }
  }, []); // 빈 의존성 배열을 사용하여 컴포넌트가 마운트될 때 한 번만 실행됩니다.

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
      <ScrollToTopButton />
    </>
  );
};

export default Home2;
