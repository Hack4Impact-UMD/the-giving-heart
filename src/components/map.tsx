"use client";
import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string,
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
