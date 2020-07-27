import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Ingredients from './pages/Ingredients';
import Products from './pages/Products';
import Recipes from './pages/Recipes';
import Composities from './pages/Composities';
import Composite from './pages/Composite';
import Recipe from './pages/Recipe';

const Routes = () => {



    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ingredients" component={Ingredients}/>
                <Route path="/products" component={Products} />
                <Route path="/recipes" component={Recipes} />
                <Route path="/recipe" render={(props:any)=><Recipe {...props}/>} />
                <Route path="/composities" component={Composities} />
                <Route path="/composite" component={Composite} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
