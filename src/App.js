import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
function App() {
  const API_KEY = "NVYidd3P4hx1R46ts9fBdswKkbllBG7m9tu5PEmB";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="App">
      <Header />
      <Card />
    </div>
  );
}
export default App;
