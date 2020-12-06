import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Successfull.css"
import image from "./logo.png"
import image2 from "./logo2.png"
import image3 from "./google.png"

function Successfull() {
    let  componentDidMount = ()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          console.log(position)
        });
      }

      componentDidMount()
    return (
        <div className="successfull">
            <div className="box">
            <img alt="noimage" src={image} style={{width:"50px"}} ></img>
            <h3 style={{marginBottom:"10px"}}>Your Booking Is Successful</h3>
           
            <p style={{fontSize:"16px",color:"rgb(0,0,0,0.4)",fontWeight:"400",textAlign:"center"}}>You will recieve a message if there will be any further change in your booking time.</p>
            <br></br>
           
            <Link to="/" style={{color:"white",textDecoration:"none"}}><button className="nex" >Go To Home Page</button></Link>
            
            </div>
            <div className="footer">
            <img alt="noimage" src={image2} style={{width:"162px",height:"41px"}} ></img>
            <p style={{fontSize:"10px",color:"rgb(0,0,0,0.7)",fontWeight:"500",textAlign:"center"}}>Built on Store Booking</p>
            <br></br>
            <p style={{fontSize:"12px",color:"rgb(0,0,0,1)",fontWeight:"400",textAlign:"center"}}> Start online advance bookings for your business</p>
       <p>    <span style={{fontSize:"12px",color:"rgb(0,0,0,1)",fontWeight:"400",lineHeight:"5px"}}> Download our Android App:</span>   <img alt="noimage" src={image3} style={{width:"55px",height:"14px"}} ></img></p>
            </div>
        </div>
    )
}

export default Successfull
