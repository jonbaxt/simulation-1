import React, { Component } from 'react';

import Product from '../Product/Product';


export default class Dashboard extends Component{

    render(){
        return (
            <div className='dashboardComponent' >
                {Product(this.props.give, this.props.delReq, this.props.editReq)}
                {/* <Product give={this.handleData} /> */}
            </div>
        )
    }
}