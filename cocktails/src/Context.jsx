import React, { useContext, useEffect, useState } from "react";


export const AppContext = React.createContext();

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


export default function AppProvider ({children}) {
    const [loading , setLoading] = useState(true)
    const [items , setItems] = useState([])

    const fetchItems = async () => {
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        setItems(data.drinks)
        setLoading(false)
    }

    useEffect(()=>{
        fetchItems()
    } , [])


    return (
        <AppContext.Provider value={{
            loading,
            items,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}