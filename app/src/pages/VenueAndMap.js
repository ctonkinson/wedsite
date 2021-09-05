import React from 'react';
import Axios from "axios";
import Map from './../incs/Map/MapContainer.js';

class VenueAndMap extends React.Component {
	render() {
		let details = ''
		if(this.props.map) {
			details = this.props.map.map((item, key) => {
				return  <div className="map-location">
							<div className="map-title">{item.venue_type}</div>
							<p>{item.title}<br />
							{item.address}
							</p>
						</div>
			})
		}
		return <div className="venue-map-template">
					<h2 className="underline-circle">Venue and Map</h2>
					<div className="main-content">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-6">
									{details}
								</div>
								<div className="col-md-6">
									<Map site={this.props.site} details={this.props.map} lat={this.props.lat} long={this.props.long} />
								</div>
							</div>
						</div>
					</div>
				</div>
		}
	}

export default VenueAndMap;

