import React, { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue("");
  };

  return (
    <form className="msg-search-form" onSubmit={handleSubmit}>
      <input
        className="msg-search-input"
        placeholder="Search"
        name="search"
        value={searchValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
