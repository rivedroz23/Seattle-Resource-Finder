import React from 'react';
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';
import MapMarker from './Marker';
import axios from 'axios';


class Map extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			lng: '', 
			lat: '',
			popupInfo: null
		}
	};

	_renderPopup() {
		const {popupInfo} = this.state;
		
		return (
		  popupInfo && (
			<Popup
			coordinates={[-122.350306, 47.61419]}
			offset={{
			  'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
			}}>
			<h1>Popup</h1>
		  </Popup>
		  )
		);
	  }

	render () {
		let lng = this.state.lng ? this.state.lng: '-122.350306' 
		let lat = this.state.lat ? this.state.lat: '47.61419'

		const Map = new ReactMapboxGl({
			accessToken: 'pk.eyJ1IjoibWNkdWRsZXk4NyIsImEiOiJjanhlejR5YWIwdWFwM25tcHNubDdpejIwIn0.n-RmlJrsycjQ76M82M_02Q',
			container: 'map',
			minZoom: 12,
			maxZoom: 16
		},		
	);

	return (
	<>
		<div className="mapboxBox">
			<Map
				center={[-122.320108, 47.606811]}
				style="mapbox://styles/mapbox/streets-v9"
				containerStyle={{
					height: '800px',
					width: '100%'
				}}>

				<Marker coordinates={[lng, lat]}
					style={{backgroundColor: 'green', height: '25px', width: '25px', borderRadius: '50%'}}>
				</Marker>
				<MapMarker	/>
			</Map>
		</div>
	</>
	)
	}
	}	

export default Map;