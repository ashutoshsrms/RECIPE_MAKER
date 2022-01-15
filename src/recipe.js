import React from 'react'
import Styles from './recipe.module.css'


const Recipe= props=>{

    return(
        <div className={Styles.recipe}>
            <h1>
                {props.title}
            </h1>
            <ol>
                {props.ingredients.map(ingredients=>
                    <li>
                        {ingredients.text}
                    </li>)}
            </ol>
            <p>
                {props.calories}
            </p>
            <img src={props.image} alt="#" className={Styles.image}/>

        </div>
    )
}

export default Recipe