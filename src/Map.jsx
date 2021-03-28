import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl'


export class Map extends Component {
  map = null;
  mapContainer = React.createRef();
  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoibmlraXRhaXZhbm92OTMiLCJhIjoiY2ttcTlkbXBiMm1jNzJ2bno2bG5meWxsYSJ9.vcHqaq_EZPoPWMQh4S4-aw";

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 12 // starting zoom
      });
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render() {
    return (
      <div className="map-wrapper">
        <div data-test-id="map" className="map" ref={this.mapContainer}/>
      </div>
    )
  }
}