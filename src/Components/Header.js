import React from "react";
import "../CSS/style.css";

class Header extends React.Component{
    onClickHandler(){
        console.log("I just Clicked");
    }
    render(){
        return (
            <header>
            <div className="logo"> Logo </div>
            <input onClick={this.onClickHandler} type="text" />
            </header>
        )
    }
}

export default Header;