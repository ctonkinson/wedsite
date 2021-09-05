import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';



const SimpleMap = (props: any) => {
	const getMapOptions = (maps: any) => {
		return {
			disableDefaultUI: true,
			mapTypeControl: false,
			streetViewControl: false,
			styles: [
				{
					"featureType": "administrative",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
						"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#304b78"
						}
					]
				},
			    {
			        "featureType": "landscape",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#f2f2f2"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#f2f2f2"
			            },
			            {
			                "lightness": "11"
			            },
			            {
			                "weight": "3.45"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.school",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#e2c4e4"
			            },
			            {
			                "saturation": "5"
			            },
			            {
			                "lightness": "34"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "all",
			        "stylers": [
			            {
			                "saturation": -100
			            },
			            {
			                "lightness": 45
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "simplified"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#e0d2b9"
			            }
			        ]
			    },
			    {
				    "featureType": "road.local",
				    "elementType": "geometry.fill",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
			  	},
			    {
			        "featureType": "road.arterial",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#e88989"
			            }
			        ]
			    },
			    {
			        "featureType": "transit.line",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#9bbae2"
			            },
			            {
			                "lightness": "2"
			            },
			            {
			                "gamma": "0.67"
			            },
			            {
			                "weight": "2.09"
			            }
			        ]
			    },
			    {
			        "featureType": "transit.station",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "visibility": "off"
			            },
			            {
			                "color": "#963636"
			            }
			        ]
			    },
			    {
			        "featureType": "transit.station.rail",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#c32525"
			            }
			        ]
			    },
			    {
			    "featureType": "transit",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  	},
			    {
			        "featureType": "water",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#9bbed5"
			            },
			            {
			                "visibility": "on"
			            }
			        ]
			    }
			],
    	};
  	};

	//const [center, setCenter] = useState({lat: 53.5188265, lng: -1.1900631 });
	const [zoom, setZoom] = useState(5);
	let _distanceToMouse = (markerPos, mousePos, markerProps) => {
		return false;
	}
	let markers = []

	let center = {
      lat: 59.95,
      lng: 30.33
    }
    if(props.lat && props.long) {
    	center = {
    		lat: Number(props.lat),
      		lng: Number(props.long)
    	}
    }

	if(props.details) {
		let i = 0;
		markers = props.details.map((item, key) => {
			i++

			let lat = Number(item.lat)
			let long = Number(item.long)
			return <Marker
						pointer={props.site + '/wp-content/themes/cj/assets/images/point-' + i + '.png'}
						key={key}
						lat={lat}
						lng={long}
						name={item.title}
					/>
		})
	}
	if(props.lat && props.long) {
		return (
			<div className="google-map-container">
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyDn0GOiOz_vsprzRg7FMoT8moIjA8XPZck' }}
					defaultCenter={center}
					defaultZoom={10}
					options={getMapOptions}
					distanceToMouse={_distanceToMouse}
				>
					{markers}
				</GoogleMapReact>
			</div>
		);
	} else {
		return ''
	}
}

export default SimpleMap;