import React from 'react'
import timeSlotter from "time-slotter"

function Timeslotting() {
    let arr = []
    timeSlotter('03:35', '05:30', 25).map(t=>(arr.push(t[0]+" - "+t[1])))
    return (
        <div>
             
             {arr[1]}           
        </div>
    )
}

export default Timeslotting
