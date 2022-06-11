import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from '../Shoes.json';

function ProductItems() {
    const { id } = useParams();
    console.log(id)

    const shoe = Shoes[id];
    if (!shoe)
        return <h2>Product Not Found!</h2>
        console.log(shoe)
    return (
        <div>
            <h1>
                Welcome To Product Items Page
            </h1>
            <div className="link">
                <h2>
                    {shoe.name}
                </h2>
                <img src={shoe.img} height={700}
                    alt="Shoe Image" />
            </div>
        </div>
    )
}

export default ProductItems;