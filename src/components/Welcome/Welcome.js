import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Welcome = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Welcome NASA Enthusiast</h1>
        <p className="lead">
          One of the most popular websites at NASA is the Astronomy Picture of
          the Day. In fact, this website is one of the most popular websites
          across all federal agencies. It has the popular appeal of a Justin
          Bieber video. This endpoint structures the APOD imagery and associated
          metadata so that it can be repurposed for other applications. In
          addition, if the concept_tags parameter is set to True, then keywords
          derived from the image explanation are returned. These keywords could
          be used as auto-generated hashtags for twitter or instagram feeds; but
          generally help with discoverability of relevant imagery.
        </p>
        <hr className="my-2" />
        <p className="lead" style={{ color: "#0B3D91", fontSize: "2rem" }}>
          Today's photo is titled '{props.title}'
        </p>
      </Jumbotron>
    </div>
  );
};

export default Welcome;
