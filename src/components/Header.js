import React from "react";
import "../css/Header.css";

import { Link } from "react-router-dom";


function Header({title}) {
 
  return (
    <div className="header">
     


      <div className="header__nav">
     
        <Link to="" style={{color:"black",fontSize:"18px",textDecoration:"none"}}>
              <i className="fas fa-arrow-left" style={{paddingRight:"10px"}}></i> {title}
        </Link>

      </div>
    </div>
  );
}

export default Header;