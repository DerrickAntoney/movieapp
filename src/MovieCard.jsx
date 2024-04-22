import React from 'react'

const MovieCard = ({movie1}) => {
  return (
    <div className='movie'>
          <div>
            <p>movie year</p>
          </div>
          <div>
            <img src = 'https://via.placeholder.com/400'alt='movie title'/>
          </div>
          <div>
            <span>Type</span>
            <h3>Movie Title</h3>
          </div>
    </div>
  )
}

export default MovieCard