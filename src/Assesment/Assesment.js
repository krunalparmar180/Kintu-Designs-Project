import React from 'react';
import { Button } from 'react-bootstrap';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function Assesment(props) {

  return (
    <>
<Button style={{background:"#f8874a", padding:" 10px 20px 10px 20px", fontSize: "15px", float:"right",margin:"50px 20px"}}>
Create Form
</Button>
    <Table>
      <Thead>
        <Tr>
        <Th>No.</Th>
          <Th>Form Name</Th>
          <Th>Form Description</Th>
          <Th>Form Enabled</Th>
          <Th>Create Date</Th>
          <Th>Update Date</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
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
      </Tbody>
    </Table>
    </>
  );
}
