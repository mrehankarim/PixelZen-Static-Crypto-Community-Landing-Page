import React from "react";
import "./card.css";
function Card() {
  return (
    <>
      <div className="card">
        <div className="color"></div>
        <div className="content">
          <h2>Join the digital revolution and take control of your finances</h2>
          <p>
            Experience the future of finance today with our innovative crypto
            currency app, providing seamless transactions and unparalleled
            security.
          </p>
          <button className="btn-dark">Get started</button>
        </div>
      </div>
    </>
  );
}

export default Card;
