import React from "react";

export default function InquiriesIcons(props){
    return(
        <div style={{position:"absolute", display:"flex", margin:"80px"}}>
        <div>
            <button style={{background:"#393939", borderRadius:"8px", width:"80px", height:"60px", border:"none", }}>
                  <i class="fas fa-download" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>Export XLSX</p>
        </div>
        
        <div style={{marginLeft:"80px"}}>
            <button style={{background:"#8e44ad", borderRadius:"8px", width:"80px", height:"60px", border:"none", }}>
                  <i class="fas fa-info-circle" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>New Inquiry</p>
        </div>

        </div>  
        
    )
}