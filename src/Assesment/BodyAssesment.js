import React from 'react';
import { Button } from 'react-bootstrap';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function BodyAssesment(props) {

  return (
    <div style={{borderStyle:"inset outset"}}>
<Button style={{background:"black", padding:" 10px 20px 10px 20px", fontSize: "25px", float:"right",margin:"50px 20px"}}>
<i className='fa fa-download' style={{marginRight:"15px"}}></i>Export XLSX
</Button>
<Table style={{borderStyle:"inset"}}>
<div style={{position:"relative", fontSize:"20px"}}>Body Assesments<hr></hr></div>
  
    <Table style={{padding :"30px !important", margin:"30px !important"}}>
      
      <Thead>
        <Tr>
        <Th>No.</Th>
          <Th>Member ID</Th>
          <Th>User Name</Th>
          <Th>Employee Name</Th>
          <Th>Height</Th>
          <Th>Weight</Th>
          <Th>BMI</Th>
          <Th>Assesment Date</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
          {/* <Tbody>
        <Tr>
          <Td>1</Td>
          <Td>Health Assessment	</Td>
          <Td>This is a confidential health assessment questi...</Td>
          <Td>Yes</Td>
          <Td>28-0-24</Td>
          <Td>29-09-24</Td>
          <Td><i className='fa fa-clone' style={{margin:10}}></i><i className='fa fa-pencil' style={{margin:10}}></i><i className='fa fa-user-group' style={{margin:10}}></i><i className='fa fa-expand' style={{margin:10}}></i><i className='fa fa-plus'></i></Td>
          
        </Tr>
        <Tr>
          <Td>2</Td>
          <Td>Health Assessment	</Td>
          <Td>This is a confidential health assessment questi...</Td>
          <Td>Yes</Td>
          <Td>28-0-24</Td>
          <Td>29-09-24</Td>
          <Td><i className='fa fa-clone' style={{margin:10}}></i><i className='fa fa-pencil' style={{margin:10}}></i><i className='fa fa-user-group' style={{margin:10}}></i><i className='fa fa-expand' style={{margin:10}}></i><i className='fa fa-plus'></i></Td>

        </Tr>
        <Tr>
          <Td>3</Td>
          <Td>Health Assessment	</Td>
          <Td>This is a confidential health assessment questi...</Td>
          <Td>Yes</Td>
          <Td>28-0-24</Td>
          <Td>29-09-24</Td>
          <Td><i className='fa fa-clone' style={{margin:10}}></i><i className='fa fa-pencil' style={{margin:10}}></i><i className='fa fa-user-group' style={{margin:10}}></i><i className='fa fa-expand' style={{margin:10}}></i><i className='fa fa-plus'></i></Td>
        </Tr>
        <Tr>
          <Td>4</Td>
          <Td>Health Assessment	</Td>
          <Td>This is a confidential health assessment questi...</Td>
          <Td>Yes</Td>
          <Td>28-0-24</Td>
          <Td>29-09-24</Td>
          <Td><i className='fa fa-clone' style={{margin:10}}></i><i className='fa fa-pencil' style={{margin:10}}></i><i className='fa fa-user-group' style={{margin:10}}></i><i className='fa fa-expand' style={{margin:10}}></i><i className='fa fa-plus'></i></Td>
        </Tr>
        <Tr>
          <Td>5</Td>
          <Td>Health Assessment	</Td>
          <Td>This is a confidential health assessment questi...</Td>
          <Td>Yes</Td>
          <Td>28-0-24</Td>
          <Td>29-09-24</Td>
          <Td><i className='fa fa-clone' style={{margin:10}}></i><i className='fa fa-pencil' style={{margin:10}}></i><i className='fa fa-user-group' style={{margin:10}}></i><i className='fa fa-expand' style={{margin:10}}></i><i className='fa fa-plus'></i></Td>
        </Tr>
        <Tr>
          <Td>6</Td>
          <Td>Health Assessment	</Td>
          <Td>This is a confidential health assessment questi...</Td>
          <Td>Yes</Td>
          <Td>28-0-24</Td>
          <Td>29-09-24</Td>
          <Td><i className='fa fa-clone' style={{margin:10}}></i><i className='fa fa-pencil' style={{margin:10}}></i><i className='fa fa-user-group' style={{margin:10}}></i><i className='fa fa-expand' style={{margin:10}}></i><i className='fa fa-plus'></i></Td>
        </Tr>
      </Tbody> */}
    </Table>
    <div style={{borderStyle:"solid", background:"#f3f4f6", margin:"50px 2px"}}>No DATA available</div>   
    </Table>
 </div>
  );
}
