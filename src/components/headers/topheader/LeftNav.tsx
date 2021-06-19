//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
//COMPONENT IMPORTS
import LeftNavLink from './LeftNavLink';



//STYLES
const LeftNavContainer = styled.nav`
    ul {
        position: fixed;
        list-style: none;
        text-transform: uppercase;
        margin: 0;
        top: 25px;
        left: calc(60px + 30px);
        padding: 0;
        z-index: 100;
    }
`



//MAIN COMPONENT
export default class LeftNav extends Component {

    render() {
        return (
            <LeftNavContainer>
                <ul>
                    <LeftNavLink leftNavHref="#" leftNavTab="About Us"/>
                    <LeftNavLink leftNavHref="all.html" leftNavTab="All"/>
                    <LeftNavLink leftNavHref="synths.html" leftNavTab="Synthesizers"/>
                    <LeftNavLink leftNavHref="samplers.html" leftNavTab="Samplers"/>
                    <LeftNavLink leftNavHref="drummachines.html" leftNavTab="Drum Machines"/>
                    <LeftNavLink leftNavHref="#" leftNavTab="Contact"/>
                </ul>
            </LeftNavContainer>
        )
    }
}



// PARENT COMPONENT -> TopHeader

// CHILD COMPONENTS -> LeftNavLink