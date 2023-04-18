import Table from 'react-bootstrap/Table';

function ExpenseTable() {
  return (
    <Table striped bordered hover size='lg' style={{fontSize:"16px"}}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Created By</th>
          <th>Last Updated By</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>13 Sep 2018</td>
          <td>Salary</td>
          <td>72254</td>
          <td>Admin</td>
          <td>Admin</td>
          <td><i className='fa fa-pencil'></i><i className='fa fa-trash' style={{marginLeft:"10px"}}></i></td>
        </tr>
        <tr>
          <td>13 Sep 2018</td>
          <td>Salary</td>
          <td>72254</td>
          <td>Admin</td>
          <td></td>
          <td><i className='fa fa-pencil'></i><i className='fa fa-trash' style={{marginLeft:"10px"}}></i></td>
        </tr>
        <tr>
          <td>13 Sep 2018</td>
          <td>Salary</td>
          <td>72254</td>
          <td>Admin</td>
          <td>Admin</td>
          <td><i className='fa fa-pencil'></i><i className='fa fa-trash' style={{marginLeft:"10px"}}></i></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ExpenseTable;