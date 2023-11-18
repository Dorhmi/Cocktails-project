import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from '../Components/Loading';

export default function SingleCocktail() {
// const { loading, setLoading } = useState(false);
const [item, setItem] = useState({});
const { id } = useParams();

useEffect(() => {
    const fetchItem = async () => {

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        if (data.drinks) {
        const {
            strAlcoholic: type,
            strCategory: category,
            strDrink: name,
            strDrinkThumb: image,
            strGlass: glass,
            strInstructions: info,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
        } = data.drinks[0];

        const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
        ];

        const newItem = {
            name,
            image,
            type,
            category,
            glass,
            info,
            ingredients,
        };

        setItem(newItem);
        }
    } catch (error) {
        console.log(error)
    } 
    };

    fetchItem();
    }, [id]);

    // if (loading) {
    // return <Loading />;
    // } 
    if (!item) {
        return <h2>no cocktail</h2>
    } else {
        const {name,image,type,category,glass,info,ingredients} = item
        return (
            <section className="single-section">
                <div className="single-header">
                <Link to={"/"} className="btn-primary">Back Home</Link>
                <h1 className="title">{name}</h1>
                </div>
                <div className="single-content">
                    <img className="single-img" src={image} alt={name} />
                    <div className="single-info">
                        <p className="single-name">
                            <span className="single-span">Name:</span>
                            {name}
                        </p>
                        <p className="single-name">
                            <span className="single-span">category:</span>
                            {category}
                        </p>
                        <p className="single-name">
                            <span className="single-span">type:</span>
                            {type}
                        </p>
                        <p className="single-name">
                            <span className="single-span">glass:</span>
                            {glass}
                        </p>
                        <p className="single-name">
                            <span className="single-span">instructions:</span>
                            {info}
                        </p>
                        <p className="single-name">
                            <span className="single-span">ingredients:</span>
                            {ingredients?.map((item,index)=>{
                                return <span key={index} className="ingrediant">{item} </span>
                            })}
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}