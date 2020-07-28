import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Ingredients from './pages/Ingredients/IngredientList';
import Products from './pages/Products';
import Recipes from './pages/Recipes';
import Composities from './pages/Composities';
import Composite from './pages/Composite';
import Recipe from './pages/Recipe';
import CreateIngredient from './pages/Ingredients/CreateIngredient';

const Routes = () => {



    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ingredients" component={Ingredients}/>
                <Route path="/ingredient/new" exact component={CreateIngredient}/>
                <Route path="/products" component={Products} />
                <Route path="/recipes" component={Recipes} />
                <Route path="/recipe" render={Recipe} />
                <Route path="/composities" component={Composities} />
                <Route path="/composite" component={Composite} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
