export default function useMovies({moviesU}){
   const mapMoviesList=moviesU?.map( movie=>(
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