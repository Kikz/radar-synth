//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
import { TimelineLite } from 'gsap'



//STYLE
const LoginButtonContainer = styled.a`
    border: 1px solid #05668D;
    box-sizing: border-box;
    && li{
        color: #05668D;
        opacity: 1;
    } 
`


//MAIN COMPONENT
export default class LoginButton extends Component {

    //TYPESCRIPT REFS
    private loginButtonRef: any
    private loginButtonTextRef: any
    private loginButtonAnim: any

    constructor(props: any){
        super(props)
        // Tween Ref Init
		this.loginButtonRef = null
        this.loginButtonTextRef = null
		// Tween Animation Init
		this.loginButtonAnim = null
    }

    componentDidMount(){
		// Tween Animation
		this.loginButtonAnim = new TimelineLite({ paused:true })
			.to(this.loginButtonRef, 0.4, { backgroundColor: "#05668D", ease: "Power1.easeOut" })
            .to(this.loginButtonTextRef, 0.4, { color: "white", ease: "Power1.easeOut" }, '-=0.4')
	}

    render() {
        return (
            <LoginButtonContainer 
                href="#"
                ref={ elem => this.loginButtonRef = elem } 
                onMouseEnter={ () => this.loginButtonAnim.play() }
                onMouseLeave={ () => this.loginButtonAnim.reverse() }
            >
                <li ref={ elem => this.loginButtonTextRef = elem }>Log In</li>
            </LoginButtonContainer>
        )
    }
}



//PARENT COMPONET -> TopHeader

    