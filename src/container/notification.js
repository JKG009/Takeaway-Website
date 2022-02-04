import React from "react";
import { Notification } from "../components";
import { useNotificationContext } from "../contexts/NotificationContext";

export default function NotificationContainer() {
    const {setShowNotification} = useNotificationContext()

    const handleClick = () => {
        setShowNotification(false)
    }

    const preventClick = (e) => {
        e.stopPropagation()
    }

    return (
        <Notification onClick={handleClick}>
            <Notification.MessageDiv onClick={preventClick}>
                <Notification.Message>Currently closed; Open at 5pm.</Notification.Message>
                <Notification.Button onClick={handleClick}>Got It</Notification.Button>
            </Notification.MessageDiv>
        </Notification>
    )
}