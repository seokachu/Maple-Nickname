"use client";
import NicknameSearch from "@/utils/NicknameSearch";
import React, { useId, useState } from "react";

const SearchForm = () => {
  const id = useId();
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor={`${id}-date`}>경매 시작일</label>
        <select
          id={`${id}-date`}
          value={selectedDate}
          onChange={handleDateChange}
        >
          <option value="">날짜 선택</option>
          <option value="08-29">08-29</option>
          <option value="08-30">08-30</option>
          <option value="08-31">08-31</option>
          <option value="09-01">09-01</option>
          <option value="09-02">09-02</option>
          <option value="09-03">09-03</option>
          <option value="09-04">09-04</option>
          <option value="09-05">09-05</option>
          <option value="09-06">09-06</option>
          <option value="09-07">09-07</option>
          <option value="09-08">09-08</option>
          <option value="09-09">09-09</option>
          <option value="09-10">09-10</option>
        </select>
      </div>
      <NicknameSearch selectedDate={selectedDate} />
    </form>
  );
};

export default SearchForm;
