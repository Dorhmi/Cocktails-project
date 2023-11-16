import React from "react";
import spinner from '../assets/Spinner.gif'


export default function Loading () {
    return (
        <div className="loading">
            <h1 className="title">Cocktails</h1>
            <img className="loading-logo" src={spinner} alt="loading" />
        </div>
    )
}