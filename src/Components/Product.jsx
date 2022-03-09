import React from 'react';
import Shoes from './../Shoes.json';

function Product() {
    console.log(Shoes);
    console.log(Object.keys(Shoes));
    return (
        <div>
            <h1>
                Welcome To Product Page
            </h1>
            <div className='product'>
                {Object.keys(Shoes).map(keyName => {
                    const shoe = Shoes[keyName];
                    return (
                        <div key={keyName}>
                            <h2>
                                {keyName}
                            </h2>
                            <h4>
                                {shoe.name}
                            </h4>
                            <img src={shoe.img} height={300}
                                alt='shoe' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Product;