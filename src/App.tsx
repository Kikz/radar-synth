//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//STYLESHEET IMPORTS
import './App.css'
//COMPONENT IMPORTS
import LeftHeader from './components/shared/headers/leftheader/LeftHeader'
import TopHeader from './components/shared/headers/topheader/TopHeader'
import Home from './components/home/Home'
import About from './components/about/About'
import All from './components/all/All'
import Synthesizers from './components/synthesizers/Synthesizers'
import Samplers from './components/samplers/Samplers'
import DrumMachines from './components/drummachines/DrumMachines'
import Product from './components/products/Product';
//DATABASE IMPORTS
import { INSTRUMENTS_DB } from './databases/instruments'


//TYPESCRIPT



//STYLES
const Container$tyle = styled.div`

      display: grid;
      grid-template-columns: 60px auto auto auto auto;
      grid-template-rows: 140px auto;
      width: 100vw;
      height: 100vh;
      font-style: 'GTAmerica';
      font-size: 12px;
      overflow-x: hidden;
      -webkit-transition: -webkit-transform 0.5s;
      transition: transform 0.5s;

      @media  (max-width: 910px), screen and (orientation: portrait) {
        display: block;
      }

      &:after {
        content: '';
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        -webkit-transition: opacity 0.5s, visibility 0s 0.5s;
        transition: opacity 0.5s, visibility 0s 0.5s;
      }

`


//MAIN COMPONENT
export default class App extends Component{


  render() {
    return (
      <Router>
        <div className="App">
          <Container$tyle>

            {/* HEADERS */}
            <LeftHeader />
            <TopHeader />

            {/* PAGES */}
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/all" component={All} />
            <Route path="/synths" component={Synthesizers} />
            <Route path="/samplers" component={Samplers} />
            <Route path="/drummachines" component={DrumMachines} />

            {/* PRODUCTS */}
            <Route path="/arturia-microbrute" render={(props: any) => <Product {...props} databaseKey={INSTRUMENTS_DB[4]} />} />

          </Container$tyle>
        </div>
      </Router>
    )
  }
}



//STYLE EXPORTS -> All, Synthesizers, Samplers, DrumMachines
export const CatalogueContainer$tyle = styled.div`
  position: relative;
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 3;
  background: #FAFCFF;
`
export const CatalogueContentContainer$tyle = styled.div`
  width: 100%;
`
export const CatalogueContent$tyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  width: 88.5245901639%;
  margin: calc(80px - 40px) auto;
  /* margin-bottom: calc(80px - 40px + 140px); */
`