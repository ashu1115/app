import React from 'react'
import '../css/CheckoutProduct.css';


function CheckoutProduct({id,ProductId,price,Count}) {
 
    return (
        <div className="product" id={ProductId}>
       
           

           
               <p>{ProductId}</p>
               <p>{Count} x {price}</p>
               <p><i className="fas fa-rupee-sign"></i> {Count * price}</p>
           
        </div>
    )
}


export default CheckoutProduct
