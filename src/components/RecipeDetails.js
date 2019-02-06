import React, { Component, Fragment } from 'react';
import { recipe } from '../data/tempDetails';

class RecipeDetails extends Component {
  state = {
    recipe: recipe,
  };

  async componentDidMount() {
    // const url = `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/get?key=${
    //     process.env.REACT_APP_F2F_KEY
    //   }&rId=${this.props.id}`
    // try {
    //   const data = await fetch(url);
    //   const jsonData = await data.json();
    //   this.setState({
    //     recipe: jsonData.recipe,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients,
    } = this.state.recipe;
    return (
      <Fragment>
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                type="button"
                className="btn warning-color mb-5 text-capitalize"
              >
                back to recipe list
              </button>
              <img src={image_url} alt="recipe" className="d-block w-100" />
            </div>
            {/* details */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                provided by {publisher}
              </h6>
              <a
                href={publisher_url}
                className="btn warning-color-dark mt-2 text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                Publisher <i className="fas fa-external-link-alt" />
              </a>
              <a
                href={source_url}
                className="btn warning-color mt-2 mx-3 text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                recipe <i className="fas fa-external-link-alt" />
              </a>
              <h2 className="mt-3 mb-4">Ingredients</h2>
              <ul className="list-group mt-4">
                {ingredients.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item text-slanted">
                      <div className="md-v-line" />
                      <i className="fas fa-utensils mr-3 p-2 green-text grey lighten-3 rounded-circle" />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RecipeDetails;
