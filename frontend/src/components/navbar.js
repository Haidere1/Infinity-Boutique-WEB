import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function CollapsibleExample() {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" style={{fontSize:"x-large"}}>
      <Container>
       <Link to='/main' style={{textDecoration:"none"}}><Navbar.Brand>Infinity Realm</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
         <Link to='/men' style={{textDecoration:"none",color:"white"}}> <Nav.Item style={{paddingTop:"8px"}}>Men</Nav.Item></Link>
          
          
         <Link to='/women' style={{textDecoration:"none",color:"white"}}>  <Nav.Item style={{paddingLeft:"10px",paddingTop:"8px"}}>Women</Nav.Item></Link>
            <NavDropdown title="Category" id="collasible-nav-dropdown">
              <NavDropdown.Item >Shoes</NavDropdown.Item>
              <NavDropdown.Item >
                Clothes
              </NavDropdown.Item>
              <NavDropdown.Item >New Arrival</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Go To Top
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>About Us</Nav.Link>
            <Link  style={{textDecoration:"none" ,color:"white" , paddingLeft:"10px",paddingTop:"8px"}} to='/admin' > Admin</Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default CollapsibleExample;