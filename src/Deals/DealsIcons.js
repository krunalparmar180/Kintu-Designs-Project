import React from "react";
import { Button } from "react-bootstrap";

export default function DealsIcons(props){
    return(
        <>
        <Button style={{fontSize:"25px", width : "500px", margin:"20px 40px", background:"#f8874a", borderRadius:"15px"}}>TOTAL DEALS TODAY:0</Button>
        <Button style={{fontSize:"25px", width : "600px", margin:"20px 40px",  background:"#f8874a", borderRadius:"15px"}}>TOTAL CALLS TODAY:0</Button>
        </>
    )
}

