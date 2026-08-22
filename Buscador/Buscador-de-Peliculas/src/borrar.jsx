   {
        hasMovies
        ?(
        <ul>
          {
          movies.map(movie => (
            <li key={movie.imdbID}>
             <h3>{movie.Title}</h3>
             <p>{movie.Year}</p>
             <img src={movie.Poster} alt=""/>
            </li>
          ))
          }
        </ul>
     ): (
      <p>No hay resultados</p>
     ) 
    }

    {
        variable?
        ()
        :
        ()

    }

    map
    (
        <ul>
          {
          movies.map(movie => ())
          }
        </ul>
     )


    lista

            <li key={movie.imdbID}>
             <h3>{movie.Title}</h3>
             <p>{movie.Year}</p>
             <img src={movie.Poster} alt=""/>
            </li>