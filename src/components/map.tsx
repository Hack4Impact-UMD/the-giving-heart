"use client";
import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoidGhlZ2l2aW5naGVhcnQiLCJhIjoiY2xwNWl3bm50MWVudzJqbzRzMHQ4cHRpdyJ9.hd8bhxh4uUXhe1xA1X9tCA'
});

const MapboxMap: React.FC = () => {
  const position: [number, number] = [-77.4736, 37.5194];

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v11"
      center={position}
      zoom={[13]}
      containerStyle={{
        height: '400px',
        width: '100%',
      }}
    >
    </Map>
  );
};

export default MapboxMap;
