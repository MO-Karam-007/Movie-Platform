
import { Container } from 'react-bootstrap';
import NavBar from './Components/NavBar';
// import Header from './Components/Header';
import Categories from './Components/Categories';
import CardItem from './Components/CardItem';
import React, { useEffect, useState } from "react"
import Slider from './Components/Slider';
import axios from './../node_modules/axios/dist/esm/axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';


function App()
{
  const [url, setUrl] = useState('')
  const [movies, setMovies] = useState([])
  const [pageCount, setPageCount] = useState(1)


  const getAllMovies = async () =>
  {

    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f572a3ac4a12a1bae9df888539299b1f&language=ar`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)

  }



  const pagination = async (page) =>
  {
    // & page=${ page }
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f572a3ac4a12a1bae9df888539299b1f&language=ar&page=${page}`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)

  }
  const mySearch = async (word) =>
  {

    const theUrl = `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=f572a3ac4a12a1bae9df888539299b1f`

    if (pageCount) setUrl(theUrl.concat(`&page=${pageCount}`))
    console.log(`The url `, url);
    if (word === "")
    {
      getAllMovies()
    } else 
    {
      const res = await axios.get(url)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
    }
  }

  useEffect(() =>
  {
    getAllMovies()
  }, [])
  return (
    <div className="App">
      <NavBar onMySearch={mySearch} />


      <Container >
        <BrowserRouter>
          <Routes>


            <Route path='/' element={<CardItem data={movies} pagination={pagination} pageCount={pageCount} />} />
            <Route path='/movie/:id' element={<MovieDetails />} />


          </Routes>
        </BrowserRouter>

      </Container >
    </div >
  );
}

export default App;
