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
                    <LeftNavLink leftNavHref="/about" leftNavTab="About"/>
                    <LeftNavLink leftNavHref="/all" leftNavTab="All"/>
                    <LeftNavLink leftNavHref="/synths" leftNavTab="Synthesizers"/>
                    <LeftNavLink leftNavHref="/samplers" leftNavTab="Samplers"/>
                    <LeftNavLink leftNavHref="/drummachines" leftNavTab="Drum Machines"/>
                    <LeftNavLink leftNavHref="/contact" leftNavTab="Contact"/>
                </ul>
            </LeftNavContainer>
        )
    }
}



// PARENT COMPONENT -> TopHeader

// CHILD COMPONENTS -> LeftNavLink