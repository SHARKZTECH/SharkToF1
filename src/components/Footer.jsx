import { Container, Navbar,Nav } from "react-bootstrap";
import LOGO from "../../assets/logo1.png"

const Footer=()=>{
    return(
      <Container>
           <div className="footer" >
             <img src={LOGO} alt="logo" width={'100px'}/>
             <div className="footer-text">
             <p>Home</p>
             <p>Market Place</p>
             <p>Exchange</p>
             <p>Wallet</p>
             </div>
           </div>
          <div className="d-flex align-items-center flex-column">
          <p className="text-center">Come join us and hear for the unexpected miracle</p>
          <p>infor@SharkzTech.com</p>
          </div>
          <hr className="m-1"></hr>
          <div className="d-flex justify-content-between">
            <p>@SharkzTech2022</p>
            <p>All rights reserved</p>
          </div>
          
      </Container>
    )
}
export default Footer;