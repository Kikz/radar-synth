//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
//IMAGE IMPORTS
import arrowLeft from '../../img/arrowLeft.svg';
import arrowRight from '../../img/arrowRight.svg';


//STYLES


//MAIN COMPONENT
export default class Product extends Component<{databaseKey: any}> {
  render() {

    const { databaseKey } = this.props;

    return (
        <div className="productConainer">
        <div className="photoProductContainer">
          <img id={ databaseKey.productImageId } src={ databaseKey.imageSrc } alt="" />
          <a href="#" className="leftButtonSlide"><img src={arrowLeft} alt="Left Arrow" /></a>
          <a href="#" className="rightButtonSlide"><img src={arrowRight} alt="RightArrow" /></a>
        </div>
        <div className="detailsProductContainer">
          <h2>{ databaseKey.name }</h2>
          <div className="dataDetailsProducts">
            <p><span>Type:</span><br/>{ databaseKey.productType }</p>
            <p><span>Polyphony:</span><br/> { databaseKey.productPolyphony }</p>
            <p><span>Level:</span><br/> { databaseKey.productSkillLevel }</p>
            <p><span>Presets:</span><br/> { databaseKey.productPresets }</p>
          </div>
        </div>
        <div className="inputsProductContainer">
          <p className="priceProduct">Price per week &nbsp;&nbsp;<span>{ `${databaseKey.pricePerWeek}€` }</span></p>
          <p className="priceProduct">Price per day &nbsp;&nbsp;<span>{ `${databaseKey.pricePerDay}€` }</span></p>
          <div className="dateContainer">
            {/*<input type="text" id="datePickerTing" name="daterange" value="" autofocus/>*/}
          </div>
          <p className="totalPrice">Total: <span className="totalBig" id="arturiaMirobruteTotal"></span></p>
          <button className="rentSubmit">Rent</button>
        </div>
      </div>
    )
  }
}

