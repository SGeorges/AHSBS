import React from "react";

function Header() {
    var divStyle = {
        "backgroundColor": "rgb(0, 70, 0)",
      };

    return (
        <div className= "row mb-3">
            <div className= "col" style= {divStyle} >
                <img className= "rounded mx-auto d-block" src={require('./../images/logo_400.png')}/>
            </div>
        </div>
    );
  }
  
  export default Header;
  