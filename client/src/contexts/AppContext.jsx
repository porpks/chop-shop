/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const AppContext = React.createContext();

function AppContextProvider(props) {
    const apiEndpoint = "http://localhost:3000"
    const [cart, setCart] = useState([])
    return (
        <AppContext.Provider
            value={{
                apiEndpoint,
                cart,
                setCart,
            }}>
            {props.children}
        </AppContext.Provider>
    )
}
const context = () => React.useContext(AppContext);

export { AppContextProvider, context };