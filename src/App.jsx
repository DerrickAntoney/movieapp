import { useState, useEffect } from 'react'
import './App.css'
//a89e7461

const API_URL = 'https://www.omdbapi.com?apikey=a89e7461';

function App() {
  const [count, setCount] = useState(0)

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data.Search)
  }

  useEffect(()=>{
    searchMovies('Spiderman');

  },[]);

  return (
    <div className='app'>
      <h1>FlixMovie</h1>
      <div className='search'>
        <input 
        placeholder='Search for a movie'
        type='text' 
        value='Superman'
        onChange={()=> {}}
        />
        <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      <div className='container'>

      </div>
    </div>
  )
}

export default App
