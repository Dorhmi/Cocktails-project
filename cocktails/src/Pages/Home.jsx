import React from "react";
import SearchBox from "../Components/SearchBox";
import CocktailsList from "../Components/CocktailsList";



export default function Home () {
    return (
        <div className="home-section">
            <SearchBox/>
            <CocktailsList/>
        </div>
    )
}