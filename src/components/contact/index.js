import React from 'react'

import {
    Subtitle,
    Details,
} from './styles/contact'


export function ContactSubtitle({children}) {
    return <Subtitle>{children}</Subtitle>
}

export function ContactDetails({children}) {
    return <Details>{children}</Details>
}