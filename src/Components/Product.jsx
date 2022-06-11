import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link key={keyName} className="link" to={`/product/${keyName}`}>
                            <h1>
                                {keyName}
                            </h1>
                            <h4>
                                {shoe.name}
                            </h4>
                            <img src={shoe.img} height={300}
                                alt="Shoe Image" />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Product;