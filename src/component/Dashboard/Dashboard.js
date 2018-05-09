import React, { Component } from 'react';

import Product from '../Product/Product';


export default class Dashboard extends Component{

    render(){
        return (
            <div className='dashboardComponent' >
                <h1>Dashboard</h1>

                <p>Nested:</p><Product />
            </div>
        )
    }
}

