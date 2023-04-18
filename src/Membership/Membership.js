import React from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

export default function Membership(props){
    return(
        <>
    <Button style={{fontSize:"15px", width : "250px", margin:"20px 40px", float:"right", background:"#f8874a", borderRadius:"25px"}}><i className="fa fa-plus"></i>Add New Membership</Button>
    <Table striped bordered hover size='lg' style={{fontSize:"16px"}}>
      <thead>
        <tr>
          <th>No</th>
          <th>Membership Image </th>
          <th>Membership Name</th>
          <th>Period(Days)</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><i className="fa fa-hospital"></i></td>
          <td>Life Style Kings Group-Ex (3 Months)	</td>
          <td>91 Days</td>
          <td>1000</td>
          <td><i className='fa fa-circle' style={{color:"#22c55e"}}></i></td>
          <td><i className='fa fa-expand' style={{margin:10}}></i><i className='fa fa-pencil' style={{margin:10}}></i><i className='fa fa-trash' style={{margin:10}}></i></td>
        </tr>
        <tr>
          <td>2</td>
          <td><i className="fa fa-hospital"></i></td>
          <td>Life Style Kings Group-Ex (3 Months)	</td>
          <td>91 Days</td>
          <td>1000</td>
          <td><i className='fa fa-circle' style={{color:"#22c55e"}}></i></td>
          <td><i className='fa fa-expand' style={{margin:10}}></i><i className='fa fa-pencil' style={{margin:10}}></i><i className='fa fa-trash' style={{margin:10}}></i></td>
        </tr>
        <tr>
          <td>3</td>
          <td><i className="fa fa-hospital"></i></td>
          <td>Life Style Kings Group-Ex (3 Months)	</td>
          <td>91 Days</td>
          <td>1000</td>
          <td><i className='fa fa-circle' style={{color:"#22c55e"}}></i></td>
          <td><i className='fa fa-expand' style={{margin:10}}></i><i className='fa fa-pencil' style={{margin:10}}></i><i className='fa fa-trash' style={{margin:10}}></i></td>
        </tr>
         </tbody>
        </Table>
        </>
    )

}