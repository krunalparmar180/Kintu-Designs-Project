import React from "react";

export default function InventoryIcons(props){
    return(
        <div style={{position:"absolute", display:"flex", margin:"80px"}}>
        <div>
            <button style={{background:"#393939", borderRadius:"8px", width:"80px", height:"60px", border:"none", }}>
                  <i class="fas fa-tag" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>Purchase</p>
        </div>
        
        <div style={{marginLeft:"80px"}}>
            <button style={{background:"#8e44ad", borderRadius:"8px", width:"80px", height:"60px", border:"none", }}>
                  <i class="fas fa-eye" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>Supplier</p>
        </div>

        <div  style={{marginLeft:"80px"}}>
            <button style={{background:"#ff4897", borderRadius:"8px", width:"80px", height:"60px", border:"none", }}>
                  <i class="fas fa-search-plus" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>New Inventory</p>
        </div>

        </div>  
        
    )
}