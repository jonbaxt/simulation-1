import React, { Component } from 'react';
import blankImage from '../../Resources/defaultImg.png';

export default class Form extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return (
            <div className='formComponent'>
                {/* <h1>Form</h1> */}
                
                <div className='pictureBox'>
                <img className='pic' src={blankImage} alt='' />
                </div>
                
                
                <div className='inputBox' >
                <h3>Image URL:</h3>
                <input type='text' placeholder='URL'  />
                <h3>Product Name:</h3>
                <input type='text' placeholder='Name' />
                <h3>Price:</h3>
                <input type='text' placeholder='Price' />
                </div>

                <div className='buttonBox' >
                <button className='button' >Cancel</button>
                <button className='button' >Add to Inventory</button>
                </div>

            </div>
        )
    }
}