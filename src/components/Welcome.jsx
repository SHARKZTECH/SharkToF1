import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import {FaEthereum} from "react-icons/fa"
import {AiOutlineExclamationCircle} from "react-icons/ai"

import Loader from "./Loader";
import {TransactionContext} from "../context/TransactionContext"
import {shortenAddress} from "../utils/shortenAddress"
import { useContext } from "react";

const Welcome=()=>{
  const { connectWallet,currentAccount,handleChange,sendTransaction,formData,isLoading} =useContext(TransactionContext);

  const handleSubmit=(e)=>{
    const {addressTo,amount,keyword,message}=formData;

    e.preventDefault();
    
    if(!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  }

    return(
       <Container>
           <Row>

           <Col>
              <h1 className="text1">
                Send Crypto
                <br/>
                accoss the world
              </h1>
              <p className="text">
                  Explore the crypto world. Buy and Sell 
                  <br/>
                  cryptocurrencies easily on SharkTo
              </p>
              {!currentAccount && <Button onClick={connectWallet}>Connect Wallet</Button>}              
              <div className="my-2">
              <div className="d-flex">                
                <div className="border py-3 p-2 w-50" style={{borderTopLeftRadius:'2rem'}}>Web 3.0</div>
                <div className="border py-3 p-2 w-50">Low Fees</div>
                <div className="border py-3 p-2 w-50" style={{borderTopRightRadius:'2rem'}}>Blockchain</div>
              </div>
              <div className="d-flex">
                <div className="border py-3 p-2 w-50" style={{borderBottomLeftRadius:'2rem'}}>Reliability</div>
                <div className="border py-3 p-2 w-50">Security</div>
                <div className="border py-3 p-2 w-50" style={{borderBottomRightRadius:'2rem'}}>Ethereum</div>
              </div>
              </div>
              
           </Col>

           <Col className="d-flex flex-column align-items-center">
              <Card bg="primary" style={{width:'15rem'}}>
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <span className="border border-white rounded-circle p-1">
                      <FaEthereum fontSize={28}/>
                      </span>
                      <AiOutlineExclamationCircle/>
                    </Card.Title>
                    <Card.Text className="fw-bold text1">
                        <small>{shortenAddress(currentAccount)}</small>
                        <p>Ethereum</p> 
                    </Card.Text>
                  </Card.Body>
              </Card>

              <Card className="m-2" bg="dark" style={{minWidth:'23rem'}} >
             <Card.Body>
              <Form>

                <Form.Group controlId='address' className="m-1">                  
                    <Form.Control
                    required
                    type="text"
                    placeholder="Address To"  
                    name="addressTo"
                    onChange={(e) => handleChange(e)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='amount' className="m-1">                  
                    <Form.Control
                    required
                    type="number"
                    placeholder="Amount(ETH)"  
                    name="amount"
                    step={0.0001}
                    onChange={(e) => handleChange(e)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='keyword' className="m-1">                  
                    <Form.Control
                    required
                    type="text"
                    placeholder="Keyword(GIF)"  
                    name="keyword"
                    onChange={(e) => handleChange(e)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='message' className="m-1">                  
                    <Form.Control
                    required
                    type="text"
                    placeholder="Enter Message"  
                    name="message"
                    onChange={(e) => handleChange(e)}
                    ></Form.Control>
                </Form.Group>
              </Form>
              <hr></hr>
              {isLoading ? (
                <Loader/>) :(
                  <Button onClick={handleSubmit} >Send now</Button>
                )}
              </Card.Body>
              </Card>
           </Col>

           </Row>
       </Container>
    )
}
export default Welcome;