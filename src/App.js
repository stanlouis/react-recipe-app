import React, { Component, Fragment } from "react";
import "./App.css";
import { recipes } from "./data/tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends Component {
  state = {
    recipes: recipes,
    details_id:35386,
  };

  // getRecipes = async () => {
  //   const url = `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${
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
        {/* <RecipeList recipes={this.state.recipes}/> */}
        <RecipeDetails id={this.state.details_id}/>
      </Fragment>
    );
  }
}

export default App;
