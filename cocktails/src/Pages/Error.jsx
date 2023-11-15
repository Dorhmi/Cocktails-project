import React from "react";
import { Link } from "react-router-dom";



export default function Error () {
    return (
        <div className="section error-section">
            <h1 className="title">oops! it's a dead end</h1>
            <Link className="btn-primary" to={'/'}>Back Home</Link>
        </div>
    )
}