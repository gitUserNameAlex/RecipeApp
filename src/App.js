import React, { useEffect, useState } from 'react';
import { Recipe } from './Recipe'
import './App.css';
import { APP_ID, APP_KEY } from './API';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [dishes, setDishes] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes()
  }, [query]);
  
  const getRecipes = async () => {
    const responce = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const result = await responce.json();
    setRecipes(result.hits);
    console.log(result.hits)
  }

  const updateDishes = event => {
    setDishes(event.target.value)
    console.log(dishes)
  }

  const getDishes = (event) => {
    event.preventDefault();
    setQuery(dishes);
    setDishes('');
  }

  return (
    <div className="App">

      <form className="search-form" onSubmit={ getDishes }>
        <input type="text" className="search-form__input" 
        value={ dishes }  
        onChange={ updateDishes } 
        />
        <button type="submit" className="search-form__btn" onClick={ setQuery }>Search</button>
      </form>

      { recipes.map(recipe => (
        <Recipe
        title={ recipe.recipe.label }
        calories={ recipe.recipe.calories }
        ingredients={ recipe.recipe.ingredients}
        image={ recipe.recipe.image }
        key={ recipe.recipe.label }
        />
      )) }

    </div>
  );
}

export default App;