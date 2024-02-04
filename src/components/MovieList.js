import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,mov}) => {

  return (
    <div className='px-6'>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
<div className='flex no-scrollbar overflow-x-scroll  '>

<div className='flex  '>
    {mov?.map((movie)=>(<MovieCard key={movie.id}  posterpath={movie.poster_path}/>))}

</div>

</div>

    </div>
  )
}

export default MovieList