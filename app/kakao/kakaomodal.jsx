"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./kakaocss.css";

function KakaoTalkContactButton() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openKakaoContact = () => {
    // 새 창의 크기 및 위치를 지정
    const windowFeatures = "width=600,height=700,left=100,top=100";
    window.open(
      "https://pf.kakao.com/_xaxocxeG/chat",
      "_blank",
      windowFeatures
    );
  };

  return (
    <div
      className={`kakao-button-container ${
        showTopButton ? "with-top-button" : ""
      }`}
    >
      <button onClick={openKakaoContact} className="kakao-button">
        <div className="kakao-button-image-wrapper">
          <Image
            src="/img/icon/kakalogo.png"
            alt="Kakao Talk contact"
            width={50}
            height={50}
          />
        </div>
      </button>
    </div>
  );
}

export default KakaoTalkContactButton;
