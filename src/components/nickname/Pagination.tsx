"use client";
import {
  useFilteredData,
  usePage,
  usePageSize,
  useSetActionsData,
} from "@/shared/data-store";
import React from "react";

const Pagination = () => {
  const page = usePage();
  const pageSize = usePageSize();
  const filteredData = useFilteredData();
  const { setPage, setFilteredData } = useSetActionsData();

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(filteredData.length / pageSize);

  // 페이지 변경 처리 함수
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          이전
        </button>
        <span>
          Page {page} of {totalPages}
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
