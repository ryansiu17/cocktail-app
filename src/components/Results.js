import React from "react";
import Card from "./Card";
const Results = props => {
  return (
    <div className="results">
      <div className="resultsHeader" />
      <div className={props.drinkArray ? "cardList" : "cardListNull"}>
        {props.drinkArray &&
          props.drinkArray.map(x => (
            <Card
              strDrink={x.strDrink}
              strDrinkThumb={x.strDrinkThumb}
              idDrink={x.idDrink}
              selectDrink={props.selectDrink}
              key={x.idDrink}
            />
          ))}
      </div>
    </div>
  );
};

export default Results;
