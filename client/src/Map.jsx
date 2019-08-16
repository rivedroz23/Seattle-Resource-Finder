import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import MapMarker from './Marker';
import axios from 'axios';


class Map extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			lng: '',
			lat: ''
		}
	}

	// componentDidMount() {
	// 	//get a location from props
	// 	// axios post request to /geo/code
	// 	axios.post('/geo/code',{
	// 		location: this.props.match.params.location
	// 	}).then( result => {
	// 		this.setState({
	// 			lng: result.data[0],
	// 			lat: result.data[1]
	// 		})
	// 	})
	// }

	render () {
		let lng = this.state.lng ? this.state.lng : -122.350306
		let lat = this.state.lat ? this.state.lat : 47.614193

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
							width: '800px'
						}}>
              {/* Make this render interview location */}
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