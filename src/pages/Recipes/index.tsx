import React, {useState, useEffect} from 'react';

import { Link, useHistory } from "react-router-dom";

import api from '../../services/api';

interface Composities {
    id: number;
    quantity: number;
    ingredient: Ingreditent;
}
interface Stock {
    id: number;
    quantity: number;
}
interface Ingreditent {
    id: number;
    name: string;
    description: string,
    cost: number,
    type: string,
    stock: Stock
}

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

interface Recipe {
    id: number;
    name: string;
    composities: Composities[],
    productFinal: ProductFinal;
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
        <main className="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-5">
                        <h1>Recipes</h1>
                    </div>
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
    )
}

export default Recipes;