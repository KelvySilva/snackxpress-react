import React, { FormEvent,useState, ChangeEvent, useEffect } from 'react';
import { useHistory,useLocation } from "react-router-dom";
import api from '../../../services/api';
import Nav from '../../Nav';
import IIngreditent from '../../../models/IIngredient';

interface Params {
    ingredient_id:number
}


const CreateIngredient = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const location = useLocation();
    const  param = location.state as Params;

    const history = useHistory();

  
    const [ ing, setIng] = useState<IIngreditent>(Object);

    useEffect(() => {
       if(param != null) {
        api.get<IIngreditent>(`/v1/protected/ingredient/${param.ingredient_id}`).then(res => {
            setName(res.data.name);
            setDescription(res.data.description);
            setCost(res.data.cost);
            setQuantity(res.data.stock.quantity);
            setIng(res.data);
        })
       }
    },[]) 


    function handleSubmit(event: FormEvent) {
        event.preventDefault();
    
        
        const type = 'COMPOSITE';       
    
        
        if(ing != null && ing.stock != undefined) {
            
            api.put(`/v1/admin/ingredient/${ing.id}`, {
                'id': ing.id,
                'name': name,
                'description':description,
                'cost':cost,
                'type':type,
                'stock': {
                    'id':ing.stock.id,
                    'quantity':quantity
                }
            });
        
        }else {
            api.post('/v1/admin/ingredient', {
                'name': name,
                'description':description,
                'cost':cost,
                'type':type,
                'stock': {
                    'quantity':quantity
                }
            });
        
        }
    
        
        alert('Ingrediente Adiconado!');
    
        history.push('/ingredients');
      }
    
    

    return (
        <div className="jumbotron p-0">
            <div className="container-fluid">
                <div className="row">
                    <Nav/>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 py-5">
                       
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">                                    
                            Ingredients</h1>
                            <div className="btn-toolbar mb-2 mb-md-0 d-none">
                                <div className="btn-group mr-2">
                                    <button className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                
                            </div>                            
                        </div>    
                        
                        <div className="container">
                            <div className="row">
                                
                                <div className="col-lg-12">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-6">
                                            <form className="form" onSubmit={handleSubmit}>
                                                <div className="form-row">
                                                    <label className="col-sm-2 col-form-label" htmlFor="name">Nome: </label>
                                                    <div className="form-group col-lg-10">
                                                        <input type="text" name="name" value={name} required onChange={e => setName(e.target.value)} className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <label htmlFor="description" className="col-sm-2 col-form-label">Descrição: </label>
                                                    <div className="form-group col-lg-10">
                                                        <textarea name="description" required value={description} onChange={e => setDescription(e.target.value)} className="form-control"></textarea>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <label htmlFor="cost" className="col-sm-2 col-form-label">Custo: R$ </label>
                                                    <div className="form-group col-lg-10">                                                        
                                                        <input type="number"  name="cost" step="0.01" value={cost} required onChange={e => setCost(Number(e.target.value)) } className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <label htmlFor="quantity" className="col-sm-2 col-form-label">Estoque: </label>
                                                    <div className="form-group col-lg-10">                                                        
                                                        <input type="number" name="quantity"  required value={quantity} onChange={e => setQuantity(Number(e.target.value))} className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-lg-12">
                                                        <button className="btn btn-primary float-right" type="submit">Salvar</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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


export default CreateIngredient;