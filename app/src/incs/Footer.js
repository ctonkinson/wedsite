import React from 'react';
import DelayLink from 'react-delay-link';

class Footer extends React.Component {
	 action(item, current) {
        if(item !== current) {
            this.setState({
                pageView : 'page-view fade-out'
            })
            const timer = setTimeout(() => {
                if(item === '/') {
                    this.setState({
                        pageClass : 'active-1'
                    })
                }
                if(item === '/guest-information') {
                    this.setState({
                        pageClass : 'active-2'
                    })
                }
                if(item === '/venue-and-map') {
                    this.setState({
                        pageClass : 'active-3'
                    })
                }
                if(item === '/gallery') {
                    this.setState({
                        pageClass : 'active-4'
                    })
                }
            }, 300);
            const timer2 = setTimeout(() => {
                this.setState({
                    pageView : 'page-view'
                })
            }, 1000);
        }
    }
	render() {
		return <footer>
					<div className="footer-copyright">
						© 2021 C &amp; J Wedding
					</div>
					<div className="footer-links">
						<ul>
                            <li>
                                <DelayLink 
                                    delay={1000} to="/"
                                    clickAction={() => this.action('/', window.location.pathname)} 
                                    replace={false}>
                                    <div className="inner-link">Home</div>
                                </DelayLink>
                            </li>
                            <li>
                                <DelayLink 
                                    delay={1000} to="/guest-information"
                                    clickAction={() => this.action('/guest-information', window.location.pathname)} 
                                    replace={false}>
                                    <div className="inner-link">Guest Information</div>
                                </DelayLink>
                            </li>
                            <li>
                                <DelayLink 
                                    delay={1000} to="/venue-and-map"
                                    clickAction={() => this.action('/venue-and-map', window.location.pathname)} 
                                    replace={false}>
                                    <div className="inner-link">Venue and Map</div>
                                </DelayLink>
                            </li>
                            <li>
                                <DelayLink 
                                    delay={1000} to="/gallery"
                                    clickAction={() => this.action('/gallery', window.location.pathname)} 
                                    replace={false}>
                                    <div className="inner-link">Gallery</div>
                                </DelayLink>
                            </li>
                        </ul>
					</div>
				</footer>
		}
	}

export default Footer;

