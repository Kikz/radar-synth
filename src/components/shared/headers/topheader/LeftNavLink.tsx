//MODULE IMPORTS
import React from 'react'
import { TimelineLite } from "gsap"
import { Link } from 'react-router-dom'


//TYPESCRIPT PROPS
interface LeftNavLinkProps {
    leftNavHref: string,
    leftNavTab: string,
}



//MAIN COMPONENT
export default class LeftNavLink extends React.Component<LeftNavLinkProps>{

    //TYPESCRIPT REFS
    private linkLeftNavRef: any;
    private linkLeftNavAnim: any;

    constructor(props: LeftNavLinkProps){
        super(props)
        // Tween Ref Init
		this.linkLeftNavRef = null;
		// Tween Animation Init
		this.linkLeftNavAnim = null;
    }

    componentDidMount(){
		// Tween Animation
		this.linkLeftNavAnim = new TimelineLite({ paused:true })
			.to(this.linkLeftNavRef, 0.4, { opacity: "1", ease: "Power1.easeInOut" })
	}

    render() {
        return (
            <Link 
                to={this.props.leftNavHref} 
                onMouseEnter={() => this.linkLeftNavAnim.play()}
                onMouseLeave={() => this.linkLeftNavAnim.reverse()}
            >
                <li ref={elem => this.linkLeftNavRef = elem}>
                    {this.props.leftNavTab}
                </li>
            </Link>
        )
    }
}


//PARENT COMPONET -> LeftNav
