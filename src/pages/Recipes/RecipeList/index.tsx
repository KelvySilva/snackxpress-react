import React, {useState, useEffect} from 'react';

import { Link, useHistory } from "react-router-dom";

import api from '../../../services/api';

import Nav from '../../Nav';
import IRecipe from '../../../models/IRecipe';
import { FiCalendar } from 'react-icons/fi';



const Recipes = () => {

    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [error, setError] = useState(Object);

    const history = useHistory();

    function handleNavigateToRecipe(id: number) {
        history.push('/recipe', {recipe_id : id})
    }

    function handleCreateRecipe() {
        history.push("/recipe/new");
    }

    useEffect(() => {
        api.get<IRecipe[]>('/v1/protected/recipes')
        .then(res => {
            setRecipes(res.data)
        }).catch(err => {            
            console.log(err.response.data);  
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
                            
                            <button onClick={handleCreateRecipe} className="btn btn-sm btn-outline-secondary btn-success text-white">Adicionar</button>                      
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
                                    {(recipes.length == 0 ) && (
                                        <h3>Não há itens cadastrados</h3>
                                    )}
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