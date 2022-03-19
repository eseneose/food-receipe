import React from 'react';
import style from './recipe.module.css';


const Recipe = ({ title, calories, image, ingredients}) => {

    if (calories => 3000){
        
    }

    return (
      <div className={style.recipe}>
          <h1>{title}</h1>
          <ul style={{listStyle: 'none',}}>
              {ingredients.map(ingredient =>(
                  <li>{ingredient.text} </li>
              ))}
          </ul>
          <p className={style.calories} > Calories: {calories}</p>
          <img className={style.image} src={image} alt=""
          />

      </div>
    );
}

export default Recipe;