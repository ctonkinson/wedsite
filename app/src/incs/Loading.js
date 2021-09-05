import React from 'react';
import Axios from "axios";

class Loading extends React.Component {
	render() {
		if(!this.props.isLoading) {
			return <div className="loading-page">
					<div className="lds-ripple"><div></div><div></div></div>
				</div>
		} else 
			return ''
	}
}
export default Loading;

