import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const AnyReactComponent = ({ text }) => (
  <div>
    <i className="fa-solid fa-map-pin fs-1"></i>
  </div>
);

export default function SimpleMap({ cardLocation }) {
  const defaultProps = {
    center: {
      lat: -3.119027,
      lng: -60.021731,
    },
    zoom: 6,
  };
  console.log(cardLocation);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyB8EZbNyny7DGFI-ZWmVTRqh6Ip_bgCnp4",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={cardLocation?.lat}
          lng={cardLocation?.lng}
          text="My Marker"
        />
        {/* <Marker lat={defaultProps.center.lat} lng={defaultProps.center.lng} /> */}
      </GoogleMapReact>
    </div>
  );
}
