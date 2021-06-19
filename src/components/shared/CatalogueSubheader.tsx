//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'


//TYPESCRIPT
interface CatalogueSubheaderProps {
    catalogueSubheaderStyle: string,
    catalogueSubheaderTitle: string,
}

//STYLES
const CatalogueSubheaderTitle$tyle = styled.div`
    {/* Same as titleSection but with different top */}
    position: absolute;
    {/*top: 20%;*/}
    top: 30%;
    left: 35px;
    font-size: 2.1vw;
    font-family: 'GTAmerica-Regular';
    font-weight: 300;
    line-height: 40px;
    color: #FAFCFF;
    @media (max-width: 910px), screen and (orientation: portrait) {
        {/* Same as titleSection but with different top */}
        position: static;
        padding-top: 6.8vh;
        padding-top: 6.8vh;
        padding-left: 35px;
        font-size: 24px;
        margin: 0;
    }
`
const CatalogueSubheaderLine$tyle = styled.div`
    position: absolute;
    width: 21.88%;
    height: 1px;
    background: #FAFCFF;
    top: calc(20% + 2.1vw + 22px + 11px);
    left: 20px;
    @media (max-width: 910px), screen and (orientation: portrait) {
        position: static;
        width: 250px;
        margin-top: 5px;
        margin-left: 20px;
    }
`
const FormSubheader$tyle = styled.form`
    div{
        position: absolute;
        right: 50px;
        top: 44px;
        height: 50px;
        width: 327px;
        background: rgba(255,255,255,0.25);
        input{
            background: transparent;
            width: calc(327px - 40px);
            border: 0;
            padding: 14px 20px;
            font-size: 20px;
            color: white;
            outline: none;
            ::placeholder{
                color: white;
                opacity: 0.66;
            }
        }
    }    
`

//MAIN COMPONENT
export default class CatalogueSubheader extends Component<CatalogueSubheaderProps> {
  render() {
    return (
        <div className={`offersHeader ${this.props.catalogueSubheaderStyle}`} >
            <CatalogueSubheaderTitle$tyle>{this.props.catalogueSubheaderTitle}</CatalogueSubheaderTitle$tyle>
            <CatalogueSubheaderLine$tyle />
            <FormSubheader$tyle>
                <div>
                    <input type="text" placeholder="Search"/>
                </div>
            </FormSubheader$tyle>
        </div>
    )
  }
}


//PARENT COMPONENTS -> All
//                  -> Synths
//                  -> Drum Machines
//                  -> Samplers
