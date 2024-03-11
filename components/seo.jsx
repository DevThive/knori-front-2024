"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle;
  }, []);
  <meta
    name="naver-site-verification"
    content="550204e59f84f97c6d655ddf5855768050ce5744"
  />;
};

export default SEO;
