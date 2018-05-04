import React, { Component } from 'react';
import axios from 'axios';

import Product from '../Product/Product';
import './dash.css';
import Routes from '../Form/Routes';

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {

        }
        this.handleGet = this.handleGet.bind( this );
    }
    handleGet(){
        console.log(this.props.getReq)
    }
    callAxios(){
        this.props.getReq('/api/inventory')
        // axios.get('/api/inventory').then( give => {
        //     console.log(give);
        // })
    }

    render(){
        function handleProps(element){
            let data = element;
            // console.log(data);
            return data;
        }
        let dataArr = handleProps(this.props.giveit());
        return(
            <div>
                {/* {Routes} */}
                {Product(dataArr)}
                {/* <Product give={this.props.giveit} /> */}
            </div>
        )
    }

}