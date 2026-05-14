import { useState } from 'react'
import './App.css'

import  responseMovies from "./mocks/results.json"

import ListOfMovies from './components/movies'
import useMovies from './hooks/movies'

function App() {



const movies = responseMovies.Search
const {mapMoviesList}=useMovies({movies}) 



  return (
    <>
  <div className='page'>
    <header>
      <form className='form-css'>
        <input type='text' placeholder='Movies'/>
        <button type='submit'>Buscar</button>
      </form>
    </header>
      <h1> Prueba tecnica </h1>
    <main>
      <h1>Peliculas</h1>
      <ListOfMovies movies={mapMoviesList}/>
    </main>
</div>
    </>
  )
}

export default App
