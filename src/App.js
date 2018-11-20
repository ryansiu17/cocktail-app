import React, { Component } from "react";
import "./App.scss";
import Search from "./components/Search";
import Results from "./components/Results";
import Drink from "./components/Drink";

// const uuidv4 = require("uuid/v4");

class App extends Component {
  state = {
    drinkArray: [],
    ingredients: undefined,
    selectedDrink: undefined
  };

  searchDrink = async e => {
    e.preventDefault();

    const drinkName = e.target.elements.drinkText.value;

    const api_call = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    );

    const data = await api_call.json();

    console.log(data.drinks);
    this.setState({
      drinkArray: data.drinks
    });
  };

  selectDrink = async id => {
    console.log(id);

    const api_call = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    const data = await api_call.json();

    console.log(data);

    const ingredients = Object.keys(data.drinks[0]).filter(property =>
      property.startsWith("strIngredient")
    );

    const measures = Object.keys(data.drinks[0]).filter(property =>
      property.startsWith("strMeasure")
    );

    const list = ingredients.map((each, i) => {
      return {
        key: Date.now() + i,
        ingredient: data.drinks[0][ingredients[i]],
        measure:
          data.drinks[0][measures[i]] !== null &&
          data.drinks[0][measures[i]].match(/[a-z0-9]/i)
            ? " - " + data.drinks[0][measures[i]]
            : null
      };
    });

    console.log(list);
    this.setState({
      selectedDrink: data,
      ingredients: list
    });
  };
  render() {
    return (
      <div className="app">
        <Search searchDrink={this.searchDrink} />
        <Results
          drinkArray={this.state.drinkArray}
          selectDrink={this.selectDrink}
        />
        <Drink
          drink={this.state.selectedDrink}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default App;
