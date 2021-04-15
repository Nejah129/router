import React from 'react'
import { Link } from 'react-router-dom'

const Info = ({movie,match}) => {
  let movies=movie.filter((el)=>el.name===match.params.name)
  return (
    <div>
      <h1>{movies.name}</h1>
      <h3>{movies.desc}</h3>
      <button><Link to='/'>return home</Link></button>
    </div>
  )
}

export default Info
