import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import FooterTwo from "../footer/footerTwo";
import HeaderTwo from "../header/headerTwo";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Bloggridcontainer from "./blog-grid-container";
import KakaoTalkContactButton from "@/app/kakao/kakaomodal";

const Notices = () => {
  return (
    <>
      <SEO pageTitle="공지시항" />
      <HeaderTwo />
      <BreadCrumb
        title="공지사항"
        innerTitle="Notices"
        bgImage="/img/bg/banner-bg.jpg"
      />
      <Bloggridcontainer />
      <FooterTwo />
      <KakaoTalkContactButton />
      <ScrollToTopButton />
    </>
  );
};

export default Notices;
