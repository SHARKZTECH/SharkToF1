import { Row,Col, Container,Card } from "react-bootstrap";

const Services=()=>{
    return(
        <Container>
       <Row >
           <Col sm={12} md={6} className="d-flex flex-column justify-content-center">
              <h2 className="text1">Services that we 
                  <br/>
               continue to improve   
              </h2>
              <p className="text2">The best choise for buying and selling your crypto assets, with
                  <br/>
                  the various super friendly services we offer
              </p>
           </Col>
           <Col>
              <Card className="m-2" bg="dark">
                  <Card.Body>
                    <Card.Title className="text2">
                      Security gurantee
                    </Card.Title >
                    <Card.Text className="text">
                      Security is guranteed. We always maintain privacy and maintain the 
                      quality of our products
                  </Card.Text>
                  </Card.Body>               
              </Card>
              <Card className="m-2" bg="dark">
                  <Card.Body>
                    <Card.Title className="text2">
                    Best exchange rates                    </Card.Title>
                    <Card.Text className="text">
                      Security is guranteed. We always maintain privacy and maintain the 
                      quality of our products
                  </Card.Text>
                  </Card.Body>               
              </Card>
              <Card className="m-2" bg="dark">
                  <Card.Body>
                    <Card.Title className="text2">
                    Fastest transactions                    </Card.Title>
                    <Card.Text className="text">
                      Security is guranteed. We always maintain privacy and maintain the 
                      quality of our products
                  </Card.Text>
                  </Card.Body>               
              </Card>
           </Col>
       </Row>
        </Container>
    )
}
export default Services;