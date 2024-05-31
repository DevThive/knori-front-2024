import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import ContactList from "./contact";
import FooterTwo from "../footer/footerTwo";
import HeaderTwo from "../header/headerTwo";
import KakaoTalkContactButton from "@/app/kakao/kakaomodal";

const Contact = () => {
  return (
    <>
      <SEO pageTitle="Contact Us" />
      <HeaderTwo />
      <BreadCrumb
        title="문의하기"
        innerTitle="Contact Us"
        bgImage="/img/bg/banner-bg.jpg"
      />
      <ContactList />
      <FooterTwo />
      <KakaoTalkContactButton />
      <ScrollToTopButton />
    </>
  );
};

export default Contact;
