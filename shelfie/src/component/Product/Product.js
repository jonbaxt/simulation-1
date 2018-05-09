import React from 'react';
import { Link } from 'react-router-dom';

 import Delete from './Delete';

export default function Product(props, comp) {
    // render(){
        function createTable(props) {
            let create = props.map((element, ind) => {
                return (
                    <div key={ind} className='ProductBox'>
                        {/* {if(element.img){return element;}} */}
                        <img className='imageSized' src={element.img} alt='http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png' />
                        <div className='textCont'>
                            <h3>{element.name}</h3>
                            <h4>{element.price}</h4>
                        </div>
                        {/* <Link to='/delete' >Delete</Link> */}
                            {/* <Delete here={ind} /> */}
                        {/* <button onClick={console.log(`Key Number `,ind)} className='nicebutton'>Delete</button> */}
                        {/* <button className='nicebutton'>Edit</button> */}
                    </div>
                )
            })
            return create;
        }

        console.log(comp);
        return (
            <div>
                <img src='http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png' alt='' />
                {createTable(props)}
            </div>
        )



    // }
}