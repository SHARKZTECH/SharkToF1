import {Navbar,Container,Nav} from "react-bootstrap"
import LOGO from "../../assets/logo1.png"

const Header=()=>{
    return(
        <Navbar bg="" expand="lg" variant="dark">
        <Container >

          <Navbar.Brand as={'img'} href="#" src={LOGO} alt='logo' width={'100px'}></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="#" as={'h4'}>Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" as={'h4'}>Market Place</Nav.Link>
              <Nav.Link href="#" as={'h4'}>Exchange</Nav.Link>
              <Nav.Link href="#" as={'h4'}>Wallet</Nav.Link>
            </Nav>
       
          </Navbar.Collapse>

        </Container>
      </Navbar>
    )
}

export default Header;