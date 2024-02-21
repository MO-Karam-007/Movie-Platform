import React, { useState, useEffect } from 'react'
import { Row, Col } from "react-bootstrap"
import { useParams, Link } from "react-router-dom"
import axios from 'axios';
import { Button } from 'react-bootstrap'

const MovieDetails = () =>
{
    const param = useParams()
    const [movie, setMovie] = useState([])

    const getMove = async () =>
    {
        try
        {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=f572a3ac4a12a1bae9df888539299b1f`)
            setMovie(res.data);
        } catch (error)
        {
            console.error('Error fetching movie:', error)
        }
    }

    useEffect(() =>
    {
        getMove()
        console.log(`Movie`, movie);
    }, [])


    return (
        <div>
            <h6 className='py-2 text-primary'>Home / Movies / {movie.title}</h6>
            <img alt='11' height={'500px'} width={'100%'} src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path} />
            <Row className=' my-3'>
                <Col md={3} className="d-flex flex-column align-items-center ">
                    <img className='card-showdow p-1' width={"80%"} alt='cover' src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} />
                    <Link to={`${movie.homepage}`}> <Button className='px-5 btn-success'>Original Website</Button></Link>
                </Col>
                <Col md={6}>

                    <h2>{movie.title}</h2>
                    <p className='  font-weight-bold text-primary'>{movie.overview}</p>
                    <p>Released : {movie.status === "Released" ? "Available" : "Upcoming"}</p>
                    <p>{movie.adult ? "Restricted to adults" : "For family"}</p>
                    <div className='d-flex  align-items-between '>
                        <Col md='6'>
                            <p className="m-0  text-truncate">Genre : {movie.genres ? movie.genres.map(item => item.name).join(' ,') : "Not Selected"}</p>
                            <p className="m-0  text-truncate"> Actor : Ahmed El saka , Niklo skage</p>
                            <p className="m-0  text-truncate">Country : {movie.production_countries ? movie.production_countries.map(item => item.name).join(' ,') : "Not Selected"}</p>
                            <p className="m-0 text-truncate">Languages : {movie.original_language}</p>
                        </Col>
                        <Col md='6'>
                            <p className="m-0 text-truncate" >Duration : {movie.runtime} min</p>
                            <p className="m-0 text-truncate">Quality : 1080p</p>
                            <p className="m-0 text-truncate">Release : {movie.release_date} </p>
                            <p className="m-0 text-truncate">Producers : {movie.production_companies ? movie.production_companies.map(item => item.name).join(' ,') : "Not Selected"} </p>
                        </Col>
                    </div>
                </Col>
                <Col className='d-flex flex-column  my-4' md={3}>
                    <Button className='my-3'>Streaming in HD</Button>
                    <Button className='my-3'>Download in HD</Button>

                </Col>
            </Row>





        </div>
    )
}

export default MovieDetails
