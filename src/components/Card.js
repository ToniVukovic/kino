import React from "react";
import "./../styles.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="image-wrapper">
        {props.revija && <div className="oscar-revija">OSCAR REVIJA</div>}
        {props.titl && <div className="titl">TITL</div>}
        {props.sink && <div className="titl">SINK</div>}
        <img src="https://picsum.photos/200/300" alt="slika" />
        {props.pretpremijera && (
          <div className="pretpremijera">PRETPREMIJERA</div>
        )}
      </div>
      <div className="card-boxes-wrapper">
        <p className="dan">Danas</p>
        <p className="termini-danas">
          <p className="termin">20:00</p>
          <p className="termin">22:30</p>
          <p className="termin">20:00</p>
        </p>
        <p className="ostali-dani">Ostali dani</p>
      </div>
    </div>
  );
};

export default Card;
