//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
//COMPONENT IMPORTS
import MobileMenu from './MobileMenu'
//IMAGE IMPORTS
import radarLogo from '../../../../img/radarLogo.png'

//STYLES
const LeftHeaderContainer$tyle = styled.div`
    position: relative;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;

    @media (max-width: 910px), screen and (orientation: portrait){
        position: fixed;
        display: block;
        width: 100vw;
        height: 60px;
        z-index: 100;
        box-shadow: 0px 3px 12px 0px rgba(0,0,0,0.03);
    }

`
const LeftHeaderBackground$tyle = styled.div`
    width: 100%;
    height: 100%;
    background: #FAFCFF;

    img {
        position: fixed;
        top: 10px;
        @media (max-width: 910px), screen and (orientation: portrait) {
            position: absolute;
            overflow: hidden;
            display: inline-block;
            margin: 0px 0 0 8px;
            clip: rect(0px,60px,60px,0px);
        }   
    }

    a {
        position: fixed;
        text-decoration: none;
        bottom: 43%;
        left: -46px;
        color: #000;
        @media (max-width: 910px), screen and (orientation: portrait) {
            position: static;
        }
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
        @media (max-width: 910px), screen and (orientation: portrait) {
            margin: 0 80px;
            width: auto;
            display: block;
            font-size: 18px;
            line-height: 60px;
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -o-transform: rotate(0deg);
        }
    }  
          
`    


//MAIN COMPONENT
export default class LeftHeader extends Component {
    render() {
        return(
            <LeftHeaderContainer$tyle>
                <LeftHeaderBackground$tyle>

                    <img src={radarLogo} alt="#" />
                    
                    <Link to="/">
                        <h1>Radar Synths</h1>
                    </Link>

                    {/* <MobileMenu/> */}

                </LeftHeaderBackground$tyle>
            </LeftHeaderContainer$tyle>
        )
    }
}


// PARENT COMPONENT -> App

//CHILD COMPONENTS -> MobileMenu -> HamburguerIcon
//                               -> OverlayMenu
