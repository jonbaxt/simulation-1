import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import axios from 'axios';

import Header from './component/Header/Header';
import Dashboard from './component//Dashboard/Dashboard';
import Form from './component/Form/Form';

class App extends Component {
  constructor(){
    super()
    this.state = {
        data: [],
        selectedProduct: {},
        changeButton: 'ADD'
    }
    this.handleData = this.handleData.bind( this );
    this.handleSelectedProduct = this.handleSelectedProduct.bind( this );
    this.handleNewData = this.handleNewData.bind( this );
    this.handleDelete = this.handleDelete.bind( this );
    this.handleEditGrab = this.handleEditGrab.bind( this );
 }
componentDidMount(){
  axios.get('/api/products').then( (element) => {
    this.setState({ data: element.data})
    // console.log( element );
  })
}

handleDelete( id ){
  axios.delete(`/api/products/${id}`).then( (element) => {
    this.setState({ data: element.data})
    console.log( element );
  }).catch( err => console.log( err ));
}

handleEditGrab( id ){

  axios.get(`/api/products/${id}`).then( ( element ) => {
    this.setState({ selectedProduct: element.data })
    console.log( element.data );
  }).catch( err => console.log( err ) );
  this.handleSelectedProduct();
}

handleData(){
    return this.state.data
}

handleSelectedProduct(){
  // const returned = [ this.state.selectedProduct, 'EDIT' ]
  // return returned;
  return {
    id: this.state.data.id,
    name: this.state.data.name,
    price: this.state.data.price,
    imgURL: this.state.data.imgURL
}
}

handleNewData(element){
  let newId = this.state.data.length;
  const { name, price, imgURL } = element
  const formattedElement = {
    id: newId,
    name,
    price,
    imgURL
  }

  let newData = this.state.data;
  newData.push(formattedElement);
  this.setState({
    data: newData
  })
}
  // componentDidMount(){

  // }

  render() {
    return (
      <div className='App'>
        <HashRouter>
          <div>
         
         
          <div className='header' >
            <Header />
          </div>

          <div className='bodyArea'>

            <div className='dash'>
              <Dashboard give={this.handleData} delReq={this.handleDelete} editReq={this.handleEditGrab} />
            </div>

            <div className='form'>
              <Form giveBack={this.handleNewData} getOne={this.handleSelectedProduct} />
            </div>

          </div>
          
          
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;