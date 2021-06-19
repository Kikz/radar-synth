//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'

//STYLES
//--HamburguerMenu
const HamburguerMenuContainer = styled.div`
    display: none;
	position: absolute;
	width: 50px;
	height: 50px;
    right: 15px;
    top: 5px;
    cursor: pointer;
    z-index: 200;
`
const Line = styled.div`
    width: 30px;
	height: 2px;
	background: black;
`
const TopLine = styled(Line)`
    position: absolute;
    left: 10px;
    top: 15px;
`
const MiddleLine = styled(Line)`
    position: absolute;
	left: 10px;
	top: 24px;
`
const BottomLine = styled(Line)`
    position: absolute;
	left: 10px;
	bottom: 15px;
`
//--RevealMenu
const OverlayMenu = styled.div`
    position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: red;
`


//MAIN COMPONENET
const MobileMenu = () => {
    return(
        <>
            <HamburguerMenu />
            <RevealMenu />
        </>
    )
}


//CHILD COMPONENTS
const HamburguerMenu = () => (
    <HamburguerMenuContainer id="trigger-overlay">
        <TopLine></TopLine>
        <MiddleLine></MiddleLine>
        <BottomLine></BottomLine>
    </HamburguerMenuContainer>
)

const RevealMenu = () => (
    <OverlayMenu className="overlay-contentpush">
        <button className="overlay-close">Close</button>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="all.html">All</a></li>
                <li><a href="synths.html">Synthesizers</a></li>
                <li><a href="samplers.html">Samplers</a></li>
                <li><a href="drummachines.html">Drum Machines</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </OverlayMenu>
)


//MAIN EXPORT
export default MobileMenu

//PARENT COMPONENT -> LeftHeader