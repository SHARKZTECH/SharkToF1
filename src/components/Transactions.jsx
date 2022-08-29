import {Card, Container, Row,Col} from "react-bootstrap"

import DummyData from "../utils/dummyData"
import {shortenAddress} from "../utils/shortenAddress"
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import {TransactionContext} from "../context/TransactionContext"

const TransactionCard=({item})=>{
    const gifUrl=useFetch({keyword:item.keyword});

    return(
        <Col>
        <Card bg="dark" style={{ minWidth: '17rem', minHeight: '20rem' }}>
            <Card.Body >
            <Card.Text className="text1">
               <p className="m-0">From: {shortenAddress(item.addressFrom)}</p>
               <p className="m-0">To: {shortenAddress(item.addressTo)}</p>
               <p className="m-0">Amount: {item.amount} ETH</p> 
               {item.message &&  (<p className="m-0">{item.message}</p>)}
           </Card.Text>
            <Card.Img src={item.url || gifUrl} alt="gif" style={{ minWidth: '13rem', height: '12rem',objectFit: 'cover' }}/>
            <Card.ImgOverlay>
                <p>{item.timestamp}</p>
            </Card.ImgOverlay>
            </Card.Body>
        </Card>
        </Col>
    )
}

const Transactions=()=>{
      const {transactions,currentAccount}=useContext(TransactionContext)

    return(
       <Container>
           {currentAccount ? (
               <h2 className="text-center text3">Latest Transaction</h2>
           ):(
            <h2 className="text-center text3">Connect your account to see the latest transactions</h2>
           )}
           
           <Row   sm={2} xl={4} className="g-4">
            {[...DummyData,...transactions].reverse().map((item,index) => (
               <TransactionCard item={item} key={index}/>
            ))}
            </Row>
           
       </Container>
    )
}
export default Transactions;