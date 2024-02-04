import React from 'react'
import { Image_CDN } from '../utils/constants'
const MovieCard = ({posterpath}) => {
  return (
    <div className='w-48 pr-4'> 
        <img alt='movie logo ' src= {Image_CDN+posterpath}/>
    </div>
  )
}

export default MovieCard