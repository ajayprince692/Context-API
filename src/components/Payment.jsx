import React from 'react'
import {useParams} from 'react-router-dom'

function Payment({data}) {
  
    let {product}=useParams();
    let selectedProduct = data.find((p) => p.id === parseInt(product, 10));

    if(!selectedProduct){
        console.log("Product not found")
    }
    return <>
    <div>
    <h2>ThankYou for shopping with us !!!</h2>
    <div>
        <img src={selectedProduct.thumbnail} className='img-fluid' alt='{selectedProduct.title}'/>
        <p>{selectedProduct.title}</p>
        <p>${selectedProduct.price}</p>
    </div>

    </div>
  </>
}

export default Payment