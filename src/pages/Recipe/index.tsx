import React, {useEffect, useState} from 'react';

import { useLocation } from "react-router-dom";

import api from '../../services/api';

interface Params {
    recipe_id: number;
}

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

const Recipe = () => {

    const location = useLocation();
    const  params = location.state as Params;;

    const [recipe, setRecipe] = useState<Recipe>(Object);

    useEffect(() => {
        api.get<Recipe>(`/v1/protected/recipe/${params.recipe_id}`).then(res => {
            
            setRecipe(res.data);
        })
    }, []);

    return (
        <main className="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>{recipe.name}</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Recipe;