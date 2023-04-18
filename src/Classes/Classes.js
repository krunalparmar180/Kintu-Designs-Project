import React from "react";
import { Button } from "react-bootstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function Classes(props){
return(
    <>
    <div style={{borderStyle:"inset none" , margin:"0px"}}>

<select name="classes" id="" style={{fontSize:"20px", width : "200px", margin:"20px 40px"}}>
  <option value="Show All">Show All</option>
  <option value="Gym">Gym</option>
  <option value="Gym Daily">Gym Daily</option>
  <option value="Simming">Swimming</option>
  <option value="Group Ex">Group Ex</option>
</select>

<Button style={{fontSize:"15px", width : "200px", margin:"20px 40px", float:"right", background:"#f8874a", borderRadius:"25px"}}><i className="fa fa-plus"></i>Add New Class</Button>
<Button style={{fontSize:"15px", width : "100px", margin:"20px 40px", float:"right", background:"#f8874a", borderRadius:"25px"}}>Today</Button>

    </div>

    <div style={{borderStyle:"inset none" , margin:"0px"}}>
    <Table style={{borderStyle:"solid !important"}}>
      <Thead style={{fontSize:"20px"}}>
        <Tr>
        <Th>No.</Th>
          <Th>Class Name</Th>
          <Th>Date</Th>
          <Th>Days</Th>
          <Th>Time</Th>
          <Th>Trainer</Th>
          <Th>Proxy Trainer</Th>
          <Th>Participants</Th>
          <Th>Status</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody style={{margin:"50px 30px", fontSize:"18px", borderStyle:"solid !important"}}>
        <Tr>
          <Td>1</Td>
          <Td>Group Ex	</Td>
          <Td>Daily</Td>
          <Td>Mon,Tue,Wed,Thur,Fri,Sat</Td>
          <Td>04:00PM -05:00PM</Td>
          <Td>  Adan Brown</Td>
          <Td></Td>
          <Td>1/25</Td>
          <Td><i class="fa-solid fa-circle" style={{color:" #10a821"}}></i></Td>
          <Td><i className='fa fa-expand' style={{margin:10}}></i><i className='fa fa-pencil' style={{margin:10}}></i><i className='fa fa-trash'></i></Td>
        </Tr>

        <Tr>
          <Td>2</Td>
          <Td>Group Ex	</Td>
          <Td>Daily</Td>
          <Td>Mon,Tue,Wed,Thur,Fri,Sat</Td>
          <Td>08:00PM -09:00PM</Td>
          <Td>  Adan Brown</Td>
          <Td>Hitesh J Patel</Td>
          <Td>0/25</Td>
          <Td><i class="fa-solid fa-circle" style={{color:" #10a821"}}></i></Td>
          <Td><i className='fa fa-expand' style={{margin:10}}></i><i className='fa fa-pencil' style={{margin:10}}></i><i className='fa fa-trash'></i></Td>
        </Tr>

        </Tbody>
        </Table>
        </div>

    </>
)
}