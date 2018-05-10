import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import axios from 'axios';

import Header from './component/Header/Header';
import Dashboard from './component//Dashboard/Dashboard';
// import Form from './component/Form/Form';

import blankImage from './Resources/defaultImg.png';


const ADD_CHANGE = 'ADD';
const EDIT_CHANGE = 'EDIT';


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      url: '',            //Stores URL Input
      name: '',           //Stores 
      price: '',          //Stores
      selectedProduct: {},
      change: ADD_CHANGE || ''
    }
    this.handleData = this.handleData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditGrab = this.handleEditGrab.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleData() {
    return this.state.data
  }
  handleURLChange(e) {
    this.setState({ url: e })
  }
  handleNameChange(e) {
    this.setState({ name: e })
  }
  handlePriceChange(e) {
    this.setState({ price: e })
  }
  componentDidMount() {
    axios.get('/api/products').then((element) => {
      this.setState({ data: element.data })
      console.log(`From Component did mount `.element);
    }).catch(err => console.log(`Something went wrong mounting. ${err} `))
  }
  handleCreate() {
    console.log(this.state);
    const newProduct = {
      name: this.state.name,
      price: this.state.price,
      imgURL: this.state.url
    };
    axios.post('/api/products', newProduct)
      .then(element => {
        this.setState({
          data: element.data,
          name: '',
          price: '',
          url: ''
          // change: EDIT_CHANGE
        })
        // console.log( element );
      })
  }
  handleDelete(id) {
    axios.delete(`/api/products/${id}`).then((element) => {
      this.setState({ data: element.data })
      console.log(element);
    }).catch(err => console.log(err));
  }
  handleEditGrab(id) {
    axios.get(`/api/products/${id}`).then((element) => {
      this.setState({
        selectedProduct: element.data,
        url: element.data.imgURL,
        name: element.data.name,
        price: element.data.price,
        change: EDIT_CHANGE
      })
      console.log(element.data);
      console.log(this.state.selectedProduct)

    }).catch(err => console.log(err));
  }
  handleCancel() {
    this.setState({
      url: '',
      name: '',
      price: '',
      change: 'ADD'
    })
  }
  handleEdit() {
    const theId = this.state.selectedProduct.id
    const newProd = {
      name: this.state.name,
      price: this.state.price,
      imgURL: this.state.url
    }
    axios.put(`/api/products/${theId}`, newProd).then(element => {
      this.setState({
        data: element.data,
        selectedProduct: '',
        name: '',
        url: '',
        price: '',
        change: ADD_CHANGE
    })}).catch( err => console.log( err ))
    console.log(this.state.data);
  }

  switchUp(TOGGLE){
    switch(TOGGLE){
      case ADD_CHANGE:
      return <button className='button' onClick={this.handleCreate} >Add to Inventory</button>
      break;
      case EDIT_CHANGE:
      return <button className='button' onClick={this.handleEdit} >Save Changes</button>
      break;
      default:
      return <button className='button' onClick={this.handleCreate} >Add to Inventory</button>
      break;
    }
  }

  render() {
    function imagePreview(impUrl) {
      if (impUrl !== '') {
        return (<img className='pic' src={impUrl} alt='' />)
      } else {
        return (<img className='pic' src={blankImage} alt='' />)
      }
    };
    return (
      <div className='App'><HashRouter><div>
        <div className='header' ><Header /></div>
        <div className='bodyArea'>
          <div className='dash'><Dashboard give={this.handleData} delReq={this.handleDelete} editReq={this.handleEditGrab} /></div>
          <div className='form'>
            {/* <Form giveBack={this.handleNewData} getOne={this.handleSelectedProduct} /> */}
            <div className='formComponent'>

              <div className='pictureBox'>
                {imagePreview(this.state.url)}
                {/* <img className='pic' src={blankImage} alt='' /> */}
              </div>


              <div className='inputBox' >
                <h3>Image URL:</h3>
                <input type='text' placeholder='URL' value={this.state.url} onChange={(e) => this.handleURLChange(e.target.value)} />
                <h3>Product Name:</h3>
                <input type='text' placeholder='Name' value={this.state.name} onChange={(e) => this.handleNameChange(e.target.value)} />
                <h3>Price:</h3>
                <input type='text' placeholder='Price' value={this.state.price} onChange={(e) => this.handlePriceChange(e.target.value)} />
              </div>

              <div className='buttonBox' >
                <button className='button' onClick={this.handleCancel} >Cancel</button>
                {this.switchUp(this.state.change)}
                

                {/* {changeButtonOnForm(this.state.change)} */}
              </div>

            </div>

          </div>

        </div>


      </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;