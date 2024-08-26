"use client";
import { useFilteredData } from "@/shared/data-store";
import S from "@/styles/nickname.module.css";

const NicknameCount = () => {
  const filteredData = useFilteredData();
  const nicknameCount = filteredData.length;

  return (
    <div className={S.nicknameCount}>
      <p>총 닉네임 수 : {nicknameCount} </p>
    </div>
  );
};

export default NicknameCount;
