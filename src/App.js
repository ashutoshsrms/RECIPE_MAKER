import {React, useEffect, useState} from 'react'
import Recipe from './recipe'
import './App.css'

const App = ()=>{
  const app_id="18802181"
  const app_key="10e9c4fc53998bfee33d1fba3551b353"

  const[query,setQuery]=useState('paneer')
  const[search,setSearch]=useState('')
  const[recipes,setRecipes]=useState([])
  console.log(query)


  useEffect(()=>{
    getRecipes()
  },[query]);

  const getRecipes = async()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`)
    const data=await response.json()
    //console.log(recipes)
    setRecipes(data.hits)
  }

  const getSearch= e =>{
    e.preventDefault()
    console.log("testing")
    setQuery(search)
    setSearch("")
    //getRecipes()
  }
  return(
    
    <div className='App'>
      <form className='search-form' onSubmit={getSearch}>
        <input type="text" className='search-bar' value={search} onChange={e=>setSearch(e.target.value)}/>
        <button type='submit' className='search-button'>Search</button>
      </form>  

      <div className='recipes'> 
        {recipes.map(recipe=>(
         //console.log(recipe.recipe.label)
         <Recipe 
           title={recipe.recipe.label}
           key={recipe.recipe.label}
           calories={recipe.recipe.calories}
           image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredients}
         />
        ))}

      </div>
    </div>
  )
}

export default App