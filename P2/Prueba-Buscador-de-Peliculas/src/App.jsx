import { useEffect, useState,useRef } from 'react'
import './App.css'

import  responseMovies from "./mocks/results.json"

import ListOfMovies from './components/movies'
import useMovies from './hooks/movies'
import useSearch from './hooks/useSearch'
import UrlFetch from './hooks/url'
import useUrlFetch from './hooks/url'

function App() {

const [query,setQuery]=useState("")
const {moviesU}=useUrlFetch({query})
const {mapMoviesList}=useMovies({moviesU}) 
const {error,isFirstinput} = useSearch({query})
const [diferentQuery,setDiferentQuery] = useState("")

function handleSumit(event){
event.preventDefault()
const data = document.getElementById('inputMovies').value
//if(query==data)return
if(data==diferentQuery){
  window.alert("mismo query")
  return
}
setDiferentQuery(query)
window.alert("es diferente query")
}

function handleChange(event){
  const newQuery = event.target.value
  if(newQuery.startsWith(" "))return
  if(query==newQuery)return
  setQuery(newQuery)
}

  return (
    <>
  <div className='page'>
    <header>
      <form className='form-css' onSubmit={handleSumit}>
        <input value={query} id="inputMovies" onChange={handleChange} type='text' placeholder='Movies'/>
        <button type='submit'>Buscar</button>
      </form>
      {query&&<p style={{color:"#9E332B"}}> {error}</p>}
    </header>
    <main>
      <ListOfMovies movies={mapMoviesList}  />
    </main>
</div>
    </>
  )
}

export default App
