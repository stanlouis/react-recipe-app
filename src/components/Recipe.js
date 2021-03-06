import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
class Recipe extends Component {
  render() {
    const {
      image_url,
      title,
      source_url,
      publisher,
      recipe_id,
    } = this.props.recipe;
    return (
      <Fragment>
        <div className="col-10 mx-auto col-md6 col-lg-4 my-3">
          <div className="card">
            <div className="view overlay">
              <a href="!#">
                <img
                  src={image_url}
                  alt="recipe-pic"
                  style={{ height: '14rem', width: '100%' }}
                  className="img-card-top"
                />
                <div className="mask rgba-white-slight" />
              </a>
            </div>

            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-warning text-slanted">
                provided by {publisher}
              </h6>
            </div>
            <div className="card-footer">
              <Link
                className="btn btn-light-green text-capitalize"
                to={`/${recipe_id}`}
              >
                details
              </Link>

              <a
                href={source_url}
                className="btn btn-dark-green mx-2 text-capitalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recipe <i className="fas fa-external-link-square-alt" />
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Recipe;
