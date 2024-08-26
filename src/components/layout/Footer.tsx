import Link from "next/link";
import React from "react";
import S from "@/styles/commons.module.css";

const Footer = () => {
  return (
    <footer className={S.footer}>
      <address>
        <p>2024&copy;seokachu</p>
        <p>
          문의 메일 보내기 &#58; &nbsp;
          <Link href="mailto:seokachuu@gmail.com">seokachuu@gmail.com</Link>
        </p>
      </address>
    </footer>
  );
};

export default Footer;
