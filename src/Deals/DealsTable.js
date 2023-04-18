import Table from 'react-bootstrap/Table';

function DealsTable() {
  return (
    <Table striped bordered hover size='lg' style={{fontSize:"20px"}}>
      <thead>
        <tr>
          <th>No</th>
          <th>Assigned To</th>
          <th>Username</th>
          <th>Deal Stage</th>
          <th>Create Date</th>
          <th>Close Date</th>
          <th>Next Followup Date</th>
          <th>Actions</th>
          <th>Deal Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>	AHMED MOTIWALA</td>
          <td>SANDEEP KUMAR JASSAL JASSAL	</td>
          <td>POS/PAYMENTS</td>
          <td>30-08-2019</td>
          <td>30-09-2019</td>
          <td></td>
          <td><i className='fa fa-expand' style={{margin:10}}></i>< i className='fa fa-dollar'></i></td>
          <td><button style={{background:"#f8874a", color:"white", fontWeight:"bold", width:"90px"}}>Open</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>	AHMED MOTIWALA</td>
          <td>SANDEEP KUMAR JASSAL JASSAL	</td>
          <td>POS/PAYMENTS</td>
          <td>30-08-2019</td>
          <td>30-09-2019</td>
          <td>15-12-2019</td>
          <td><i className='fa fa-expand' style={{margin:10}}></i>< i className='fa fa-dollar'></i></td>
          <td><button style={{background:"#f8874a", color:"white", fontWeight:"bold", width:"90px"}}>Open</button></td>
        </tr><tr>
          <td>3</td>
          <td>	AHMED MOTIWALA</td>
          <td>SANDEEP KUMAR JASSAL JASSAL	</td>
          <td>POS/PAYMENTS</td>
          <td>30-08-2019</td>
          <td>30-09-2019</td>
          <td>20-10-2019</td>
          <td><i className='fa fa-expand' style={{margin:10}}></i>< i className='fa fa-dollar'></i></td>
          <td><button style={{background:"#f8874a", color:"white", fontWeight:"bold", width:"90px"}}>Open</button></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DealsTable;