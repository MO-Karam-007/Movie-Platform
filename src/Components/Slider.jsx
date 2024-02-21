import React from 'react'
import { Row, Col } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import gotg from '../assets/got.jpg'
import venom from '../assets/spiderman.jpg'
function Slider()
{
    return (
        <>
            <Row className=''>
                <Col sm="12" className="py-4 justify-content-center text-center">

                    <Carousel>
                        <Carousel.Item>
                            <img alt='11' height={'500px'} width={'100%'} src={gotg} />
                            <Carousel.Caption>
                                <h3>Game Of Thrones</h3>
                                <p>The power struggles among noble families as they fight for control of the Iron Throne of the Seven Kingdoms.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt='11' height={'500px'} width={'100%'} src={venom} />
                            <Carousel.Caption>
                                <h3>Spider-Man Animation</h3>
                                <p>American teenager Peter Parker, a poor sickly orphan, is bitten by a radioactive spider.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* <Carousel.Item>
                            <img alt='11' src={gotg} />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item> */}
                    </Carousel>
                </Col>
            </Row>
        </>
    )
}

export default Slider