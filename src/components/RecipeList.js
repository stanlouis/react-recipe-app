import React, { Component, Fragment } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

class RecipeList extends Component {
  render() {
    const {
      recipes,
      handleSearchChange,
      handleSubmit,
      search,
      error,
    } = this.props;
    return (
      <Fragment>
        <RecipeSearch
          handleSearchChange={handleSearchChange}
          handleSubmit={handleSubmit}
          search={search}
        />
        <div className="container my-5">
          {/*title*/}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>
          {/*end*/}
          <div className="row">
            {error ? (
              <h1 className="text-danger text-center">{error}</h1>
            ) : (
              recipes.map(recipe => {
                return <Recipe key={recipe.recipe_id} recipe={recipe} />;
              })
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RecipeList;
