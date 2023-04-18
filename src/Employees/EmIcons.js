import React from "react";

export default function EmIcons(props){
    return(
        <div style={{position:"absolute", display:"flex", margin:"80px"}}>
        <div>
            <button style={{background:"#ff4897", borderRadius:"8px", width:"80px", height:"60px", border:"none", }}>
                  <i class="fas fa-user-plus" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>Add Employee</p>
        </div>
        
        <div style={{marginLeft:"80px"}}>
            <button style={{background:"#8e44ad", borderRadius:"8px", width:"80px", height:"60px", border:"none", }}>
                  <i class="fas fa-user" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>Personal Training</p>
        </div>

        <div style={{marginLeft:"80px"}}>
            <button style={{background:"#747880", borderRadius:"8px", width:"80px", height:"60px", border:"none", }}>
                  <i class="fas fa-calendar" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>Attendance</p>
        </div>

        <div style={{marginLeft:"80px"}}>
            <button style={{background:"#0e9532", borderRadius:"8px", width:"80px", height:"60px", border:"none", }}>
                  <i class="fas fa-eye" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>Show Salary</p>
        </div>

        <div style={{marginLeft:"80px"}}>
            <button style={{background:"#c0392b", borderRadius:"8px", width:"80px", height:"60px", border:"none", }}>
                  <i class="fas fa-file" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>Salary Slip</p>
        </div>
        

        </div>  
        
    )
}