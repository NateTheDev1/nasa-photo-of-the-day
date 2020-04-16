import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Welcome from "./components/Welcome/Welcome";
import { Alert, Container } from "reactstrap";

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

  if (data.length !== 0) {
    return (
      <div className="App">
        <Container>
          <Header />
          <Welcome title={data.title} />
          <Card data={data} />
        </Container>
      </div>
    );
  } else {
    return (
      <Alert className="loading" color="info">
        Loading...
      </Alert>
    );
  }
}
export default App;
