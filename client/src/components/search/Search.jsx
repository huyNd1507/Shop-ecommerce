import React from "react";

const Search = ({ value, onChange }) => {
  return (
    <form>
      <input placeholder="Tìm kiếm" value={value} onChange={onChange} />
    </form>
  );
};

export default Search;
