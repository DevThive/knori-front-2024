import BreadCrumb from "@/app/breadcrumb/breadcrumb";
import FooterTwo from "@/app/footer/footerTwo";
import ReservationCheck from "./checkContainer";
import HeaderTwo from "@/app/header/headerTwo";
import ScrollToTopButton from "@/app/scroll-to-top/scrollToTop";
import SEO from "@/components/seo";
import KakaoTalkContactButton from "@/app/kakao/kakaomodal";

const Blogdetails = () => {
  return (
    <>
      <SEO pageTitle="Reservation Check" />
      <HeaderTwo />
      <BreadCrumb
        title="예약조회"
        innerTitle="Reservation Check"
        bgImage="/img/bg/banner-bg.jpg"
      />
      <ReservationCheck />
      <FooterTwo />
      <KakaoTalkContactButton />
      <ScrollToTopButton />
    </>
  );
};

export default Blogdetails;
