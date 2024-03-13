import BreadCrumb from "@/app/breadcrumb/breadcrumb";
import FooterTwo from "@/app/footer/footerTwo";
import Classdetailscontainer from "./blog-details-container";
import HeaderTwo from "@/app/header/headerTwo";
import ScrollToTopButton from "@/app/scroll-to-top/scrollToTop";
import SEO from "@/components/seo";

const Classdetails = () => {
  return (
    <>
      <SEO pageTitle="Class Details" />
      <HeaderTwo />
      <BreadCrumb
        title="클래스"
        innerTitle="Class"
        bgImage="/img/bg/banner-bg.jpg"
      />
      <Classdetailscontainer />
      <FooterTwo />
      <ScrollToTopButton />
    </>
  );
};

export default Classdetails;
