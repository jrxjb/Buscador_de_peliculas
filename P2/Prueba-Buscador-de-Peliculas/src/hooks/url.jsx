import { useEffect,useState } from "react"
export default function useUrlFetch({query}){
const [moviesU,setMoviesU] = useState([])
const key ='4878b64e'
const url = `https://www.omdbapi.com/?s=${query}&apikey=${key}`
//const movies = responseMovies.Search


useEffect(()=>{
  const id = setInterval(()=>{ 
    //window.alert("se acabo el tiempo")
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    setMoviesU(data.Search)
  })  
  },3000)
  return () => clearInterval(id)

},[query])

return {moviesU}
}

