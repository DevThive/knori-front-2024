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
    if (typeof window !== "undefined") {
      window.onload = () => {
        // 모든 리소스가 로드된 후 실행
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
      };
    }
  }, []);
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
