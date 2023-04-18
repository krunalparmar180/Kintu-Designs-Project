import Table from 'react-bootstrap/Table';

function InventoryTable() {
  return (
    <Table striped bordered hover size='lg' style={{fontSize:"16px"}}>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Quality (In Stock)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td ><i className='fa fa-shoe-prints'></i>Shoes</td>
          <td>BPI Sports</td>
          <td>23</td>
          <td><button  style={{background:"#8e44ad", borderRadius:"8px", border:"none", color:"white"}}><i className='fas fa-pencil'></i></button></td>
        </tr>
       
      
        <tr>
          <td ><i className='fa fa-socks'></i>test</td>
          <td>BPI Sports</td>
          <td>23</td>
          <td><button  style={{background:"#8e44ad", borderRadius:"8px", border:"none", color:"white"}}><i className='fas fa-pencil'></i></button></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default InventoryTable;