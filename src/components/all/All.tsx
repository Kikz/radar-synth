//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
//COMPONENT IMPORTS
import CatalogueSubheader from '../shared/CatalogueSubheader'
import InstrumentCard from '../shared/InstrumentCard'
//DATABASE IMPORTS
import { SORTED_INSTRUMENTS_DB } from '../../databases/instruments'
//STYLE IMPORTS -> APP
import { CatalogueContainer$tyle, CatalogueContentContainer$tyle, CatalogueContent$tyle } from '../../App'

const SuggestionsContainer$tyle = styled.div`
    position: fixed;
    height: 140px;
    width: 100%;
    bottom: -140px;;
    background: #05668D;
`

//MAIN COMPONENT
export default class All extends Component {

    render() {
        return(
            <CatalogueContainer$tyle>

               <CatalogueSubheader catalogueSubheaderStyle="allHeader" catalogueSubheaderTitle="All" />
                
                <CatalogueContentContainer$tyle>
                    <CatalogueContent$tyle>
                       {SORTED_INSTRUMENTS_DB
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
                {/*<SuggestionsContainer$tyle> </SuggestionsContainer$tyle>*/}
            </CatalogueContainer$tyle>
        )
    }
} 

//PARENT COMPONENTS -> App
//PARENT STYLES     -> CatalogueContainer$tyle

//CHILD COMPONENTS -> CatalogueSubheader
//                 -> InstrumentCard