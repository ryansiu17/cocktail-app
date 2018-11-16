import React, { Component } from "react";
import "./App.scss";
import Search from "./components/Search";
import Results from "./components/Results";
import Drink from "./components/Drink";

class App extends Component {
  state = {
    drinkArray: [],
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

    this.setState({
      selectedDrink: data
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
        <Drink drink={this.state.selectedDrink} />
      </div>
    );
  }
}

export default App;
