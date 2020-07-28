import React, { useState, useEffect} from 'react';

import api from '../../services/api';
import IProductFinal from '../../models/IProductFinal';
import Nav from '../Nav';

const Products = () => {

    const [products, setProducts] = useState<IProductFinal[]>([]);

    useEffect(() => {
        api.get('/v1/protected/products').then(res => {
            setProducts(res.data);
        })
    }, []);

    return (
        <div className="jumbotron p-0">
            <div className="container-fluid">
                <div className="row">
                    <Nav/>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 py-5">
                       
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">                                    
                            Products</h1>
                            <div className="btn-toolbar mb-2 mb-md-0 d-none">
                                <div className="btn-group mr-2">
                                    <button onClick={() => {}} className="btn btn-sm btn-outline-secondary btn-success text-white">Adicionar</button>
                                    
                                </div>                            
                            </div>                            
                        </div>    
                        
                        <div className="container">
                            {products.map(prod => (
                                <div key={prod.id} className="row border-bottom py-2">
                                
                                    <div className="col-lg-4 text-left">
                                            <div className="text">
                                                <h5> {prod.name} </h5>
                                            </div>
                                    </div>
                                    <div className="col-lg-2 text-center">
                                        <div className="text">
                                            <h5 className="text-danger">Preço de custo: {Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(prod.cost)}</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 text-center">
                                        <div className="text">
                                            <h5>Preço de venda: {Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(prod.price)}</h5>
                                        </div>
                                    </div>
                                    {(prod.stock != null) && (
                                       <div className="col-lg-2 text-center">
                                            <div className="text">
                                                <h5>Estoque: {prod.stock.quantity}</h5>
                                            </div>
                                        </div>
                                    )}
                                    
                                </div>
                            ))}
                            
                        </div>
                    
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Products;