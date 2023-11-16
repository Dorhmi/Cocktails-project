import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "./Loading";
import CocktailArticle from "./CocktailArticle";

export default function CocktailsList () {
    const {loading , items} = useGlobalContext();

    if (loading) {
        return <Loading/>
    }

    if (items.length === 0) {
        return <h2 className="title">no cocktails matched your search criteria</h2>
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