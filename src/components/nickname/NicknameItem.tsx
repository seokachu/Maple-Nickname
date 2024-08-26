"use client";
import { useDisplayData, usePage, usePageSize } from "@/shared/data-store";

const NicknameItem = () => {
  const page = usePage();
  const pageSize = usePageSize();
  const displayData = useDisplayData();

  const displayDataResult = displayData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

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
        <p>닉네임이 없습니다.</p>
      )}
    </>
  );
};

export default NicknameItem;
