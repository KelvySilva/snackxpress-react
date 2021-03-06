import React from 'react';

import Nav from '../Nav';

import { ReactComponent as Calendar } from '../../assets/calendar.svg';

const Home = () => {
    
    return (
        <div className="jumbotron p-0">
            <div className="container-fluid">
                <div className="row">
                    <Nav/>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 py-5">
                       
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group mr-2">
                                <button className="btn btn-sm btn-outline-secondary">Share</button>
                                <button className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <Calendar />
                                This week
                            </button>

                            
                            </div>
                            
                        </div>                    
                        
                        
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Home;