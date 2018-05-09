import React from 'react';
import img from '../../Resources/shelfie_icon.png';
import { Link } from 'react-router-dom';

export default function Header(){

    return (
        <div className='headerComponent' >
           <Link to='/' ><img className='icon' src={img} alt=''   /></Link> 
           <h1>SHELFIE</h1>
        </div>
    )
}

// '..\..\..\assets\shelfie_icon.png' alt=''   />

// C:\Users\Jon Baxter\Documents\DevMountain\SIMULATIONS\simulation-1\assets\shelfie_icon.png