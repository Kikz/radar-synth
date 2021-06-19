//MODULE IMPORTS
import React from 'react'
import styled from 'styled-components'



//TYPESCRIPT 
interface HomeSectionProps {
    sectionLink: string,
    sectionStyle: string,
    sectionTitle: string,
    sectionSrc?: string,
    sectionAlt?: string,
}



//STYLES
const SectionTitle = styled.h1`
    position: absolute;
	top: 33%;
	left: 35px;
	font-size: 2.1vw;
	font-family: 'GTAmerica-Regular';
	font-weight: 300;
	line-height: 40px;
	color: #FAFCFF;
`
const SectionLine = styled.div`
    position: absolute;
	top: calc(33% + 65px);
	left: 20px;
	right: 20px;
	height: 1px;
	background: #FAFCFF;
`



//MAIN COMPONENT
const HomeSection = (props: HomeSectionProps) => (
    <a href={props.sectionLink} className={`section ${props.sectionStyle}`}>
        <div className="sectionContainer">
            <SectionTitle>{props.sectionTitle}</SectionTitle>
            <SectionLine />
            <img className="imageSection" src={props.sectionSrc} alt={props.sectionAlt} />
        </div>
    </a>
)


//EXPORT
export default HomeSection


//PARENT COMPONENT -> App