import Table from 'react-bootstrap/Table';

function PaymentTable() {
  return (
    <Table striped bordered hover size='lg' style={{fontSize:"20px"}}>
      <thead>
        <tr>
          <th>No</th>
          <th>Payment Date</th>
          <th>Member ID</th>
          <th>Member Name</th>
          <th>Product Type</th>
          <th>Total Paid</th>
          <th>Payment Option</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>11 Nov 2020	</td>
          <td>CBM0000726</td>
          <td>Ashutosh Patel</td>
          <td>Membership</td>
          <td>₹58999</td>
          <td>cash</td>
        </tr>
        <tr>
          <td>2</td>
          <td>11 Nov 2020	</td>
          <td>CBM0000726</td>
          <td>Ashutosh Patel</td>
          <td>Membership</td>
          <td>₹58999</td>
          <td>cash</td>
        </tr>
        <tr>
          <td>3</td>
          <td>11 Nov 2020	</td>
          <td>CBM0000726</td>
          <td>Ashutosh Patel</td>
          <td>Membership</td>
          <td>₹58999</td>
          <td>cash</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default PaymentTable;