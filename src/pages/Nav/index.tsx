import React from 'react';

import { Link } from "react-router-dom";

import {ReactComponent as Dashboard } from "../../assets/dashboard.svg";
import {ReactComponent as RecipesLogo } from "../../assets/recipes.svg";
import {ReactComponent as IngredientsLogo } from "../../assets/ingredients.svg";

const Nav = () => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
        <ul className="nav flex-column py-5">
            <li className="nav-item">
                <Link className="nav-link active" to="#"> 
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
            {/* <li className="nav-item">
                <Link className="nav-link" to="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            Customers
                            </Link>
            </li>
            <li className="nav-item">
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