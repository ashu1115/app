import React from "react";
import "../css/Header.css";

import { Link } from "react-router-dom";

import { useParams } from "react-router";


function Header({title}) {
  let {store_id} = useParams();
  return (
    <div className="header">
     


      <div className="header__nav">
     
        <Link to={`/store/${store_id}`} style={{color:"black",fontSize:"18px",textDecoration:"none"}}>
              <i className="fas fa-arrow-left" style={{paddingRight:"10px"}}></i> {title}
        </Link>

      </div>
    </div>
  );
}

export default Header;