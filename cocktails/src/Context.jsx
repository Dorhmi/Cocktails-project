import React, { useContext, useEffect, useState } from "react";


export const AppContext = React.createContext();

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


export default function AppProvider ({children}) {
    const [loading , setLoading] = useState(true)
    const [items , setItems] = useState([])
    const [value , setValue] = useState('a')


    const fetchItems = async () => {
        setLoading(true)
        const response = await fetch(`${url}${value}`)
        const data = await response.json()
        if (data.drinks) {
            setItems(data.drinks)
        } else {
            setItems([])
        }
        setLoading(false)
    }

    useEffect(()=>{
        fetchItems()
    } , [value])


    return (
        <AppContext.Provider value={{
            loading,
            items,
            setValue,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}