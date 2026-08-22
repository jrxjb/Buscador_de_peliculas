import { useEffect,useRef,useState } from "react"
export default function useUrlFetch({searchQuery,isHandleSumit}){
const [moviesU,setMoviesU] = useState([])
const key ='4878b64e'
const url = `https://www.omdbapi.com/?s=${searchQuery}&apikey=${key}`
//const movies = responseMovies.Search
const isSameSeach=useRef("")
//const isHandleSumit=useRef(false)

useEffect(()=>{
 if(isSameSeach.current==searchQuery)return
 isSameSeach==searchQuery
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    setMoviesU(data.Search)
  })

},[searchQuery])

return {moviesU}
}

