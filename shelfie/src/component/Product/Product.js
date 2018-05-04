import React from 'react';


export default function Product(props) {
    // render(){
        function createTable(props) {
            let create = props.map((element, ind) => {
                return (
                    <div key={ind} className='ProductBox'>

                        <img className='imageSized' src={element.img} alt='http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png' />
                        <div className='textCont'>
                            <h3>{element.name}</h3>
                            <h4>{element.price}</h4>
                        </div>
                    </div>
                )
            })
            return create;
        }
        return (
            <div>
                {createTable(props)}
            </div>
        )



    // }
}