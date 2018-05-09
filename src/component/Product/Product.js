import React from 'react';
import { bindActionCreators } from 'redux';

export default function Product() {

    const testData = [
        {
            id: 0,
            name: 'Black leather shoes',
            price: 20.00,
            imgURL: 'https://content.artofmanliness.com/uploads/2011/02/Classic-Oxford-English-Made.jpg'
        },
        {
            id: 1,
            name: 'Bobby Boxers',
            price: .99,
            imgURL: 'https://images-na.ssl-images-amazon.com/images/I/914WViyrKpL._UL1500_.jpg'
        },
        {
            id: 2,
            name: 'Socks',
            price: 10.00,
            imgURL: 'https://s3.amazonaws.com/ultracart/im/SMSRT/EF0CB43D0B5025015E526E2AE9051900?AWSAccessKeyId=0P4TXH5AKGYC8WHDZFG2&Expires=1525855718&Signature=43GexhHZTJW2sykd78bGHrVtONM%3D'
        },
        {
            id: 3,
            name: 'Bra',
            price: 40.00,
            imgURL: 'https://tcoimages2.global.ssl.fastly.net/product_images/pictures/15835/large/Everyday_Calvins_Full_Coverage_Bra_Black.jpg?1507310719'
        }
    ];

    let createProducts = testData.map( ( e ) => {
        return ( 
        <div key={e.id} className='product'>
        
        <div>
        <img src={e.imgURL} className='pic2' alt='' />
        </div>
        
        <div>
            <h1>Product: {e.name}</h1>
            <h2>Price: ${e.price}</h2>
            <div className='buttonBox'>
            <button className='button' >DELETE</button>
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

