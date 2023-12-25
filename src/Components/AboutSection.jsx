import React from 'react'
import { Containe, Row, Col, Container } from 'react-bootstrap'

const AboutSection = () => {
  return (
    <Container className='about-section-wrapper'>
        <Row>
            <Col xs={6} className='d-flex flex-column justify-content-center'>
                <h1>About Our Work</h1>
                <p>
                    Pershkrime pershkrime detaje detaje detaje etj etj etj
                </p>
                <a href="/">Learn more</a>
            </Col>
            <Col xs={6} className='about-img-wrapper'>
                <img alt="hand" src={`images/image-2.jpg`}></img>
            </Col>
        </Row>
    </Container>
  )
}

export default AboutSection