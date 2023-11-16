import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../Context";


export default function SearchBox () {
    const {setValue} = useGlobalContext();
    const searchValue = useRef('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    

    useEffect(()=>{
        searchValue.current.focus();
    } , [])

    return (
        <section className="search-section">
            <form className="search-container" onSubmit={handleSubmit}>
                <h4  className="search-title">search your favorite cocktail</h4>
                <input className="search-input" onChange={(e)=>{setValue(e.target.value)}} type="text"  ref={searchValue} />
            </form>
        </section>
    )
}