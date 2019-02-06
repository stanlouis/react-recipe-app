import React, { Component } from 'react';

class RecipeSearch extends Component {
  render() {
    const { handleSearchChange, handleSubmit, search } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center">
            <h1 className="text-slanted text-capitalize">
              search recipes with{' '}
              <strong className="text-danger">Food2Fork</strong>
            </h1>
            <form className="mt-4">
              <label htmlFor="search" className="text-capitalize">
                type recipes separated by comma
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="chicken,onion,carrots"
                  value={search}
                  onChange={handleSearchChange}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text green darken-2 text-white"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeSearch;
