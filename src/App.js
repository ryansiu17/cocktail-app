import React, { Component } from "react";
import "./App.scss";
import Search from "./components/Search";
import Results from "./components/Results";
import Drink from "./components/Drink";

class App extends Component {
  state = {
    drinkArray: []
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
  render() {
    return (
      <div className="app">
        <Search searchDrink={this.searchDrink} />
        <Results drinkArray={this.state.drinkArray} />
        <Drink />
      </div>
    );
  }
}

export default App;
