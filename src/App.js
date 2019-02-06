import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { recipes } from './data/tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const baseUrl = `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${
  process.env.REACT_APP_F2F_KEY
}`;

class App extends Component {
  state = {
    recipes: recipes,
    url: baseUrl,
    search: '',
    query: '&q=',
  };

  getRecipes = async () => {
    const { url } = this.state;
    try {
      const data = await fetch(url);
      const jsonData = await data.json();

      this.setState({
        recipes: jsonData.recipes,
      });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    // this.getRecipes();
  }

  handleSearchChange = e => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { url, query, search } = this.state;
    this.setState(
      {
        url: `${url}${query}${search}`,
        search: '',
      },
      () => {
        // this.getRecipes();
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <RecipeList
                  recipes={this.state.recipes}
                  handleSearchChange={this.handleSearchChange}
                  handleSubmit={this.handleSubmit}
                  search={this.state.search}
                />
              )}
            />
            <Route path="/:id" component={RecipeDetails} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
