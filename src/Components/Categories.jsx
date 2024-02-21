import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';

function Categories(props)
{
    const { selectCateogry } = props

    const onFilter = (category) =>
    {
        console.log(`Cateogery : `, category);
        selectCateogry(category)
    }

    return (
        <>

            <Row className=''>
                <Col sm="12" className='justify-content-center  d-flex flex-row'>
                    {
                        props.data.length ? (


                            props.data.map((item, index) =>
                            {
                                return (<div key={index} className=''>
                                    <Button onClick={() => onFilter(item)} className='mx-2' variant="outline-dark">{item}</Button>
                                </div>)
                            })


                        ) : (<h1>No DATA YET</h1>)
                    }

                </Col>
            </Row >


        </>
    )
}

export default Categories