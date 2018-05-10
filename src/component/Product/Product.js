import React from 'react';
// import { bindActionCreators } from 'redux';
import blankImage from '../../Resources/defaultImg.png';

// import { changeFormButton, changeEditButtonNum, getEditChange } from '../../ducks/reducer';

function Product(productImport, delReq, editReq) {
    // let newar = [];
    // console.log( changeEditButtonNum() )
    let newar = productImport();
    // console.log( editReq );
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
        </div>

        <div>
            <h4>Product: {e.name}</h4>
            <h5>Price: ${e.price}</h5>
            <div className='buttonBox'>
            <button className='button2' onClick={() => delReq(e.id)} >DELETE</button>
            <button className='button2'onClick={() => editReq(e.id)} >EDIT</button>
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
export default Product;