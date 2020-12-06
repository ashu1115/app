import React from 'react'
import { useHistory } from 'react-router';
import '../css/Product.css';
import { useStateValue } from '../StateProvider';

function Product({item_name,id,price,item_count,metric,duration}) {

    const [{basket}, dispatch] = useStateValue();
    const history = useHistory()
   
   



    const addToBasket = () =>{
        
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                ProductId:item_name,
                duration:duration,
                price:parseInt(price),
                Count:1
              
            }
        })
    }

    let index = basket.findIndex((basketItem)=> basketItem.ProductId === item_name )
    function add_item(){
       
        dispatch({
            type: 'ADD_ITEM',
                id: item_name,
              
            
        })
    console.log("orders")
    }
    const del_item = () =>{
     

    
       
        dispatch({
            type: 'DELETE_ITEM',
                id: item_name
              
            
        })
     
   }  
   
    return (
        <div className="product" id={index} style={{borderBottom:""}}>
          <div className="info">
          <h3 style={{ color:"black",fontSize:"18px",fontWeight:"500",textTransform:"capitalize"}}>{item_name}</h3>
    <p>Price : <i className="fas fa-rupee-sign"></i>{price} per {metric}</p>
    <p>Duration : <i className="fa fa-clock"></i> {duration} min</p>
          </div>
           
          <div className="count">
          {

           (index === -1) ?  <button onClick={addToBasket} className="addtobasket">Add </button> : 
           
           <div className="count_items">
           <button className="botton" onClick={del_item}>-</button>
          
          <p>{ basket[basket.findIndex((basketItem)=> basketItem.id === id)].Count }</p>
          <button className="botton" onClick={add_item}>+</button>


       </div>


          }
         
          </div>
         
        </div>
    )
}


export default Product
