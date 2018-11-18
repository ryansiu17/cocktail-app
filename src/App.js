import React, { Component } from "react";
import "./App.scss";
import Search from "./components/Search";
import Results from "./components/Results";
import Drink from "./components/Drink";

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

    let ingredients = [];
    let measures = [];
    for (var x in data.drinks[0]) {
      if (x.includes("strIngredient")) {
        if (data.drinks[0][x] !== "" && data.drinks[0][x] !== null) {
          ingredients.push(data.drinks[0][x]);
        }
      }
    }
    for (var y in data.drinks[0]) {
      if (y.includes("strMeasure")) {
        data.drinks[0][y] !== null && data.drinks[0][y].match(/[a-z]/i)
          ? measures.push("- " + data.drinks[0][y])
          : measures.push(" ");
      }
    }

    const list = [];
    for (var i = 0; i < ingredients.length; i++) {
      list.push(ingredients[i] + " " + measures[i]);
    }
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
