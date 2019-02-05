import React, {Component, Fragment} from 'react';
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

class RecipeList extends Component {
    render() {
        return (
            <Fragment>
                <h1>Hello from RecipeList</h1>
                <RecipeSearch/>
                <Recipe/>
            </Fragment>
        );
    }
}

export default RecipeList;