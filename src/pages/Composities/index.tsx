import React, { useState , useEffect} from 'react';


import api from '../../services/api';

import './style.css';
import IComposite from '../../models/IComposite';


const Composities = () => {

    const [composites, setComposities] = useState<IComposite[]>([]);

    useEffect(() => {
        api.get<IComposite[]>('/v1/protected/composities').then((res) => {
            console.log(res.data);
            
            setComposities(res.data);
        })
    
    }, [])


    return (
        <main className="jumbotron">
            <div className="container">
                <div className="row">
                   <div className="col-lg-12 text-center pb-5">
                        <h1>Composities</h1>
                    
                   </div>
                   <div className="col-lg-12">
                   <div className="row">
                        {composites.map(comp => (
                            <div className="card col-lg-4" key={comp.id}>
                                <div className="card-header">
                                    Nome do ingrediente do componente: {comp.ingredient.name}
                                </div>
                                <div className="card-body">
                                    <ul>
                                        <li>
                                            Custo do ingrediente: {Intl.NumberFormat('pt-BR', {style:'currency' ,currency:'BRL'}).format(comp.ingredient.cost)}
                                        </li>
                                        <li>
                                            Quantidade em estoque: {comp.ingredient.stock.quantity}
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
    )
}

export default Composities;