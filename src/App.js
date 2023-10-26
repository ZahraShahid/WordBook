import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

import { Container } from '@mui/material';
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";

function App () {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const dictionaryApi = async () => {
    try {
      // Obtener datos para una palabra específica en un idioma específico utilizando axios
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      // Extraer datos del objeto recibido y establecer significados
      setMeanings(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Se llama cuando el componente se monta
  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word, category]);

  return (
    <div className="App"
      style={ {
        height: "100vh",
        backgroundColor: "#28B463", // Color de fondo blanco por defecto
        color: "black", // Color de texto negro por defecto
      } }>
      <Container
        maxWidth="md"
        style={ { display: "flex", flexDirection: "column", height: "100vh" } }
      >
        <Header
          word={ word }
          setWord={ setWord }
        />
        { meanings &&
          <Definitions word={ word } meanings={ meanings } />
        }
      </Container>
    </div>
  );
}

export default App;
