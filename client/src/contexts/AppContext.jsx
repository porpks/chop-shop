/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const AppContext = React.createContext();

function AppContextProvider(props) {
    const apiEndpoint = "http://localhost:3000"
    const [cart, setCart] = useState([])

    const hadleStars = (rating) => {
        let stars = []
        for (let i = 0; i < 5; i++) {
            if (rating >= 1) {
                stars.push("fa-solid fa-star")
                rating -= 1
            }
            else if (rating >= 0.5) {
                stars.push("fa-solid fa-star-half-stroke")
                rating -= 0.5
            }
            else {
                stars.push("fa-regular fa-star")
            }
        }
        return stars
    }

    return (
        <AppContext.Provider
            value={{
                apiEndpoint,
                cart,
                setCart,
                hadleStars,
            }}>
            {props.children}
        </AppContext.Provider>
    )
}
const context = () => React.useContext(AppContext);

export { AppContextProvider, context };