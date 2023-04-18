import Table from 'react-bootstrap/Table';

function EventTable() {
  return (
    <Table striped bordered hover size='lg' style={{fontSize:"16px"}}>
      <thead>
        <tr>
          <th>No</th>
          <th>Event Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>End Time</th>
          <th>Attendees</th>
          <th>Web</th>
          <th>App</th>
          <th>Send SMS to eligible member</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>	Test</td>
          <td>21-Nov-2018	</td>
          <td>11:21AM</td>
          <td>04:21PM</td>
          <td>3</td>
          <td><i className='fa fa-circle' style={{color:"#22c55e"}}></i></td>
          <td><i className='fa fa-circle' style={{color:"#22c55e"}}></i></td>
          <td><i className='fa fa-circle' style={{color:"#22c55e"}}></i></td>
          <td><i className='fa fa-user'></i></td>
        </tr>
        <tr>
          <td>1</td>
          <td>	Test</td>
          <td>21-Nov-2018	</td>
          <td>11:21AM</td>
          <td>04:21PM</td>
          <td>3</td>
          <td><i className='fa fa-circle' style={{color:"#ef4444"}}></i></td>
          <td><i className='fa fa-circle' style={{color:"#ef4444"}}></i></td>
          <td><i className='fa fa-circle' style={{color:"#22c55e"}}></i></td>
          <td><i className='fa fa-user'></i></td>
        </tr>
        <tr>
          <td>1</td>
          <td>	Test</td>
          <td>21-Nov-2018	</td>
          <td>11:21AM</td>
          <td>04:21PM</td>
          <td>3</td>
          <td><i className='fa fa-circle' style={{color:"#ef4444"}}></i></td>
          <td><i className='fa fa-circle' style={{color:"#22c55e"}}></i></td>
          <td><i className='fa fa-circle' style={{color:"#ef4444"}}></i></td>
          <td><i className='fa fa-user'></i></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default EventTable;