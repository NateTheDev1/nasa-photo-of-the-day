import React from "react";
import "./Card.css";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from "reactstrap";

const ImageCard = (props) => {
  return (
    // <div className="Card">
    //   <div className="image-container">
    //     <img src={props.data.hdurl} alt={props.data.title}></img>
    //     <p>{props.data.explanation}</p>
    //     <div className="date-link">
    //       <h2>{props.data.date}</h2>
    //       <a href={props.data.url}>Download Link</a>
    //     </div>
    //   </div>
    // </div>
    <div className="Card-Container">
      <Card>
        <CardImg
          src={props.data.hdurl}
          alt={props.data.title}
          className="card-img"
        />
        <CardBody>
          <CardTitle>{props.data.title}</CardTitle>
          <CardSubtitle>{props.data.date}</CardSubtitle>
          <CardLink href={props.data.url}>Check It Out</CardLink>
        </CardBody>
      </Card>
      <Card className="card-2">
        <CardBody>
          <CardText>{props.data.explanation}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default ImageCard;
