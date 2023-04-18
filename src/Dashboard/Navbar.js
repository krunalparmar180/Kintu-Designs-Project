import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarr() {
  return (
    <Navbar collapseOnSelect expand="xxl" bg="primary" variant="dark" >
      <Container>
        <Navbar.Brand href="#home" style={{fontWeight:'bold'}}>DASHBOARD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
  
          </Nav>
          <Nav style={{textAlign:"center"}}>
            <Nav.Link href="#"><i class="fa-solid fa-bell"></i></Nav.Link>
            <Nav.Link href="#" gap={10}><i class="fa-solid fa-calendar"></i></Nav.Link>
            <Nav.Link href="#"><i class="fa-solid fa-comments"></i></Nav.Link>
            <Nav.Link href="#"><i class="fa-solid fa-shopping-bag"></i></Nav.Link>

            <NavDropdown title="Admin" id="collasible-nav-dropdown" >
            
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tickets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Logout</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;