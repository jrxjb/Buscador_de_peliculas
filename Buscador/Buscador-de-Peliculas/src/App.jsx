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
//const isHandleSumit=useRef(false)
const [searchQuery,setSearchQuery] = useState("")
const [sort,setSort] = useState(false)
const {moviesU}=useUrlFetch({searchQuery})

const {mapMoviesList}=useMovies({moviesU,sort}) 
const {error,isFirstinput} = useSearch({query})
const [diferentQuery,setDiferentQuery] = useState("")



function handleSort(){
  setSort(!sort)
}

function handleSumit(event){
event.preventDefault()
const data = document.getElementById('inputMovies').value
//if(query==data)return
if(data==diferentQuery){
  //window.alert("mismo query")
  return
}
else{
setQuery(data)
setDiferentQuery(query)
setSearchQuery(data)
//window.alert("es diferente query")
}
}

useEffect(()=>{
setDiferentQuery(query)

},[moviesU])


function handleChange(event){
  const newQuery = event.target.value
  if(newQuery.startsWith(" "))return
  if(query==newQuery)return
  setQuery(newQuery)
const id = setTimeout(()=>{
  if(searchQuery==newQuery)return 
    setSearchQuery(newQuery)
  }  
  ,1000)
  return () => clearTimeout(id)
  


}









  return (
    <>
  <div className='page'>
    <header>
      <form className='form-css' onSubmit={handleSumit}>
        <input value={query} id="inputMovies" onChange={handleChange} type='text' placeholder='Movies'/>
        <input type="checkbox" onChange={handleSort} checked={sort} />
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
