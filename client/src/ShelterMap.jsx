import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import MapMarker from './Marker';
import axios from 'axios';


class ShelterMap extends React.Component {
	constructor(props){
		super(props);
		this.state = {coords: [{
			lng: -122.338599,
			lat: 47.588801
        },
        {
			lng: -122.353758,
			lat: 47.620909
        },
        {
			lng: -122.303896,
			lat: 47.616055
        },
        
        {
			lng: -122.330517,
			lat: 47.600789
        },
        {
			lng: -122.353734,
			lat: 47.619043
        },
    ]}
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
		let lat = this.state.lat ? this.state.lat : 47.614208
		const ShelterMap = new ReactMapboxGl({
			accessToken: 'pk.eyJ1IjoibWNkdWRsZXk4NyIsImEiOiJjanhlejR5YWIwdWFwM25tcHNubDdpejIwIn0.n-RmlJrsycjQ76M82M_02Q',
			container: 'map',
			minZoom: 12,
			maxZoom: 16
		},		
	);

	return (
	<>	
		<div className="sheltermap">
		<ShelterMap
			center={[-122.320108, 47.606811]}
			style="mapbox://styles/mapbox/streets-v9"
			containerStyle={{
				height: '800px',
				width: '100%'
			}}>
	{/* Make this render interview location */}
			{this.state.coords.map(coord=>{
                return ( <Marker coordinates={[coord.lng,coord.lat]}
				style={{backgroundColor: 'green', height: '25px', width: '25px', borderRadius: '50%'}}>
			</Marker>)
            })}
		</ShelterMap>
		</div>
	</>
	)
	}
	}	

export default ShelterMap;