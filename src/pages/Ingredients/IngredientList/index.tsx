import React, {useState, useEffect} from 'react';

import api from '../../../services/api';
import Ingreditent from '../../../models/Ingredient';
import Nav from '../../Nav';
import { Link,useHistory } from 'react-router-dom';



const Ingredients = () => {

    const [ingredients, setIngredients] = useState<Ingreditent[]>([]);

    const history = useHistory();

    function handleCreateIngredient() {
        history.push("/ingredient/new");
    }

    useEffect(() => {

        api.get<Ingreditent[]>('/v1/protected/ingredients').then((res) => {
            setIngredients(res.data);
        })

    },[])

    return (
        <div className="jumbotron p-0">
            <div className="container-fluid">
                <div className="row">
                    <Nav/>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 py-5">
                       
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">                                    
                            Ingredients</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group mr-2">
                                    <button onClick={handleCreateIngredient} className="btn btn-sm btn-outline-secondary btn-success text-white">Adicionar</button>
                                    
                                </div>                            
                            </div>                            
                        </div>    
                        
                        <div className="container">
                            <div className="row">
                                
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
                </div>
            </div>
        </div>
       
    );

}


export default Ingredients;