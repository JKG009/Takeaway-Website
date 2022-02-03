import React, { useState, useContext } from "react";

export const NotificationContext = React.createContext()

export function NotificationContextProvider({children}) {
    const [showNotification, setShowNotification] = useState(true)

    return (
        <NotificationContext.Provider
            value={{showNotification, setShowNotification}}
        >
            {children}
        </NotificationContext.Provider>
    )
}

export function useNotificationContext() {
    return useContext(NotificationContext)
}
