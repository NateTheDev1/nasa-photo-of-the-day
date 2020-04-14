import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const API_KEY = "NVYidd3P4hx1R46ts9fBdswKkbllBG7m9tu5PEmB";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
