import { useState, useEffect } from 'react'

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
    <div>
      App
    </div>
  )
}

export default App
