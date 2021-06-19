//MODULE IMPORTS
import React, { Component } from 'react'
//COMPONENT IMPORTS
import HamburguerIcon from './HamburguerIcon'
import OverlayMenu from './OverlayMenu'



//MAIN COMPONENET
const MobileMenu = () => {
    return(
        <>
            <HamburguerIcon />
            <OverlayMenu />
        </>
    )
}

//MAIN EXPORT
export default MobileMenu


//PARENT COMPONENT -> LeftHeader

//CHILD COMPONENTS -> HamburguerIcon
//                 -> OverlayMenu