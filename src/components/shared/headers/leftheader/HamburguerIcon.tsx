//MODULE IMPORTS
import React from 'react'
import styled from 'styled-components'



//STYLES
const HamburguerIconContainer = styled.div`
    display: none;
	position: absolute;
	width: 50px;
	height: 50px;
    right: 15px;
    top: 5px;
    cursor: pointer;
    z-index: 200;
    @media (max-width: 910px), screen and (orientation: portrait) {
        display: block;
    }
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



//MAIN COMPONENT
const HamburguerIcon = () => (
    <HamburguerIconContainer id="trigger-overlay">
        <TopLine></TopLine>
        <MiddleLine></MiddleLine>
        <BottomLine></BottomLine>
    </HamburguerIconContainer>
)

//EXPORTS
export default HamburguerIcon