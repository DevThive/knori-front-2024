"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <meta
        name="naver-site-verification"
        content="550204e59f84f97c6d655ddf5855768050ce5744"
      />
      <meta name="description" content="양주 도자기 공방에서의 체험과 작품 제작에 대한 정보" />
      <meta name="keywords" content="양주, 도자기, 도자기 공방, 도자기 체험, 전통 놀이 체험, 도자기 만들기, 한국 전통, 문화 체험, 가족 체험, 어린이 체험" />
      <meta name="author" content="양주 도자기 공방" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content="양주 도자기 공방에서의 체험을 통해 나만의 작품을 만들어보세요." />
      {/* <meta property="og:image" content="이미지 URL을 여기에 삽입" />
      <meta property="og:url" content="페이지 URL을 여기에 삽입" /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content="양주 도자기 공방 체험과 작품 제작에 대한 정보" />
      {/* <meta name="twitter:image" content="이미지 URL을 여기에 삽입" /> */}
    </>
  );
};

export default SEO;
