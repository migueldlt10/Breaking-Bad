import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const filterResults = (filter) => {
    setText(filter);
    getQuery(filter);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters..."
          value={text}
          onChange={(event) => filterResults(event.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
