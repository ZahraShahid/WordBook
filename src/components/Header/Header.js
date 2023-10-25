import React from "react";

import "./Header.css";
import { TextField } from "@mui/material";


const Header = ({ word, setWord }) => {

  return (
    <div className="header">
      <span className="title">{ word ? word : "Diccionario" }</span>
      <div className="inputs">
        <TextField
          id="standard-basic"
          variant="filled"
          value={ word }
          onChange={ (e) => setWord(e.target.value) }
          className="search"
          label="Search a Word"
        />
      </div>
    </div>
  );
}

export default Header;