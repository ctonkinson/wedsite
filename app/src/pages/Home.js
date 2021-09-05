import React from 'react';
import Axios from "axios";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Home extends React.Component {
  	goToIntro = (event) => {
        //.current is verification that your element has rendered
        if(this.intro.current){
            this.intro.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }
	render() {

		
		return <div className="home-template">
					<div className="home-top-content">
						<div className="page-content-background-outer">
							<img className="background-image" src={this.props.bg} alt="background" />
							<div className="page-main-content" 
								dangerouslySetInnerHTML={{
					    			__html: this.props.overlayContent
					  			}}>
							</div>
							<div onClick={this.goToIntro} className="mouse">
								<Link to="intro" spy={true} smooth={true} duration={800} >
									<div className="mouse-wheel"><span className="wheel"></span><span className="arrow"></span><span className="arrow"></span></div>
								</Link>
							</div>
						</div>
					</div>
					<Element name="intro" className="sub-content" >
						<div 
							ref={this.intro}
							dangerouslySetInnerHTML={{
						    	__html: this.props.subContent
						  	}}>
						</div>
        			</Element>
				</div>
		}
	}

export default Home;

