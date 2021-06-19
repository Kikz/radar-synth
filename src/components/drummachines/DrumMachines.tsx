//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
//COMPONENT IMPORTS
import CatalogueSubheader from '../shared/CatalogueSubheader'
import InstrumentCard from '../shared/InstrumentCard'
//DATABASE IMPORTS
import { SORTED_INSTRUMENTS_DB } from '../../databases/instruments'
//STYLE IMPORTS -> App
import { CatalogueContainer$tyle, 
         CatalogueContentContainer$tyle, 
         CatalogueContent$tyle } from '../../App'



//MAIN COMPONENT
export default class DrumMachines extends Component {
    render() {
        return(
            <CatalogueContainer$tyle>

               <CatalogueSubheader catalogueSubheaderStyle="drumMachinesHeader" catalogueSubheaderTitle="Drum Machines" />
                
                <CatalogueContentContainer$tyle>
                    <CatalogueContent$tyle>
                       {SORTED_INSTRUMENTS_DB
                            .filter( instrument => instrument.type === "drum machine" )
                            .map( instrument =>
                                <InstrumentCard
                                    catalogueCardHeading={instrument.name}
                                    cardImageId={instrument.imageId}
                                    cardImageSrc={instrument.imageSrc}
                                    cardImageAlt={instrument.imageAlt}
                                    pricePerWeek= {instrument.pricePerWeek + " €"}
                                    pricePerDay={instrument.pricePerDay + " €"}
                                    buttonStyle={instrument.buttonStyle}
                                    buttonHref={instrument.buttonHref}
                                />
                            )}
                    </CatalogueContent$tyle>
                </CatalogueContentContainer$tyle>
                
            </CatalogueContainer$tyle>
        )
    }
} 

//PARENT COMPONENTS -> App

//CHILD COMPONENTS -> CatalogueSubheader
//                 -> InstrumentCard