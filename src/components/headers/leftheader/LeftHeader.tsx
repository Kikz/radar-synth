//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
//COMPONENT IMPORTS
import MobileMenu from './MobileMenu'
//IMAGE IMPORTS
import radarLogo from '../../../img/radarLogo.png'

//STYLES
const LeftHeaderContainer = styled.div`
    position: relative;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
`
const LeftHeaderBackground = styled.div`
    width: 100%;
    height: 100%;
    background: #FAFCFF;

    img {
        position: fixed;
        top: 10px;
    }

    a {
        position: fixed;
        text-decoration: none;
        bottom: 43%;
        left: -46px;
        color: #000;
    }

    h1 {
        font-family: 'GTAmerica-Regular';
        font-size: 22px;
        font-weight: 300;
        line-height: 26px;
        width: 150px;
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        -o-transform: rotate(-90deg);
        cursor: pointer;
        text-align: center;
    }       
    
`    


//MAIN COMPONENT
export default class LeftHeader extends Component {
    render() {
        return(
            <LeftHeaderContainer>
                <LeftHeaderBackground>

                    <img src={radarLogo} alt="#" />
                    <a href="index.html">
                        <h1>Radar Synth</h1>
                    </a>

                    <MobileMenu/>

                </LeftHeaderBackground>
            </LeftHeaderContainer>
        )
    }
}


// PARENT COMPONENT -> App
