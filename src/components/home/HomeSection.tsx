//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineLite } from 'gsap'
import { Link } from 'react-router-dom'



//TYPESCRIPT 
interface HomeSectionProps {
    sectionLink: string,
    sectionStyle: string,
    sectionTitle: string,
    sectionSrc?: string,
    sectionAlt?: string,
}



//STYLES
const SectionTitle$tyle = styled.h1`
    position: absolute;
	top: 33%;
	left: 35px;
	font-size: 2.1vw;
	font-family: 'GTAmerica-Regular';
	font-weight: 300;
	line-height: 40px;
	color: #FAFCFF;
    @media (max-width: 910px), screen and (orientation: portrait) {
        position: static;
        padding-top: 8.3vh;
        padding-left: 35px;
        font-size: 24px;
        margin: 0;
    }
`
const SectionLine$tyle = styled.div`
    position: absolute;
	top: calc(33% + 65px);
	left: 20px;
	right: 20px;
	height: 1px;
	background: #FAFCFF;
    @media (max-width: 910px), screen and (orientation: portrait) {
        position: static;
        margin: 10px 20px 0;
        /* display: none; */
    }
`


//MAIN COMPONENT
export default class HomeSection extends Component<HomeSectionProps> {

    //TYPESCRIPT REFS
    private sectionTitleRef: any;
    private homeSectionAnim: any;

    constructor(props: HomeSectionProps){
        super(props)
        // Tween Ref Init
		this.sectionTitleRef = null;
		// Tween Animation Init
		this.homeSectionAnim = null;
    }

    componentDidMount(){
		// Tween Animation
		this.homeSectionAnim = new TimelineLite({ paused:true })
			.to(this.sectionTitleRef, 0.4, { transform: "translateY(-10px)", ease: "Power1.easeInOut" })
	}

    render() {
        return (
            <Link 
                to={this.props.sectionLink} 
                className={`section ${this.props.sectionStyle}`}
                onMouseEnter={() => this.homeSectionAnim.play()}
                onMouseLeave={() => this.homeSectionAnim.reverse()}
            >
                <div className="sectionContainer">
                    <SectionTitle$tyle ref={elem => this.sectionTitleRef = elem}>{this.props.sectionTitle}</SectionTitle$tyle>
                    <SectionLine$tyle />
                    <img className="imageSection" src={this.props.sectionSrc} alt={this.props.sectionAlt} />
                </div>
            </Link>
        )
    }
}



//PARENT COMPONENT -> Home
