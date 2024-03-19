// import Accommodations from './accommodations/accommodations';
// import Banner from './banner/banner';
// import Blog from './blog/blog';
// import Deluxe from './deluxe/deluxe';
// import Feature from './feature/feature';
// import Footer from './footer/footer';
// import HeaderTwo from './header/headerTwo';
// import ScrollToTopButton from './scroll-to-top/scrollToTop';
// import Services from './services/services';
// import Testimonial from './testimonial/testimonial';
// import Videoarea from './videoarea/videoarea';
// import SEO from '@/components/seo';
import Home2 from "./home-two/page";
import ReactGA from "react-ga4";

if (process.env.NEXT_PUBLIC_GA_ID) {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID);
}

export default function Home() {
  return (
    <>
      <Home2 />
      {/* <SEO pageTitle="Home Default" />
      <HeaderTwo />
      <Banner />
      <Accommodations />
      <Deluxe />
      <Videoarea />
      <Services />
      <Feature />
      <Testimonial />
      <Blog />
      <Footer />
      <ScrollToTopButton /> .*/}
    </>
  );
}
