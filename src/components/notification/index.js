import React from "react";
import {
    Container,
    MessageDiv,
    Message,
    Button
} from "./styles/notification"

export default function Notification({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Notification.MessageDiv = function NotificationMessageDiv({children, ...restProps}) {
    return <MessageDiv {...restProps}>{children}</MessageDiv>
}

Notification.Message = function NotificationMessage({children}) {
    return <Message>{children}</Message>
}

Notification.Button = function NotificationButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}