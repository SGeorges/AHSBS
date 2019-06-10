import React from "react";

function Footer() {
    var rowStyle = {
        "backgroundColor": "rgb(0, 70, 0)",
        "height": "60px",
    };

    var sources_Style = {
        "margin": "auto",
        "display": "table",
    };

    return (
        <div className= "row mt-3" style= {rowStyle} >
            <div className= "col-md-4">
            </div>
            <div className= "col-md-4 text-center text-light">
                Audubon Boys Soccer Club
            </div>
            <div className= "col-md-4 d-flex" style= {sources_Style} >
                <img className= "youtube ml-auto mb-2 mt-2 mr-2" src= {require('./../images/001-youtube.png')}/>
                <img className= "instagram mb-2 mt-2 mr-2" src= {require('./../images/002-instagram.png')}/>
                <img className= "facebook mb-2 mt-2 mr-2" src= {require('./../images/003-facebook.png')}/>
                <img className= "twitter  mb-2 mt-2 mr-2" src= {require('./../images/004-twitter.png')}/>
            </div>
        </div>
    );
}

export default Footer;