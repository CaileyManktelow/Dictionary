import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Definition from "./Definition";

export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function load() {
    setLoaded(true);
    Search();
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }
  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function Search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <h3>What would you like to define?</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a word"
              onChange={handleKeyWordChange}
            />
          </form>
        </section>
        <Definition definition={definition} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
