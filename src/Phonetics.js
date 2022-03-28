import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noopener noreferrer">
        listen
      </a>
      <br />
      {props.phonetics.text}
    </div>
  );
}
