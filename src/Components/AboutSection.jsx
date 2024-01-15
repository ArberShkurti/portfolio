import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AboutSection = () => {
  return (
    <Container className='about-section-wrapper'>
        <Row>
            <Col xs={6} className='d-flex flex-column justify-content-center'>
                <h1>About Our Work</h1>
                <p>
                    Pershkrime pershkrime detaje detaje detaje etj etj etj
                    Pershkrime pershkrime detaje detaje detaje etj etj etj
                    Pershkrime pershkrime detaje detaje detaje etj etj etj
                    Pershkrime pershkrime detaje detaje detaje etj etj etj
                </p>
                <a href="/">Learn more</a>
            </Col>
            <Col xs={6} className='about-img-wrapper'>
                <img alt="del????????" src={('./images/image-1.jpg/')} />
            </Col>
        </Row>
    </Container>
  )
}

export default AboutSection