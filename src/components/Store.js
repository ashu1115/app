import React,{useState,useEffect} from 'react'
import Product from '../components/Product'
import "../css/Store.css"
import { useStateValue } from '../StateProvider';
import {getBasketTotal,getTotalDuration} from '../reducer'
import { Link, useParams } from 'react-router-dom';
import image2 from "./logo2.png"
import axios from "../axios"

function Store() {
    var [{basket},dispatch] = useStateValue();
    var total = getBasketTotal(basket);
    var totalDuration = getTotalDuration(basket);
    var date = new Date()
    console.log(totalDuration);
    let {store_id} = useParams();

    var [details, setDetails] = useState({});
    
    var [status, setStatus] = useState("waiting");
    var [products, setProducts] = useState([]);
    var [current_time,setCurrentTime] = useState([]);
    var today = new Date();
    let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-0'+today.getDate();
     current_time = today.getHours() + ":" + today.getMinutes();
    

    const [checkAvailabilty,setCheckAvailability]=useState(current_time)

    var fetchUrl = `http://bookings.ap-southeast-1.elasticbeanstalk.com/store/web/details/${store_id}`
    
    useEffect(()=>{
        
      async function fetchData(){
          var request = await axios.get(fetchUrl);
        setDetails(request.data);
        
        setProducts(request.data.products)


        dispatch({
            type: 'ADD_THE_DETAILS',
            data: request.data,
        })
        console.log(request.data);
        // if(request.data){ 

        //     if(request.data.bookedSlots)
        //     {
        //         console.log("&^%#@@@#%%0",request.data && request.data.bookedSlots);
               
        //         if(request.data.bookedSlots[currentDate]){
                    
        //             const x=request.data.storeTimings['2020-12-02']
        //             console.log("KKKKKKKK",x);
        //             request.data.bookedSlots[currentDate].map(item=>{
        //                 console.log(item.openTime," && " ,item.closeTime)
        //                 if(checkAvailabilty>=item.openTime && checkAvailabilty <=item.closeTime){
        //                     // opening=item.closeTime
        //                    console.log("ho ja na * ",checkAvailabilty)
        //                    if(checkAvailabilty>=x[0].closeTime && checkAvailabilty<=x[1].openTime)
        //                    {
        //                        setCheckAvailability(x[1].closeTime)
        //                    }
        //                    else{
        //                     setCheckAvailability(item.closeTime)
        //                    }
                           
        //                 }
        //           })
    
    
        //         }
        //     }
        // }
   
  
        return request;  

      
    }

    
    

      fetchData();
    },[fetchUrl]);
   
    useEffect(()=>{

        let data = current_time.split(":")
        let upto = String(Number(data[0])+parseInt((Number(data[1])+totalDuration)/60))+":"+String(parseInt((Number(data[1])+totalDuration)%60))

        setStatus(checkAvailabilty+"-"+upto);
        
        let data2 = [String(Number(data[0])+parseInt((Number(data[1])+totalDuration)/60)),String(parseInt((Number(data[1])+totalDuration)%60))]

        console.log(data2)
    },[totalDuration])
   

// let check;

//              for (let x in details.bookedSlots) {
                
//                  if(x === currentDate){
//                      check = (details.bookedSlots[x])
//                  }
//                }
           
//             for (let y in check) {
                
//                 console.log()
//                 if(!((data2[0]>=check[y].openTime && data2[0]<=check[y].closeTime) || (data2[1]>=check[y].openTime && data2[1]<=check[y].closeTime) || (data2[0]<=check[y].openTime && data2[1]>=check[y].closeTime))){
//                     setStatus("No Waiting")
//                 }
               
//             }    

     

    return (

        <div className="storename">
            <div className="store">
           <h2  style={{marginBottom:"8px", color:"black",fontSize:"18px",fontWeight:"500"}}>Store Name : {details.name}</h2>
            
            <p style={{fontWeight:"400",marginBottom:"10px",paddingBottom:"10px",fontSize:"16px",borderBottom:"0.5px solid grey"}}>Address : {details.address}</p>
           
            <div style={{float:"right",color:"blue",fontSize:"10px",fontWeight:"600",display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                Created on   <img alt="noimage" src={image2} style={{width:"102px",height:"21px"}} />
            </div>
            <span className="open1">
                {checkAvailabilty === current_time ? details.storeAvailabilityStatus :  checkAvailabilty >=details.storeTimings['2020-12-02'][1].closeTime  ?'Not Available for Today' : "Open next at " + checkAvailabilty }
            </span>

         
            <h2 className="heading">All Products</h2>
            <div className="items">
            {
    products.map(item=>(
        <Product item_name={item.name} key={`Key${item.productId}`} duration={item.duration} price={item.price} metric={item.metric} id={item.productId} item_count={item.item_count}/>
    ))

}




            </div>



</div>
<br></br>

<div className="orders">
    <div className="line123">
    <p style={{fontSize:"18px",marginLeft:"15px"}}>Orders : {basket.length} Items  -  <i className="fas fa-rupee-sign"></i> {total}</p>
    <div className="right" style={{  color:"#51ff45",marginRight:"15px"}}>/
        {/* {status} */}
        
        </div>
    </div>

<div className="foot">
<Link to={`/later/${store_id}`}  style={{textDecoration:"none",color:"white",flexBasis:"1"}} className="nes"> Next</Link>
    {/* <Link to={`/checkout/${currentDate}/${status}`} style={{textDecoration:"none",color:"white"}} className="nes"> Book Now</Link> */}

</div>
</div>
        </div>
    )
}

export default Store
