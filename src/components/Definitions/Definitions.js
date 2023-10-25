import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings }) => {
  return (
    <div className="meanings">

      { word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) => mean.meanings.map((item) => (
          item.definitions.map((def) => (
            <div className="singleMean"

            >
              <b>{ def.definition }</b>
              <hr style={ { backgroundColor: "black", width: "100%" } } />
            </div>
          ))
        )))
      ) }
    </div>
  );
};

export default Definitions;