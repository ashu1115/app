import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Landing_page.css"
import image from "./logo2.png"
import image2 from "./google.png"


function Landing_page() {
    return (
        <div className="landing_page">
             <img src={image} style={{height:"74px",width:"299px",margin:"10px"}} />
             <hr style={{height:"1px",backgroundColor:"rgba(0,0,0,0.1)",width:"100%"}}></hr>
             <div className="landing_box">
                 <Link to="/" style={{color:"rgba(29, 6, 169, 1)",fontSize:"50px",fontWeight:"700",textDecoration:"none"}}>Start Online Advance Booking in 30 Seconds</Link>
                 <p style={{color:"rgba(29, 6, 169, 1)",fontSize:"30px",fontWeight:"400"}}>Setup online booking system for your business just by adding products and  booking hours.</p>
                 <img src={image2} style={{height:"62px",width:"163px",margin:"10px"}} /><br></br>
               <Link to="/" style={{color:"rgba(29, 6, 169, 0.5)",textDecoration:"none",fontWeight:""}}>Download our free Android App now</Link>
             </div>
             <div className="center_box">
                 <p style={{color:"rgba(255,255,255, 1)",textAlign:"center",fontSize:"41px",fontWeight:"700",}}>Grow business by simple online appointment tools</p>
             <h2 style={{color:"rgba(255,255,255, 1)",marginTop:"70px",fontSize:"30px",fontWeight:"700",}}>Easy to Create Catalog</h2>
             <p style={{color:"rgba(255,255,255, 0.7)",fontSize:"20px",fontWeight:"400",}}>Easily add all your products. More products = more bookings.</p>


             <h2 style={{color:"rgba(255,255,255, 1)",marginTop:"70px",fontSize:"30px",fontWeight:"700",}}>Booking Hours in Multiple Shifts</h2>
             <p style={{color:"rgba(255,255,255, 0.7)",fontSize:"20px",fontWeight:"400",}}>Add booking hours in multiple shift according to your needs</p>

             <h2 style={{color:"rgba(255,255,255, 1)",marginTop:"70px",fontSize:"30px",fontWeight:"700",}}>Manage All Bookings</h2>
             <p style={{color:"rgba(255,255,255, 0.7)",fontSize:"20px",fontWeight:"400",marginBottom:"70px"}}>Easily manage all your booking at the single place from anywhwhere. </p>

             </div>
             <div className="contact_part">
                 <h2 style={{fontSize:"36px",fontWeight:"700"}}>Contact Us</h2>
                 <br></br>
                 <p style={{color:"rgba(0, 0, 0, 0.7)",fontSize:"18px",fontWeight:"400"}}>Just WhatsApp or Email us in case you have any question, or just want to Hi...</p>
                 <br>
                 </br>
                 <p style={{color:"rgba(0, 0, 0, 0.7)",fontSize:"18px",fontWeight:"400"}}>WhatsApp: +91 9981278197</p>
                 <br></br>
                 <p style={{color:"rgba(0, 0, 0, 0.7)",fontSize:"15px",fontWeight:"400"}}>Email Id: bharatbookingbusiness@gmail.com</p>


             </div>
        </div>
    )
}

export default Landing_page
