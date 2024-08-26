import React from "react";
import S from "@/styles/commons.module.css";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/images/logo.avif";

const Header = () => {
  return (
    <header className={S.header}>
      <Link href="/">
        <Image src={LogoImage} alt="logo" />
        <h1 className="gamjaFlowerRegular">뉴네임 옥션 경매 이름 리스트</h1>
      </Link>
    </header>
  );
};

export default Header;
