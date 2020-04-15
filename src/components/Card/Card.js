import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="image-container">
        <img src={props.data.hdurl} alt={props.data.title}></img>
        <p>{props.data.explanation}</p>
        <div className="date-link">
          <h2>{props.data.date}</h2>
          <a href={props.data.url}>Download Link</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
