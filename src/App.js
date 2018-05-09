import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';


import Header from './component/Header/Header';
import Dashboard from './component//Dashboard/Dashboard';
import Form from './component/Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      save: ''
    }

  }

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
              <Dashboard />
            </div>

            <div className='form'>
              <Form />
            </div>

          </div>
          
          
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
