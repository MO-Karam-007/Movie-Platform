import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import food12 from "../assets/plane.jpg"
import PaginationComponent from './PaginationComponent'
import Slider from './Slider'
import { Link } from 'react-router-dom'

function CardItem(props)
{

    const { pagination, pageCount } = props
    const movies = props.data
    // console.log(`Movies names : `, movies.map(item => item.original_title));
    return (
        <>
            <Slider />
            < Row className="my-5">
                {
                    movies.length ? (
                        movies.map(item =>
                        {
                            return (

                                <Col sm='3' className='d-flex my-2 bg-color'>


                                    <Link to={`/movie/${item.id}`}>
                                        <Card className='flex-fill m-3 my-container' >
                                            <img className='card-showdow' variant="top" width={"100%"} src={`https://image.tmdb.org/t/p/w500` + item.poster_path} alt='Not found' />
                                            <div className='overlay'>
                                                <p className=' text-uppercase text-truncate'>{item.original_title}</p>

                                            </div>
                                        </Card>
                                    </Link>
                                </Col>

                            )
                        })

                    ) : (
                        <h1>Not Fount</h1 >
                    )
                }

                <PaginationComponent pagination={pagination} pageCount={pageCount} />

            </ Row >
        </>
    )
}

export default CardItem