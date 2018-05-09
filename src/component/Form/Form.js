import React, { Component } from 'react';
import blankImage from '../../Resources/defaultImg.png';

const ADD_CHANGE = 'ADD';
const EDIT_CHANGE = 'EDIT';

export default class Form extends Component{
    constructor(){
        super()
        this.state = {
            url: '',
            name: '',
            price: '',
            yep: ''
        }


        // this.ADD_CHANGE = this.ADD_CHANGE.bind( this );
        // this.EDIT_CHANGE = this.EDIT_CHANGE.bind( this );
        this.handleNameChange = this.handleNameChange.bind( this )
        this.handlePriceChange = this.handlePriceChange.bind( this )
        this.handleURLChange = this.handleURLChange.bind( this )
        this.handleCancel = this.handleCancel.bind( this )
        this.handlePassBack = this.handlePassBack.bind( this );
        this.changeButtonOnForm = this.changeButtonOnForm.bind( this );
    }
    

    handleURLChange(e){
        this.setState({ url: e })
    }
    handleNameChange( e ) {
        this.setState({ name: e })
    }
    handlePriceChange( e ){
        this.setState({ price: e })
    }
    handleCancel(){
        this.setState({
            url: '',
            name: '',
            price: ''
        })
    }
    handlePassBack(){
        const newProd = {
            name: this.state.name,
            price: this.state.price,
            imgURL: this.state.url
        }
        this.props.giveBack(newProd)
    }

    changeButtonOnForm( buttonAskedFor ){
        if(buttonAskedFor === ADD_CHANGE){
            return (  <button className='button' onClick={this.handlePassBack} >Add to Inventory</button> )
        }else if(buttonAskedFor === EDIT_CHANGE){
            return (  <button className='button' onClick={this.handlePassBack} >Save Changes</button> )
        }
    }


    render(){
        function imagePreview(impUrl){
            if(impUrl !== ''){
            return ( <img className='pic' src={impUrl} alt='' /> )
            }else{
            return ( <img className='pic' src={blankImage} alt='' /> )
            }
        };

        return (
            <div className='formComponent'>
                
                <div className='pictureBox'>
                {imagePreview(this.state.url)}
                {/* <img className='pic' src={blankImage} alt='' /> */}
                </div>
                
                
                <div className='inputBox' >
                <h3>Image URL:</h3>
                <input type='text' placeholder='URL' value={this.state.url} onChange={ (e) => this.handleURLChange( e.target.value )} />
                <h3>Product Name:</h3>
                <input type='text' placeholder='Name' value={this.state.name} onChange={ (e) => this.handleNameChange( e.target.value ) } />
                <h3>Price:</h3>
                <input type='text' placeholder='Price' value={this.state.price} onChange={ (e) => this.handlePriceChange( e.target.value ) }/>
                </div>

                <div className='buttonBox' >
                <button className='button' onClick={this.handleCancel} >Cancel</button>
                 {/* //TODO: Hard Coded, need to change when individual edit is called. */}
                {this.changeButtonOnForm(EDIT_CHANGE)} 
                </div>

            </div>
        )
    }
}


