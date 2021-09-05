import React from 'react';
//import './Home.scss';

class GuestInformation extends React.Component {


	render() {
		let repeater = ''
		let i = 0;
		if(this.props.repeaterContent) {
			repeater = this.props.repeaterContent.map((item, key) => {
				i++
				let rowClass = ""
				if(i % 2) {
					rowClass = "row set-order-1";
				} else {
					rowClass = "row set-order-2";
				}
        		return <div key={key} className={rowClass}>
						<div className="col-lg-6 repeater-content">
							<h3>{item.title}</h3>
							<div 
								dangerouslySetInnerHTML={{
							    	__html: item.content
							  	}}>
							</div>
						</div>
						<div className="dotted-line"></div>
						<div className="col-lg-6 repeater-image">
							<div className="repeater-image-container">
								<img src={item.image.url} alt={item.image.alt} title={item.image.title} />
							</div>
						</div>
					</div>
        	});			
		}

		return <div className="guest-information-template">
					<h2>Guest<br/>Information</h2>
					<div className="container-fluid repeater-content-outer">
						{repeater}
					</div>
				</div>
		}
	}

export default GuestInformation;