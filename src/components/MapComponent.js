import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import '../styles/map.css';  

const MAPBOX_ACCESS_TOKEN = "map token";

class Map extends Component {
  state = {
    viewport: {
      latitude: 48.8566,
      longitude: 2.3488,
      zoom: 12,
    },
  };

  render() {
    const { viewport } = this.state;

    return (
      <div className="map-container">  
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          onViewportChange={(viewport) => this.setState({ viewport })}
        >
          <Marker latitude={48.8566} longitude={2.3488} />
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;
