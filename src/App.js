import React, { Component, Fragment } from "react";
import "./App.css";
import { recipes } from "./data/tempDetails";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends Component {
  render() {
    return (
      <Fragment>
        <RecipeList />
        <RecipeDetails />
      </Fragment>
    );
  }
}

export default App;
