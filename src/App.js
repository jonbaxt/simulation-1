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
        data: []
    }
    this.handleData = this.handleData.bind( this );
    this.handleNewData = this.handleNewData.bind( this );
    this.handleDelete = this.handleDelete.bind( this );
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

handleData(){
    return this.state.data
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
              <Dashboard give={this.handleData} delReq={this.handleDelete} />
            </div>

            <div className='form'>
              <Form giveBack={this.handleNewData} />
            </div>

          </div>
          
          
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;