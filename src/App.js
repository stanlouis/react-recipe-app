import React, { Component, Fragment } from "react";
import "./App.css";
import { recipes } from "./data/tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends Component {
  state = {
    recipes: recipes,
  };

  // getRecipes = async () => {
  //   const url = `https://www.food2fork.com/api/search?key=${
  //     process.env.REACT_APP_F2F_KEY
  //   }`;
  //   try {
  //
  //     const data = await fetch(url);
  //     const jsonData = await data.json();
  //
  //     this.setState({
  //       recipes: jsonData.recipes
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // componentDidMount() {
  //   // this.getRecipes();
  // }


  render() {
    return (
      <Fragment>
        <RecipeList recipes={this.state.recipes}/>
        <RecipeDetails />
      </Fragment>
    );
  }
}

export default App;
