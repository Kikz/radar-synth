//MODULE IMPORTS
import React from 'react'
import styled from 'styled-components'
//IMAGE IMPORTS


//STYLES
const OverlayMenuContainer = styled.div`
    position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: black;

    nav{
        text-align: center;
        position: relative;
        top: 50%;
        height: 60%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);

        ul {
            list-style: none;
            padding: 0;
            margin: 0 auto;
            display: inline-block;
            height: 100%;
            position: relative;

            li{
                display: block;
                height: 20%;
                height: calc(100% / 7);
                min-height: 50px;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;

                a{
                    font-size: 28px;
                    font-weight: 300;
                    display: block;
                    color: #fff;
                    -webkit-transition: color 0.2s;
                    transition: color 0.2s;

                    &:hover {
                        color: #f0f0f0;
                    }
                    &:focus {
                        color: #f0f0f0;
                    }
                }
            }
        }
    }
`
const OverlayCloseIcon = styled.button`
    width: 50px;
	height: 50px;
	position: absolute;
	right: 15px;
	top: 5px;
	overflow: hidden;
	border: none;
	background: url(../../../img/cross.png) ; {/*no-repeat center center*/}
	text-indent: 200%;
	/* color: transparent; */
	outline: none;
	z-index: 300;
`


//MAIN COMPONENT
const OverlayMenu = () => (
    <OverlayMenuContainer>
        <OverlayCloseIcon />
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
    </OverlayMenuContainer>
)

//EXPORTS
export default OverlayMenu