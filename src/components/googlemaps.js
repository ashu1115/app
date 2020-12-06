import React from 'react'
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const googlemaps = () => {
    
const mapStyles = {
    width: '100%',
    height: '100%'
  };
  return (
    <div>
      <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: YOUR_LATITUDE,
            lng: YOUR_LONGITUDE
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'This is test name'}
        />
        </Map>
    </div>
  )
}

export default googlemaps
