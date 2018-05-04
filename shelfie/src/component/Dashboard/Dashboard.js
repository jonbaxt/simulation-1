import React, { Component } from 'react';

import Product from '../Product/Product';
import './dash.css';

export default class Dashboard extends Component {



    render(){
        function handleProps(element){
            let data = element;
            // console.log(data);
            return data;
        }
        let dataArr = handleProps(this.props.giveit());
        return(
            <div>
                {Product(dataArr)}
                {/* <Product give={this.props.giveit} /> */}
            </div>
        )
    }

}