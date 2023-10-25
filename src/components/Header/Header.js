import React from "react";
import "./Header.css";

import { createTheme, TextField, ThemeProvider } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import categories from "../../data/category";

const Header = ({ category, setCategory, word, setWord }) => {
  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#000", // Color del texto en el tema claro
      },
      type: "light", // Usar siempre el tema claro
    },
  });

  // Maneja el cambio de idioma y establece la palabra en vacío.
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  }

  return (
    <div className="header">
      <span className="title">{ word ? word : "Word Book" }</span>
      <div className="inputs">
        <ThemeProvider theme={ lightTheme }>
          <TextField
            id="standard-basic"
            variant="standard"
            value={ word }
            onChange={ (e) => setWord(e.target.value) }
            className="search"
            label="Search a Word"
          />
          <TextField
            id="standard-select-currency"
            select
            label="Language"
            value={ category }
            onChange={ (e) => handleChange(e.target.value) }
            variant="standard"
            className="select"
          >
            { categories.map((option) => (
              <MenuItem key={ option.label } value={ option.label }>
                { option.value }
              </MenuItem>
            )) }
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
