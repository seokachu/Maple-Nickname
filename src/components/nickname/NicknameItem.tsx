"use client";
import { useDisplayData, usePage, usePageSize } from "@/shared/data-store";
import { useEffect, useState } from "react";
import Loading from "../common/Loading";
import S from "@/styles/commons.module.css";

const NicknameItem = () => {
  const page = usePage();
  const pageSize = usePageSize();
  const displayData = useDisplayData();
  const [loading, setLoading] = useState(true);

  // 데이터 로드 시 로딩 상태 관리
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, [displayData, page, pageSize]);

  const displayDataResult = displayData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {displayDataResult.length > 0 ? (
        <>
          {displayDataResult.map((item, index: number) => (
            <li key={index}>
              <p style={{ color: "red" }}>{index + 1}</p>
              <p>{item.a}</p>
              <p>{item.c}</p>
              <p>{item.b}</p>
            </li>
          ))}
        </>
      ) : (
        <div className={S.emptyNickname}>닉네임이 없습니다.</div>
      )}
    </>
  );
};

export default NicknameItem;
