//MODULE IMPORTS
import React, { Component } from 'react'


//TYPESCRIPT
interface InstrumentCardProps {
    catalogueCardHeading: string,
    cardImageId: string,
    cardImageSrc: string,
    cardImageAlt: string,
    pricePerWeek: string ,
    pricePerDay: string,
    buttonStyle: string,
    buttonHref: string,
}


//MAIN COMPONENT
export default class InstrumentCard extends Component<InstrumentCardProps> {
  render() {
    return (
        <div className="offersContentCard">
            <h2>{this.props.catalogueCardHeading}</h2>
            <div className="cardImageCointainer">
                <img id={this.props.cardImageId} src={this.props.cardImageSrc} alt={this.props.cardImageAlt} />
            </div>
            <div className="cardLine"></div>
            <p className="leftText">
                Price Per Week <br/>
                Price Per Day
            </p>
            <p className="rightText">
                {this.props.pricePerWeek}<br/>
                {this.props.pricePerDay}
            </p>
            <a className={this.props.buttonStyle} href={this.props.buttonHref}>View</a>
        </div>
    )
  }
}

//PARENT COMPONENTS -> All
//                  -> Synths
//                  -> Drum Machines
//                  -> Samplers