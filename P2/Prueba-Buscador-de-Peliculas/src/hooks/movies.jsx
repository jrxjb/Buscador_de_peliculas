export default function useMovies({movies}){
   const mapMoviesList=movies?.map( movie=>(
    {
  id: movie.imdbID,
  title: movie.Title,
  year: movie.Year,
  poster: movie.Poster
        
    }

  )
  )
  return {mapMoviesList}
}