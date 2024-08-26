import React from "react";
import NicknameItem from "./NicknameItem";
import Pagination from "./Pagination";
import NicknameCount from "./NicknameCount";
import S from "@/styles/nickname.module.css";

const NicknameList = () => {
  return (
    <>
      <NicknameCount />
      <ul className={S.nicknameTitle}>
        <li>번호</li>
        <li>닉네임</li>
        <li>시도 횟수</li>
        <li>경매 시작일</li>
      </ul>
      <ul className={S.nicknameList}>
        <NicknameItem />
      </ul>
      <Pagination />
    </>
  );
};

export default NicknameList;
