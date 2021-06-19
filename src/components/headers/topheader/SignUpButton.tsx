import React, { Component } from 'react'
import { TimelineLite } from 'gsap'

export default class SignUpButton extends Component {

    //TYPESCRIPT REFS
    private linkRightNavRef: any;
    private linkRightNavAnim: any;

    constructor(props: any){
        super(props)
        // Tween Ref Init
		this.linkRightNavRef = null;
		// Tween Animation Init
		this.linkRightNavAnim = null;
    }

    componentDidMount(){
		// Tween Animation
		this.linkRightNavAnim = new TimelineLite({ paused:true })
			.to(this.linkRightNavRef, 0.4, { opacity: "1", ease: "Power1.easeInOut" })
	}

    render() {
        return (
            <a 
                href="#"
                onMouseEnter={() => this.linkRightNavAnim.play()}
                onMouseLeave={() => this.linkRightNavAnim.reverse()}
            >
                <li ref={elem => this.linkRightNavRef = elem}>Sign Up</li>
            </a>
        )
    }
}
