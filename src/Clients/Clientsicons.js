import React from "react";

export default function Clientsicons(){
    return(
        <>
        <div style={{display:"inline-block", position:"absolute"}}>
        
                <button style={{background:"#ff4894", borderRadius:"8px", width:"80px", height:"50px", border:"none", }}>
                  <i class="fas fa-user-plus" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>Add Client</p>

                  <button style={{background:"#747880", borderRadius:"8px", width:"80px", height:"50px", border:"none", }}>
                  <i class="fas fa-info-circle" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>Add Inquiry</p>
                  
                  <button style={{background:"#0e9532", borderRadius:"8px", width:"80px", height:"50px", border:"none"}}>
                  <i class="fas fa-calendar-day" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>Book Appointment</p>

                  <button style={{background:"#c0392b", borderRadius:"8px", width:"80px", height:"50px", border:"none"}}>
                  <i class="fas fa-calendar-times" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>Attendance</p>

                  <button style={{background:"#0e9532", borderRadius:"8px", width:"80px", height:"50px", border:"none"}}>
                  <i class="fas fa-eye" style={{fontSize:"30px", color:"white"}} ></i>
                  </button>
                  <p style={{fontWeight:"bold"}}>Show Phone</p>

               
            </div>
        </>
    )
}