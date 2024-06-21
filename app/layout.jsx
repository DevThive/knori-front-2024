"use client";
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
import "./styles/fonts.css";
import "./styles/styles.css";
import "./assets/css/all.css";
import "./assets/css/meanmenu.min.css";
import "./assets/sass/style.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <html lang="ko-KR">
      <head>
        <link rel="icon" type="image/png" href="favicon.png" />
      </head>
      <body className="nanumbarungothic" style={{ zoom: "95%" }}>
        <NextTopLoader showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
