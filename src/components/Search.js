import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <form className="searchForm" onSubmit={this.props.searchDrink}>
          <input
            autoComplete="off"
            className="searchInput"
            name="drinkText"
            type="text"
            placeholder="Search a Drink..."
          />
          <button className="searchButton" />
        </form>
      </div>
    );
  }
}

export default Search;
