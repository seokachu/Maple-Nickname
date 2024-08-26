import React from "react";
import NicknameItem from "./NicknameItem";
import Pagination from "./Pagination";
import NicknameCount from "./NicknameCount";

const NicknameList = () => {
  return (
    <>
      <ul>
        <li>닉네임</li>
        <li>이름 생성 시도 횟수</li>
        <li>경매 시작일</li>
      </ul>
      <NicknameCount />
      <ul>
        <NicknameItem />
      </ul>
      <Pagination />
    </>
  );
};

export default NicknameList;
