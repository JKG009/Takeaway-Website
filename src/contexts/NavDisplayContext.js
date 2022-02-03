import React, { useState, useContext } from "react";

export const NavDisplayContext = React.createContext()

export function NavDisplayProvider({children}) {
    const [navShow, setNavShow] = useState(false)

    return (
        <NavDisplayContext.Provider
            value={{navShow, setNavShow}}
        >
            {children}
        </NavDisplayContext.Provider>
    )
}

export function useNavDisplayContext() {
    return useContext(NavDisplayContext)
}