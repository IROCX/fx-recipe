import React from 'react'

import style from './recipe.module.css'


const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <div className={style.title} >{title.substring(0, 50)}</div>
            <div className={style.calorie}><span>Calories :</span> {Math.round(calories)}</div>
            <img className={style.image} src={image} alt="" />
            <ol className={style.ingredients}>
                <p className={style.ingredientsTitle}>Ingredients</p>
                {ingredients.map((value) => (
                    <li>{value.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe
