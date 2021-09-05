import React from 'react';
import './Marker.css';
import marker from '../../assets/images/marker.png';
class Marker extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
            color: props.color,
            name: props.name,
            pointer: props.pointer
        };
	}
	render() {
        if(this.state.pointer) {
            return <div>
                    <div
                        className="pin bounce"
                        style={{ backgroundImage: 'url(' + this.state.pointer + ')', cursor: 'pointer' }}
                        title={this.state.name}
                    />
                    <div className="pulse" />
                </div>
        } else {
            return ''
        }
	}
}
export default Marker;