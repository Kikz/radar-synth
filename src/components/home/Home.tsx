//MODULE IMPORTS
import React, { Component } from 'react'
//COMPONENT IMPORTS
import HomeSection from './HomeSection'
//IMAGE IMPORTS
// import korgMinilogueIllustration from '../../img/korgMinilogueIllustration.png'
// import akaiMPCliveIllustration from '../../img/akaiMPCliveIllustration.png'
// import elektronAnalogIllustration from '../../img/elektronAnalogIllustration.png'


//MAIN COMPONENT
export default class Home extends Component{
    render() {
        return (
            <>
                <HomeSection
                    sectionLink="/all"
                    sectionStyle="allSection"
                    sectionTitle="All"
                />
                <HomeSection
                    sectionLink="/synths"
                    sectionStyle="synthSection"
                    sectionTitle="Synthesizers"
                    // sectionSrc={korgMinilogueIllustration}
                    // sectionAlt="Korg Minilogue Illustration"
                />
                <HomeSection
                    sectionLink="/samplers"
                    sectionStyle="samplerSection"
                    sectionTitle="Samplers"
                    // sectionSrc={akaiMPCliveIllustration}
                    // sectionAlt="Akai MPC Live Illustration"
                />
                <HomeSection
                    sectionLink="/drummachines"
                    sectionStyle="drumSection"
                    sectionTitle="Drum Machines"
                    // sectionSrc={elektronAnalogIllustration}
                    // sectionAlt="Elektron Analog Rytm Illustration"
                /> 
            </>
        )
    }
}


//PARENT COMPONENT -> App

//CHILD COMPONENTS -> HomeSection