import React from "react";

const Drink = props => {
  const drink = props.drink && props.drink.drinks[0];
  return (
    <div className="drink">
      {props.drink && (
        <div className="drinkBody">
          <div className="drinkHeader">{drink.strDrink}</div>
          <div className="drinkDirections">{drink.strInstructions}</div>
          <div className="drinkIngredients">
            <ul>
              {props.ingredients.map(x => {
                return <li key={Date.now() + x}>{x}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drink;
