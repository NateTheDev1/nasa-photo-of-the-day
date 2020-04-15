import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
function App() {
  const API_KEY = "NVYidd3P4hx1R46ts9fBdswKkbllBG7m9tu5PEmB";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header title={data.title} />
      <Card data={data} />
    </div>
  );
}
export default App;
