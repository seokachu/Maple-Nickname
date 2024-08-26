"use client";
import {
  useFilteredData,
  usePage,
  usePageSize,
  useSetActionsData,
} from "@/shared/data-store";
import S from "@/styles/nickname.module.css";
import { useEffect } from "react";

const Pagination = () => {
  const page = usePage();
  const pageSize = usePageSize();
  const filteredData = useFilteredData();
  const { setPage } = useSetActionsData();

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(filteredData.length / pageSize);

  // 페이지 변경 처리 함수
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }, [handlePageChange]);

  return (
    <div className={S.pageWrapper}>
      <div className={S.buttonInner}>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          이전
        </button>
        <span>
          {page} &#47; {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Pagination;
