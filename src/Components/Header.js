import React from "react";

const info={
    fname:"Hari",
    lname:"Nakka"
}

const year=()=>{
    const date=new Date();
    return date.getFullYear();
}

const Header = () => {
    return (
        <div>
        <h1> Hello {info.fname} {year()}</h1>
        </div>
    )
}

export default Header;