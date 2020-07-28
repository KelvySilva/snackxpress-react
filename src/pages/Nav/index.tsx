import React from 'react';

import { Link } from "react-router-dom";

import {ReactComponent as Dashboard } from "../../assets/dashboard.svg";
import {ReactComponent as RecipesLogo } from "../../assets/recipes.svg";
import {ReactComponent as IngredientsLogo } from "../../assets/ingredients.svg";
import {ReactComponent as ProductLogo } from "../../assets/product.svg";

const Nav = () => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
        <ul className="nav flex-column py-5">
            <li className="nav-item">
                <Link className="nav-link active" to="/"> 
                    <Dashboard />                   
                    Dashboard <span className="sr-only">(current)</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/recipes">
                    <RecipesLogo />
                    Recipes
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/ingredients">
                    <IngredientsLogo />
                    Ingredients
                </Link>
            </li>
           <li className="nav-item">
                <Link className="nav-link" to="/products">
                    <IngredientsLogo />
                    Products 
                </Link>
            </li>
             {/* <li className="nav-item">
                <Link className="nav-link" to="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                            Reports
                            </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                            Integrations
                            </Link>
            </li> */}
        </ul>


    </div>
</nav>
    )
}

export default Nav;