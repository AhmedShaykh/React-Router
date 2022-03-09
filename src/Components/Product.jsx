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
            <div>
                {Object.keys(Shoes).map(keyName => {
                    const shoe = Shoes[keyName];
                    return (
                        <div key={keyName}>
                            <h1>
                                {keyName}
                            </h1>
                            <h2>
                                {shoe.name}
                            </h2>
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