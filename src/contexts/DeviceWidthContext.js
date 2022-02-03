import React, { useContext } from 'react'
import { useMediaQuery } from 'react-responsive'

export const DeviceWidthContext = React.createContext()

export function DeviceWidthProvider({children}) {
    const isLargeDevice = useMediaQuery({query: "(min-width: 945px)"})
    const isMediumDevice = useMediaQuery({query: "(min-width: 610px)"})

    return (
        <DeviceWidthContext.Provider value={{isLargeDevice, isMediumDevice}}>
            {children}
        </DeviceWidthContext.Provider>
    )
}

export function useDeviceWidthContext() {
    return useContext(DeviceWidthContext)
}
