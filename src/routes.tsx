import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Ingredients from './pages/Ingredients/IngredientList';
import Products from './pages/Products';
import Recipe from './pages/Recipes/Recipe';
import Recipes from './pages/Recipes/RecipeList';
import Composities from './pages/Composities';
import Composite from './pages/Composite';
import CreateIngredient from './pages/Ingredients/CreateIngredient';
import CreateRecipe from './pages/Recipes/CreateRecipe';

const Routes = () => {



    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ingredients" component={Ingredients}/>
                <Route path="/ingredient/new" exact component={CreateIngredient}/>
                <Route path="/products" component={Products} />
                <Route path="/recipes" component={Recipes} />
                <Route path="/recipe" component={Recipe} />
                <Route path="/recipe/new" exact component={CreateRecipe} />
                <Route path="/composities" component={Composities} />
                <Route path="/composite" component={Composite} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
