import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';


import Recipe from './Components/Recipe'

const App = () => {

  //auth stuff for api
  //api.edamam.com
  const APP_ID = `your api id`;
  const APP_KEY = `your api key`;


  // const [counter, setCounter] = useState(0)

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('pasta')

  const example_request = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10`;


  const updateSearch = (event) => {
    setSearch(event.target.value)
    // console.log(search)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(example_request)
    const data = await response.json()
    console.log(data)
    setRecipes(data.hits)

  }
  // 47@K& DG~vGvkDh8
  return (
    <div className='App'>
      <Nav/>
      <div className='main'>
      </div>
        <form onSubmit={getSearch} action="" className='search-form'>
          <input type="text" className='search-bar' value={search} onChange={updateSearch} placeholder='Search something delicious!' />
          <button className='search-button' type='submit'>Search</button>
        </form>
        {/* <button onClick={() => setCounter(counter + 1)} className='search-button'>Search {counter}</button> */}
        <div className='recipes'>

          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              calories={recipe.recipe.calories}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients} />

          ))}
        
      </div>
     
    </div>
  );
}

export default App;
