import React from "react";

const Card = props => {
  const openMe = event => {
    event.preventDefault();
    props.selectDrink(props.idDrink);
  };
  return (
    <div className="card" onClick={openMe}>
      <div className="cardHeader">{props.strDrink}</div>
      <img className="cardImg" alt="thumbnail" src={props.strDrinkThumb} />
    </div>
  );
};

export default Card;
