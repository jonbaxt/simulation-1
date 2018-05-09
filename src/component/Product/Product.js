import React from 'react';
// import { bindActionCreators } from 'redux';
import blankImage from '../../Resources/defaultImg.png';
import { connect } from 'react-redux';
import { createClass } from 'react-stateless';

import { changeFormButton, changeEditButtonNum, getEditChange } from '../../ducks/reducer';

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
        {/* <img src={e.imgURL} className='pic2' alt='' /> */}
        
        </div>
        {/* this.props.changeEditButtonNum(e.id) */}
        {/* editReq(e.id) */}

        <div>
            <h1>Product: {e.name}</h1>
            <h2>Price: ${e.price}</h2>
            <div className='buttonBox'>
            <button className='button' onClick={() => delReq(e.id)} >DELETE</button>
            <button className='button'onClick={() => editReq(e.id)} >EDIT</button>
            </div>
        </div>
        </div>
    )})

{/*, console.log(changeEditButtonNum(e.id), this.props.editButton'})} */}


    return (
        <div>
            {createProducts}
        </div>
    )
}
// function moveFromStateToProps( state ){
//     const { editButton, editButNum } = state;
//     return {
//         editButton: editButton,
//         editButNum: editButNum
//     };
// }
// let stateless = createClass(Product)
// let connect_function = connect(moveFromStateToProps, { changeFormButton, changeEditButtonNum, getEditChange });
// let connected_component = connect_function(stateless)
// export default connected_component;

// connect(mapStateToProps, { changeFormButton, changeEditButtonNum, getEditChange });
export default Product;

// export default connect(mapStateToProps, { changeFormButton, changeEditButtonNum })(Product());