import React from "react";
import { Button } from "react-bootstrap";

export default function ExpenseIcons(props){
    return(
        <>
        <Button style={{fontSize:"20px", width : "200px", margin:"20px 40px", background:"#f8874a", borderRadius:"15px", marginLeft:"70%", fontWeight:"bold"}}><i class="fa fa-plus"></i>Add Expense </Button>
        
        </>
    )
}

