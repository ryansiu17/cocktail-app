import React from "react";

const Card = props => {
  return (
    <div className="card">
      <div className="cardHeader">{props.strDrink}</div>
      <img className="cardImg" alt="thumbnail" src={props.strDrinkThumb} />
    </div>
  );
};

export default Card;
