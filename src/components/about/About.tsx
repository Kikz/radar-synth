//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'

//STYLES
const AboutContainer$tyle = styled.div`
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: calc(100vh - 140px);
    align-content: center;
`
const AboutContent$tyle = styled.div`
    grid-column-start: 9;
    grid-column-end: 24;
    h2{
        font-family: 'GTAmerica-Regular';
        font-weight: 300;
        font-size: 30px;
        color: #05668D;
        padding: 0;
        margin: 0;
        margin-top: 12.8571429vh;
    }
`
const AboutText$tyle = styled.div`
    width: 85.1851852%;
    margin: 0 auto;
    font-family: 'GTAmerica-Regular';
    font-size: 15px;
    line-height: 21px;
    p:first-child{
        margin-top: 5vh;
    }
    p{
        margin: 0;
        margin-bottom: 3vh;
    }
`



//MAIN COMPONENT
export default class About extends Component {
  render() {
    return (
        <AboutContainer$tyle>
            <AboutContent$tyle>
            <h2>A Little Bit About Radar Synths</h2>
            <AboutText$tyle>
                <p>Radar Synths is a electronic instruments rental based in Barcelona. We believe in trying before buying so we want to facilite producers with music gear. We hope this gives you the chance to affordably test instruments and see if they are the right pick for you and have the sound you were looking for. </p>
                <p>Regards X</p>
                {/*<p>🌹</p>*/}
                <br/>
                <p>P.S. Not all of our instruments are available yet. We are gathering info to see if there is enough demand to include it in our stock. We really appreciate your feedback and support. 🌹</p>
            </AboutText$tyle>
            </AboutContent$tyle>
        </AboutContainer$tyle>
    )
  }
}
