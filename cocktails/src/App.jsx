import React from "react";
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import SingleCocktail from "./Pages/SingleCocktail";
import Error from "./Pages/Error";




export default function App () {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Error/>}/>
                <Route path="/cocktail/:id" element={<SingleCocktail/>}/>
            </Routes>
        </Router>
    )
}

