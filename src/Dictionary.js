import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Definition from "./Definition";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function load() {
    setLoaded(true);
    Search();
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }
  function handleDictionaryResponse(response) {
    setDefinition(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function Search() {
    // documentation: https://dictionaryapi.dev/
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001c660fad3bba944e1867f2b4349d535db";
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=8`;
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
