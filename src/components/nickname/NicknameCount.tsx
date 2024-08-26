"use client";
import { useFilteredData } from "@/shared/data-store";

const NicknameCount = () => {
  const filteredData = useFilteredData();
  const nicknameCount = filteredData.length;

  return (
    <div>
      <p>총 닉네임 수 : {nicknameCount} </p>
    </div>
  );
};

export default NicknameCount;
