import React from 'react';
// import { bindActionCreators } from 'redux';
import blankImage from '../../Resources/defaultImg.png';


export default function Product(props, delReq) {
    let newar = props();
    // console.log( delReq );
    function imagePreview(impUrl){
        if(impUrl !== ''){
        return ( <img className='pic2' src={impUrl} alt='' /> )
        }else{
        return ( <img className='pic2' src={blankImage} alt='' /> )
        }
    };

    let createProducts = newar.map( ( e ) => {
        return ( 
        <div key={e.id} className='product'>
        
        <div>
        {imagePreview(e.imgURL)}
        {/* <img src={e.imgURL} className='pic2' alt='' /> */}
        
        </div>
        
        <div>
            <h1>Product: {e.name}</h1>
            <h2>Price: ${e.price}</h2>
            <div className='buttonBox'>
            <button className='button' onClick={() => delReq(e.id)} >DELETE</button>
            <button className='button' >EDIT</button>
            </div>
        </div>
        </div>
    )})




    return (
        <div>
            {createProducts}
        </div>
    )
}

