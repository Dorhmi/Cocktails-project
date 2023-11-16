import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "./Loading";
import CocktailArticle from "./CocktailArticle";

export default function CocktailsList () {
    const {loading , items} = useGlobalContext();
    console.log(items);

    if (loading) {
        return <Loading/>
    }
    return (
        <section className="list-container">
            <h1 className="title">Cocktails</h1>
            <div className="articles-container">
                {items.map((item) => {
                    const {idDrink,strAlcoholic,strDrink,strDrinkThumb,strGlass} = item
                    return <CocktailArticle key={idDrink} {...item}/>
                })}
            </div>
        </section>
    )
}