import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="image-container">
        <img src="https://apod.nasa.gov/apod/image/2004/SailingStone_Burke_1366.jpg"></img>
        <p>
          How did this big rock end up on this strange terrain? One of the more
          unusual places here on Earth occurs inside Death Valley, California,
          USA. There a dried lakebed named Racetrack Playa exists that is almost
          perfectly flat, with the odd exception of some very large stones, one
          of which is pictured here in April of 2019 beneath a dark, Milky-Way
          filled sky. Now the flatness and texture of large playa like Racetrack
          are fascinating but not scientifically puzzling -- they are caused by
          mud flowing, drying, and cracking after a heavy rain. Only recently,
          however, has a viable scientific hypothesis been given to explain how
          heavy sailing stones end up near the middle of such a large flat
          surface. Unfortunately, as frequently happens in science, a seemingly
          surreal problem ends up having a relatively mundane solution. It turns
          out that in winter thin ice sheets form, and winds push ice sections
          laden with even heavy rocks across the temporarily slick playa when
          sunlight melts the ice.
        </p>
      </div>

      <h2>2020-04-13</h2>
      <a href="#">Download Link</a>
    </div>
  );
};

export default Card;
