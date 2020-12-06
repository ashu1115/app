import React  from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './css/App.css';
import Header from "./components/Header";
import Home from './components/Home';
import Checkout from './components/Checkout';

import Successfull from './components/Successfull';
import Store from './components/Store';
import Landing_page from './components/Landing_page';
import Timeslotting from './components/Timeslotting';




function App() {



  return (
    <Router>
       <div className="app">
        <Switch>
         <Route path="/checkout/:booking_date/:booking_time">
           <Header title="Booking Details"/>
            <Checkout />
         
         </Route>
      
         <Route path="/successful">
        
            <Successfull />
         
         </Route>

      
         <Route path="/landing">
        
        <Landing_page />
    
     
     </Route>
  
         <Route path="/later">
           <Header title="Booking Date And Time" />
           <Home />
         
         </Route>

         
      
         <Route path="/">
      
          <Store />
         </Route>

     
        </Switch>
       </div>
    </Router>

   
  );
}

export default App;
