import React, {useState, useEffect} from 'react';

import api from '../../services/api';

interface Ingreditent {
    id: number;
    name: string;
    description: string,
    cost: number,
    type: string,
    stock: Stock
}

interface Stock {
    id: number;
    quantity: number;
}

const Ingredients = () => {

    const [ingredients, setIngredients] = useState<Ingreditent[]>([]);

    useEffect(() => {

        api.get<Ingreditent[]>('/v1/protected/ingredients').then((res) => {
            setIngredients(res.data);
        })

    },[])

    return (
        <main className="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-5">
                        <h1>
                        Ingredients
                        </h1>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            {ingredients.map(ing => (
                                <div key={ing.id} className="col-lg-4 card">
                                    <div className="card-header">
                                        Nome:   {ing.name}
                                    </div>
                                    <div className="card-body">
                                        <ul>
                                            <li>
                                                Custo: {ing.cost}
                                            </li>
                                            <li>
                                                Estoque: {ing.stock.quantity}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );

}


export default Ingredients;