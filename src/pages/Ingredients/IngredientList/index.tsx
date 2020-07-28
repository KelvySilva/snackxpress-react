import React, {useState, useEffect} from 'react';

import api from '../../../services/api';
import IIngreditent from '../../../models/IIngredient';
import Nav from '../../Nav';
import { useHistory } from 'react-router-dom';
import { FiDelete, FiEdit } from "react-icons/fi";
import IProductFinal from '../../../models/IProductFinal';



const Ingredients = () => {

    const [ingredients, setIngredients] = useState<IIngreditent[]>([]);

    const history = useHistory();

    function handleCreateIngredient() {
        history.push("/ingredient/new");
    }

    function handleEditIngredient(id: number) {
        history.push('/ingredient/new', {ingredient_id : id});
    }

    function handleDeleteIngredient(id:number) {

        let deleteThis = false;
        api.get<IProductFinal>(`/v1/protected/ingredient/${id}`).then(res => {
            deleteThis = window.confirm(`Gostaria de excluir o item ${res.data.name}?`);

        });        

        if(deleteThis) {
            try {
                api.delete(`/v1/admin/ingredient/${id}`);
                setIngredients(ingredients.filter(ingredient => ingredient.id !== id)); 
            } catch (error) {
                alert('Erro ao deletar ingrediente.');
            }
        }
       
    }

    useEffect(() => {
        api.get<IIngreditent[]>('/v1/protected/ingredients').then(res => {
            setIngredients(res.data);
        });
    },[]);

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
                                            <div key={ing.id} className="col-lg-4 ">
                                                <div className="card-header border bg-light d-flex justify-content-between">
                                                    {ing.name}
                                                    <div className="actions">
                                                        <button className="btn btn-danger py-0 px-1 mr-1" onClick={() => handleDeleteIngredient(ing.id)}>
                                                            <FiDelete size={18} />
                                                        </button>
                                                        <button className="btn btn-primary py-0 px-1" onClick={() =>
                                                        handleEditIngredient(ing.id)}>
                                                            <FiEdit size={18}/>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="card-body p-1 border">
                                                    <ul>
                                                        <li>
                                                            Custo: {Intl.NumberFormat(
                                                                'pt-BR', {style:'currency', currency:'BRL'}
                                                            ).format(ing.cost)}
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