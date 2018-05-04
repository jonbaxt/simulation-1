import React, { Component } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import Routes from './Routes';

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            imgURL: ''
        }
        this.clearBoxes = this.clearBoxes.bind( this );
        this.sendToDatabase = this.sendToDatabase.bind( this );
    }
    handleNameChange(theChange) {
        this.setState({ name: theChange });
    }
    handlePriceChage(theChange) {
        this.setState({ price: theChange });
    }
    handleimgURLChange(theChange) {
        this.setState({ imgURL: theChange });
    }
    changePicture(){
        if(this.state.imgURL.find('http')){
            return 'http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png'
        }else {


        }
    }
    clearBoxes() {
        this.setState({
            name: '',
            price: '',
            imgURL: ''
        })
    }
    sendToDatabase() {
        let conv = Number(this.state.price);
        const newProduct = {
            'name' : this.state.name,
            'price' : conv,
            'img' : this.state.imgURL
        }

        // this.props.callme(newProduct)
        console.log(newProduct)
        // console.log(this.props)
        this.props.callme(newProduct);
        this.clearBoxes();
    }

    // ('http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png')

    // C:\Users\Jon Baxter\Documents\DevMountain\SIMULATIONS\simulation-1\shelfie\src\component\Form\defaultImg.png
    render() {
        return (
            <div className='FormContainer'>
                <img className='imageSized' src={this.state.imgURL} alt='http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png' />
                <h2>Image URL:</h2>
                <input type='text' placeholder='image url' value={this.state.imgURL} onChange={(element) => this.handleimgURLChange(element.target.value)} />
                <h2>Product Name:</h2>
                <input type='text' placeholder='name' value={this.state.name} onChange={(element) => this.handleNameChange(element.target.value)} />
                <h2>Price:</h2>
                <input type='text' placeholder='price' value={this.state.price} onChange={(element) => this.handlePriceChage(element.target.value)} />

                <div className='ButtonContainer'>
                    <button onClick={this.clearBoxes}>Cancel</button>
                    <button onClick={this.sendToDatabase} >Add to Inventory</button>

                    <button>Save Changes</button>
                </div>
            </div>
        )
    }

}