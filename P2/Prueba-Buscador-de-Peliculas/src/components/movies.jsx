import  responseMovies from "../mocks/results.json"
import '../App.css'
export default function ListOfMovies({movies}){
const hasMovies = movies?.length > 0
return <>
  {
        hasMovies
        ?(
        <ul className="movies-class" >
          {
          movies.map(movie => (
            <li className="movie" key={movie.id}>
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