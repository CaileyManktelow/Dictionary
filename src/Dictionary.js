import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyWord}`);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word"
          onChange={handleKeyWordChange}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
