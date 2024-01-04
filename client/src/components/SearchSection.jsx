import React from "react";

const SearchSection = ({ textFilter, setTextFilter }) => {
  return (
    <div className="search-section">
      <div className="search-label">ค้นหาสถานที่ท่องเที่ยว</div>
      <form>
        <input
          id="input-text-filter"
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน ......"
          value={textFilter}
          onChange={(event) => setTextFilter(event.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchSection;
