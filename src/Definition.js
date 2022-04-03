import React from "react";
import "./Definition.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
export default function Definition(props) {
  if (props.definition) {
    return (
      <div className="definition">
        <div className="word">
          <h2>{props.definition.word}</h2>
          {props.definition.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetic} />
              </div>
            );
          })}
        </div>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div className="meaning" key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
