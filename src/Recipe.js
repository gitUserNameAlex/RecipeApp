import React from 'react';
import './Recipe.css';

export const Recipe = ({title, calories, ingredients, image}) => {
    return (
        <div className="recipe-container">
            {/* dish title */}
            <h1>{ title }</h1>

            {/* calories amount */}
            <p>Calories: { calories }</p>

            {/* ingredients amount */}
            <ul className="ingredients-list">
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                )) }
            </ul>

            {/* pic */}
            <img src={ image } alt="" />

            <hr></hr>
        </div>
    )
}