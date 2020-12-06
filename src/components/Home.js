import React, {useState,useEffect} from 'react'
import axios from "../axios"
import '../css/Home.css'

import { useParams } from "react-router";
import timeSlotter from "time-slotter"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import {getBasketTotal,getTotalDuration} from '../reducer'
function Home() {
 let [booking_time ,setTime] = useState(" ")
 let [{storedetails,basket}] = useStateValue()
 let [booking_date ,setBookingDate] = useState("")
 var totalDuration = getTotalDuration(basket);
 let {store_id} = useParams();
 let [arr,setArr] = useState([]);
 let bct=false;
 let bcd=false;

  
  



 const getDaysInMonth= (month, year) => {
  var date = new Date();
  var days = [];
  let i=0;
  while (i< 7) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);

    i=i+1
  }
 
  i=0;
  return days;}



  
  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }


  let d = new Date()

  let list_month = ["January","Febrary","March","April","May","June","July","August","September","October","November","December"]
  let dates = getDaysInMonth(d.getMonth(),d.getFullYear)


  let handleclick = (e)=> {
    setTime(e.target.id);
    bct = !bct
    e.target.className = bct ? " book_timings" : "book_timings selected"
 
}







    return (
        <div className="home">
            <div className="month">
              <p style={{fontSize:"20px",marginBottom:"10px"}}>Select booking day</p>
              <h4 style={{fontSize:"20px"}}>{ list_month[d.getMonth()] } { d.getFullYear() }</h4>
              <div className="dates">
              {
               
                dates.map((item) => (
                  <div >

                <label  className="date_button"  id={formatDate(item)}  onClick={(e)=>{setBookingDate(e.target.id);
                     bcd = !bcd
                     e.target.className = ! bcd ? "date_button" : "date_button selected"
                   
                             
                   let temp =[]
                  for (let i=0;i<=1;i++){
                    timeSlotter(storedetails.storeTimings[e.target.id][i].openTime,storedetails.storeTimings[e.target.id][i].closeTime, totalDuration).map(t=>(temp.push(t[0]+" - "+t[1])))
                  
                  }


                         
                    let arr2=[]
                
                      // console.log(storedetails.bookedSlots[e.target.id].length)
                    
                    temp.map(item=>{
                      const data=item.split(' - ');
                      
                      if(storedetails.bookedSlots[e.target.id]){
                        let c=0;
                        storedetails.bookedSlots[e.target.id].map(t=>{
                        
                           if((data[0]>=t.openTime && data[0]<=t.closeTime) || (data[1]>=t.openTime && data[1]<=t.closeTime) || (d[0]<=t.openTime && d[1]>=t.closeTime)){
                             c=1;
                        
                           }
                        })
                    
                        if(c===0){
                           arr2.push(item)
                        }
                        if(c===1){
                          
                        }
                      
                    
                       }
                      else{
                        
                        arr2.push(item)
                      }
                    })


                  
                  
                  
                  setArr(arr2)}}>
                    {item.getDate()}
                  </label>
                  </div>
                ))
              }
              </div>
              <br></br>
              <div classsName="home_slot">
            <span style={{fontSize:"20px"}}>Select any one booking slot</span>
            <span className="see_all">See all    <ExpandMoreIcon className="icon"/> </span>
         
            </div>
            </div>
         {
           <div><div className="home_booking">
          
              {
                 booking_date ?
               arr.map(t =>(
                 <div className="book_timings" id={t} onClick={handleclick}>
                  {t}
                 </div>
               )) : " "
         
             }        
       
             
      
          
        </div>
   
<div className="confirm_order">

  
<Link to={`/checkout/${booking_date}/${booking_time}/${store_id}`} className="next" style={{textDecoration:"none",color:"white"}}  >Next</Link>
</div></div>
         }
            
        </div>
    )
}

export default Home
