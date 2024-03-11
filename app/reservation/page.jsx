import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import FooterTwo from "../footer/footerTwo";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Contactcontainer from "./contact-container";
import HeaderTwo from "../header/headerTwo";

const Contact = () => {
  return (
    <>
      <SEO pageTitle="Contact Us" />
      <HeaderTwo />
      <BreadCrumb
        title="예약하기"
        innerTitle="Reservation"
        bgImage="/img/bg/banner-bg.jpg"
      />
      <Contactcontainer />
      <FooterTwo />
      <ScrollToTopButton />
    </>
  );
};

export default Contact;
