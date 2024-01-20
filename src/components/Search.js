import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input onChange={inputHandler} type="text" placeholder="想找些什麼" />
      <button onClick={search}>
        <div>Search</div>
      </button>
    </div>
  );
};

export default Search;
