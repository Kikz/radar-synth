//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
//COMPONENT IMPORTS
import LeftNav from './LeftNav'
import RightNav from './RightNav'



//STYLES
const TopHeaderContainer = styled.div`
    position: relative;
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;

    @media (max-width: 910px), screen and (orientation: portrait) {
        display: none;
    }
    
    ul{
        a{
            position: relative;
            display: inline-block;
            padding: 10px;
            margin: 0 5px;
            text-decoration: none;
            li{
                font-size: 12px;
                color: #FAFCFF;
                opacity: 0.75;
            }
        }
    }

`
const TopHeaderBackground = styled.div`
    position: fixed;
    width: 100%;
    height: 140px;
    background: #000;
    z-index: 200;
`



//MAIN COMPONENT
export default class TopHeader extends Component {
  render() {
    return (
        <TopHeaderContainer>
            <TopHeaderBackground>
                <LeftNav />
                <RightNav />
            </TopHeaderBackground>
        </TopHeaderContainer>
    )
  }
}



// PARENT COMPONENT -> App

// CHILD COMPONENTS -> LeftNav
//                  -> RightNav -> SignUpButton
//                              -> LoginButton