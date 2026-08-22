import { useMemo } from "react"
export default function useMovies({moviesU,sort}){
   const mapMoviesList=moviesU?.map( movie=>(
    {
  id: movie.imdbID,
  title: movie.Title,
  year: movie.Year,
  poster: movie.Poster
    }

  )
  )

  const sortedMovies = useMemo(()=>{
    return sort
?[...mapMoviesList].sort((a,b)=>a.title.localeCompare(b.title)):mapMoviesList
  },[moviesU,sort])
  return {mapMoviesList:sortedMovies}
}

