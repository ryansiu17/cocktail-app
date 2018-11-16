import React from "react";

const Drink = props => {
  return (
    <div className="drink">
      {props.drink && (
        <div className="drinkBody">
          <div className="drinkHeader">{props.drink.drinks[0].strDrink}</div>
          <div className="drinkDirections">
            {props.drink.drinks[0].strInstructions}
          </div>
          <div className="drinkIngredients">
            <ul>
              {props.drink.drinks[0].strIngredient1 !== "" &&
                props.drink.drinks[0].strIngredient1 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient1} {" - "}
                    {props.drink.drinks[0].strMeasure1}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient2 !== "" &&
                props.drink.drinks[0].strIngredient2 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient2} {" - "}
                    {props.drink.drinks[0].strMeasure2}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient3 !== "" &&
                props.drink.drinks[0].strIngredient3 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient3} {" - "}
                    {props.drink.drinks[0].strMeasure3}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient4 !== "" &&
                props.drink.drinks[0].strIngredient4 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient4} {" - "}
                    {props.drink.drinks[0].strMeasure4}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient5 !== "" &&
                props.drink.drinks[0].strIngredient5 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient5} {" - "}
                    {props.drink.drinks[0].strMeasure5}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient6 !== "" &&
                props.drink.drinks[0].strIngredient6 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient6} {" - "}
                    {props.drink.drinks[0].strMeasure6}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient7 !== "" &&
                props.drink.drinks[0].strIngredient7 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient7} {" - "}
                    {props.drink.drinks[0].strMeasure7}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient8 !== "" &&
                props.drink.drinks[0].strIngredient8 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient8} {" - "}
                    {props.drink.drinks[0].strMeasure8}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient9 !== "" &&
                props.drink.drinks[0].strIngredient9 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient9} {" - "}
                    {props.drink.drinks[0].strMeasure9}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient10 !== "" &&
                props.drink.drinks[0].strIngredient10 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient10} {" - "}
                    {props.drink.drinks[0].strMeasure10}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient11 !== "" &&
                props.drink.drinks[0].strIngredient11 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient11} {" - "}
                    {props.drink.drinks[0].strMeasure11}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient12 !== "" &&
                props.drink.drinks[0].strIngredient12 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient12} {" - "}
                    {props.drink.drinks[0].strMeasure12}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient13 !== "" &&
                props.drink.drinks[0].strIngredient13 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient13} {" - "}
                    {props.drink.drinks[0].strMeasure13}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient14 !== "" &&
                props.drink.drinks[0].strIngredient14 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient14} {" - "}
                    {props.drink.drinks[0].strMeasure14}
                  </li>
                )}
              {props.drink.drinks[0].strIngredient15 !== "" &&
                props.drink.drinks[0].strIngredient15 !== null && (
                  <li>
                    {props.drink.drinks[0].strIngredient15} {" - "}
                    {props.drink.drinks[0].strMeasure15}
                  </li>
                )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drink;
