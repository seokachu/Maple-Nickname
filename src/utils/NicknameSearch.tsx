import useDebounce from "@/hooks/useDebounce";
import {
  useAuctionData,
  useSearch,
  useSetActionsData,
} from "@/shared/data-store";
import { SelectedDateProps } from "@/types";
import React, { useEffect, useId } from "react";

const NicknameSearch = ({ selectedDate }: SelectedDateProps) => {
  const id = useId();
  const search = useSearch();
  const data = useAuctionData();
  const { debouncedValue } = useDebounce(search, 500);
  const { setFilteredData, setSearch, setPage, setDisplayData } =
    useSetActionsData();

  const filteredData = data.filter((item) => {
    const matchesSearch =
      debouncedValue.trim() === "" || item.a.includes(debouncedValue);
    const matchesDate = !selectedDate || item.b === selectedDate;

    // 검색어와 날짜 모두 일치하는 경우에만 true 반환
    return matchesSearch && matchesDate;
  });

  const handleFormSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredData(filteredData);
    setDisplayData(filteredData);
    setPage(1);
  }, [filteredData, setFilteredData, setPage, setDisplayData, selectedDate]);

  return (
    <div>
      <label htmlFor={`${id}-nickname`}>닉네임 검색</label>
      <input
        id={`${id}-nickname`}
        type="text"
        placeholder="닉네임을 입력해 주세요."
        value={search}
        onChange={handleFormSearch}
      />
    </div>
  );
};

export default NicknameSearch;
