import React, { useContext } from "react";


export const AppContext = React.createContext();

export default function AppProvider ({children}) {
    return (
        <AppContext.Provider value={'hello'}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}