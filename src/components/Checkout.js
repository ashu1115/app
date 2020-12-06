import React,{useState,useEffect} from 'react'
import { useStateValue } from '../StateProvider'
import {getBasketTotal} from '../reducer'
import '../css/Checkout.css';
import CheckoutProduct from '../components/CheckoutProduct';
import { useHistory } from 'react-router';
import axios from "../axios"

import { useParams } from "react-router";
import { NavigateBefore } from '@material-ui/icons';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    const [{orders}] = useStateValue();
    const history = useHistory();
    let {booking_date,booking_time,store_id} = useParams();

    if (basket.length===0) {
        history.push("/")
    }
    const total = getBasketTotal(basket);
    const [name,setName] = useState("");
    const [mobile,setMobile] = useState("");
    const date_time = new Date()
   const [details,setDetails] =useState({})
    console.log(basket)
    let fetchUrl = `http://bookings.ap-southeast-1.elasticbeanstalk.com/store/web/details/${store_id}`
    useEffect(()=>{
        
      async function fetchData(){
          const request = await axios.get(fetchUrl);
        setDetails(request.data);

        
        return request;  
    }
      fetchData();
    },[fetchUrl]);

    let moveto  =  ()=>{
        
        history.push("/successful")
    }

    let book_item = {
                    
                    
        ProductsBookings:{
            "productId": basket.productId,
           "count": basket.count
        },
            
        Customer:{  Name:name,
        Mobile:mobile,
        PaymentMode: "Cash/UPI on Store",
        },
        BookingDate:date_time.toLocaleDateString(),
        BookingTime:date_time.toLocaleTimeString(),
        
        }
    const confirm_order = () =>{
      
        if (name!==""){
            if(mobile!==""){
            dispatch({
                type: 'CONFIRM_ORDER',
                order:book_item 
            })
    
            dispatch({
                type:"CLEAR_BASKET"
                
            });

            
         
            let bookings = []

            for(let j=0;j<basket.length;j++){
                bookings.push({
                    "productId": basket[j].id,
                    "count": basket[j].Count
                })
            }

                axios.post(`http://bookings.ap-southeast-1.elasticbeanstalk.com/store/add_booking/${store_id}`, {
                    
                    "bookingRecordTime": "2020-11-23T17:10:42.337676",
                    "bookingStartTime": "2020-11-27T13:00:00.337676",
                    "bookingEndTime": "2020-11-27T14:30:00.337676",
                        
                    "customer":{  "name":name,
                    "mobileNumber":mobile,
                    "paymentMode": "Cash/UPI on Store" },
                
                    
                    "productBookings":bookings
  
            
                    })




                .then(res => {
                  
                  console.log(res.data);
                })
      
            
            // history.push("/successful")
            moveto()
        }
        else{
            window.alert("Enter mobile number  to proceed.")
        }

    }
      
        else{
            window.alert("Enter name to proceed.")
        }

    }
    
    return (
        <div className="store2">
            <h2 style={{marginBottom:"3px",fontSize:"18px",fontWeight:"500"}}>Store Name : {details.name}</h2>
            
            <p style={{color:"rgba(0,0,0,0.8)",fontWeight:"400",marginBottom:"20px"}} className="answer">Address : {details.address}</p>
        <hr></hr>

 



    {basket?.length === 0  ? (
                <div>
              </div>
            ) : (
                
                <div className="products2">
            <h2 style={{marginBottom:"3px",fontSize:"18px",fontWeight:"500"}}>Order Details </h2>
                    
<div className="product">
    <p><u>Items Details</u></p>
    <p><u>Particulars</u></p>
    <p><u>Price</u></p>
    </div>
            {basket.map(item =>(
                   <CheckoutProduct
                   id={item.id}
                   ProductId={item.ProductId}
                   
                   price={item.price}
                   Count = {item.Count}          
                   
                   />
            ))
            }
            <hr></hr>
<div className="product">
    
<p className="heading"><b>Total</b></p>
            
            <p><i className="fas fa-rupee-sign"></i> { total }</p>    
                </div></div>
            )
            }
    
<br></br>
    <p className="heading">Booking Date*</p>
            
    <p style={{marginBottom:"20px"}} className="answer"><i className="fa fa-calendar"></i>{booking_date}  <br></br><i className="fa fa-clock"></i>{booking_time}</p>
    <label for="selecting" className="heading">Payment Type*</label>
    <p id="selecting">Cash/UPI on Store</p>
         

    
<br></br>
    <h3 style={{marginBottom:"8px"}}>Your Information*</h3>

    <input type="text" id="fullname" placeholder="Enter full name" className="text_field" name="fullname" onChange={(e)=>{setName(e.target.value)}} required/>


    <input type="tel"  pattern="[0-9]{10}" id="mobile" placeholder="Enter mobile number"  className="text_field" name="fullname" onChange={(e)=>{setMobile(e.target.value)}} required/>

<div className="confirm_order">
<button className="confirm" onClick={confirm_order} disabled={basket.length===0}>Confirm Booking</button>
    </div>            

</div>
)}

export default Checkout
