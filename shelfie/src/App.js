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
  }
  
  componentDidMount(){
    axios.get('/api/inventory').then( result => {
      console.log(result.data)
      this.setState({inventory: result.data})
    }).catch( err => console.log( err ) )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='bottom'>
        <Dashboard />
        <Form  />
        </div>
      </div>
    );
  }
}

export default App;
