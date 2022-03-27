import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Definition from "./Definition";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [definition, setDefinition] = useState(null);
  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }
  function handleResponse(response) {
    console.log(response);
    setDefinition(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
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
      <Definition definition={definition} />
    </div>
  );
}
