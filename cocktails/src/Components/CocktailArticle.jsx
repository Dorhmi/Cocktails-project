import React from "react";
import { Link } from "react-router-dom";



export default function CocktailArticle ({
    idDrink,
    strAlcoholic,
    strDrink,
    strDrinkThumb,
    strGlass}) {
    return (
        <div className="article-container">
            <img className="article-img" src={strDrinkThumb} alt={strDrink} />
            <div className="article-content">
                <h2 className="article-title">{strDrink}</h2>
                <h4 className="article-glass">{strGlass}</h4>
                <p className="article-type">{strAlcoholic}</p>
                <Link to={`/cocktail/${idDrink}`} className="btn-primary ">details</Link>
            </div>
        </div>
    )
}