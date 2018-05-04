import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            imgURL: ''
        }
        this.clearBoxes = this.clearBoxes.bind( this );
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
    clearBoxes() {
        this.setState({
            name: '',
            price: '',
            imgURL: ''
        })
    }
    // sendToDatabase() {

    // }

    // C:\Users\Jon Baxter\Documents\DevMountain\SIMULATIONS\simulation-1\shelfie\src\component\Form\defaultImg.png
    render() {
        return (
            <div className='FormContainer'>
                <img src={this.state.imgURL} alt='' />
                <h2>Image URL:</h2>
                <input type='text' placeholder='image url' value={this.state.imgURL} onChange={(element) => this.handleimgURLChange(element.target.value)} />
                <h2>Product Name:</h2>
                <input type='text' placeholder='name' value={this.state.name} onChange={(element) => this.handleNameChange(element.target.value)} />
                <h2>Price:</h2>
                <input type='text' placeholder='price' value={this.state.price} onChange={(element) => this.handlePriceChage(element.target.value)} />

                <div className='ButtonContainer'>
                    <button onClick={this.clearBoxes}>Cancel</button>
                    <button onClick={this.sendToDatabase} >Add to Inventory</button>
                </div>
            </div>
        )
    }

}