import React from 'react';
import { Row } from "react-bootstrap"

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props)
{

    const { onMySearch } = props


    const searchHandle = (word) =>
    {
        onMySearch(word)
    }



    return (
        <>
            <Row>
                <Navbar expand="md" bg="dark" data-bs-theme="dark" className='py-2 '>
                    <Container >
                        <Navbar.Brand href="#">
                            <div>
                                <img alt="logo" height={'30px'} src={`https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`} />
                            </div>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action1">Genres</Nav.Link>
                                <Nav.Link href="#action1">Country</Nav.Link>
                                <Nav.Link href="#action1">Movies</Nav.Link>
                                <Nav.Link href="#action1">TV-Series</Nav.Link>
                                <Nav.Link href="#action1">Top-IMDB</Nav.Link>

                            </Nav>
                            <Form className="d-flex">
                                <input onChange={(e) => { searchHandle(e.target.value) }} type='text' className='input' />
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
        </>
    )
}

export default NavBar