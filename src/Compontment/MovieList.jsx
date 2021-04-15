import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({films}) => {
    return (
        <div >
          {films.map((movie)=>(<MovieCard moviecard={movie}/>))
            }
          
        </div>
    )
}

export default MovieList
