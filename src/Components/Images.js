import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import logo from '../rFDbw.jpg';
import logo1 from '../github.png';
import logo2 from '../linked.png';
import logo3 from '../react.png';
const Images = () => {
    return (
 <Container>
  <Row>

  
               
  <Image src={logo}  className="githubIcon" to="https://github.com/Joeyryanbridges"  roundedCircle  />
  <br/>       
    <Col xs={6} md={4}>
    <Image src={logo1} className="githubIcon" to="https://github.com/Joeyryanbridges" />
    </Col>
    <Col xs={6} md={4}>
    <Image src={logo2} className="linkedinIcon" href="https://github.com/Joeyryanbridges" />
    </Col>
    <Col xs={6} md={4}>
    <Image src={logo3} className="githubIcon" href="https://github.com/Joeyryanbridges" />
    </Col>
  </Row>
</Container>
    )
}

export default Images
