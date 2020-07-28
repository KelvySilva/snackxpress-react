import React, {useEffect, useState} from 'react';

import { useLocation, useHistory } from "react-router-dom";

import api from '../../../services/api';
import IRecipe from '../../../models/IRecipe';
import { FiCalendar } from 'react-icons/fi';
import Nav from '../../Nav';

interface Params {
    recipe_id: number
}



const Recipe = () => {
    
    const location = useLocation();
    const  params = location.state as Params;

    const history = useHistory();
    
    const [ recipe, setRecipe] = useState<IRecipe>(Object);

    useEffect(() => {
        api.get<IRecipe>(`/v1/protected/recipe/${params.recipe_id}`).then(res => {
            console.log(res.data);
            
            setRecipe(res.data);
        });
       
    }, []);

    return (
        <div className="jumbotron p-0">
        <div className="container-fluid">
            <div className="row">
                <Nav/>

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 py-5">
                   
                    <div className="d-flex justify-content-start flex-column flex-wrap flex-md-nowrap align-items-start pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">{recipe.name}</h1>
                        <h6 className="h6"> {(recipe.productFinal != undefined) && (recipe.productFinal.name)} </h6>
                        <div className="btn-toolbar mb-2 mb-md-0 d-none">
                            <div className="btn-group mr-2">
                                <button className="btn btn-sm btn-outline-secondary">Share</button>
                                <button className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <FiCalendar />
                                This week
                            </button>                        
                        </div>                        
                    </div>                    
                    
                        <div className="container">
                            <div className="row">
                               
                                <div className="col-lg-12">
                                   <ul className="list-unstyled">
                                      {(recipe.composities !=undefined) && (recipe.composities.map(rc => (
                                          <li>{rc.quantity} - {rc.ingredient.name}</li>
                                      )))}
                                   </ul>
                                </div>
                            </div>
                        </div>
                    
                </main>
            </div>
        </div>
    </div>
    )
}

export default Recipe;