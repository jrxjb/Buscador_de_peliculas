import { useEffect, useState } from 'react'
import './App.css'

import  responseMovies from "./mocks/results.json"

import ListOfMovies from './components/movies'
import useMovies from './hooks/movies'

function App() {

const movies = responseMovies.Search

const [query,setQuery]=useState("")
const [error,setError] = useState(null)

const {mapMoviesList}=useMovies({movies}) 

function handleSumit(event){
event.preventDefault()
const data = document.getElementById('inputMovies').value
//window.alert(data)
}

function handleChange(event){
  const newQuery = event.target.value
  setQuery(newQuery)

  if(newQuery ===''){
    setError("No se puede bucar un elemento vacio")
    return
  }
  if(newQuery.match(/^\d+$/)){
    setError("No se puede buscar una pelicula con 1 numero")
    return
  }
  if(newQuery.length<3){
    setError("La busqueda debe tener al menos 3 caracteres")
    return
  }
  console.log(query)
  setError(null)
}

useEffect(()=>{

},[])

  return (
    <>
  <div className='page'>
    <header>
      <form className='form-css' onSubmit={handleSumit}>
        <input value={query} id="inputMovies" onChange={handleChange} type='text' placeholder='Movies'/>
        <button type='submit'>Buscar</button>
      </form>
      <p> {error}</p>
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
