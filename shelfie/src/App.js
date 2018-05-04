import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';


class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
    this.handleInventoryToDash = this.handleInventoryToDash.bind( this );
    this.postNewProduct = this.postNewProduct.bind( this );
  }
  
  componentDidMount(){
    axios.get('/api/inventory').then( result => {
      console.log(result.data)
      this.setState({inventory: result.data})
      console.log(this.state.inventory);
    }).catch( err => console.log( err ) )
  }

  postNewProduct(element){
    axios.post('/api/inventory', element).then( result => {
      console.log(result)
      // this.setState({inventory: result.data})
      this.componentDidMount();
    }).catch( err => console.log(err));
    // axios.post()
  }

  handleInventoryToDash(){
    let array= this.state.inventory;
    return array;
  }

  render() {
    return (
      <div className="App">
        <div className="head">
        <Header />
       </div>
        
        <div className='bottom'>
        
        <Dashboard className='Dash' giveit={this.handleInventoryToDash} />
        <Form callme={this.postNewProduct} />
        </div>
      </div>
    );
  }
}

export default App;
