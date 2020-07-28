import React, {useState, useEffect} from 'react';

import { Link, useHistory } from "react-router-dom";

import api from '../../services/api';
import Recipe from '../Recipe';
import Nav from '../Nav';



interface ProductFinal {
    id:number;
    name: string;
    description: string;
    cost:number;
    stock:number;
    type: string;
    price:number;
    discount:number;
}



const Recipes = () => {

    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const history = useHistory();

    function handleNavigateToRecipe(id: number) {
        history.push('recipe', {recipe_id : id})
    }

    useEffect(() => {
        api.get<Recipe[]>('/v1/protected/recipes')
        .then(res => {
            setRecipes(res.data)
        })
    }, []);

    return (
        
        <div className="jumbotron p-0">
        <div className="container-fluid">
            <div className="row">
                <Nav/>

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 py-5">
                   
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Recipes</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group mr-2">
                                <button className="btn btn-sm btn-outline-secondary">Share</button>
                                <button className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                This week
                            </button>                        
                        </div>                        
                    </div>                    
                    
                        <div className="container">
                            <div className="row">
                               
                                <div className="col-lg-12">
                                    <div className="row">
                                        {recipes.map(rec => (
                                            <div key={rec.id} className="col-lg-12 card">
                                                <div className="card-header d-flex justify-content-between">
                                                    <h3>{rec.name}</h3>
                                                    <button onClick={() => handleNavigateToRecipe(rec.id)} className="btn btn-primary ">Editar</button>
                                                </div>
                                                <div className="card-body">
                                                    <h5  className="d-none">Composição</h5>
                                                    
                                                        {rec.composities.map(comp => (
                                                            <ul key={comp.id} className="d-none">
                                                            <li >{comp.ingredient.name}</li>    
                                                            <li> Custo unitário : {Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(comp.ingredient.cost  )}</li>  
                                                            <li> Custo component : {Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(comp.ingredient.cost *comp.quantity )}</li>  
                                                            <li> Quantidade : {comp.quantity}</li>                                                    
                                                            </ul>
                                                        ))}
                                                        <h5> Custo : {Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(rec.composities.reduce((valores, comp) => valores + (comp.ingredient.cost * comp.quantity), 0))}</h5>    
                                                </div>  
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </main>
            </div>
        </div>
    </div>
    )
}

export default Recipes;