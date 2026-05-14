import  responseMovies from "../mocks/results.json"
  
export default function ListOfMovies({movies}){
const hasMovies = movies?.length > 0
return <>
  {
        hasMovies
        ?(
        <ul>
          {
          movies.map(movie => (
            <li key={movie.id}>
             <h3>{movie.title}</h3>
             <p>{movie.year}</p>
             <img src={movie.poster} alt={movie.Titles}/>
            </li>
          ))
          }
        </ul>
     ): (
      <p>No hay resultados</p>
     ) 
    }
</>
     }