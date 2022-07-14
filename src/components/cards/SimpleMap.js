import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 44.4268,
      lng: 26.1025,
    },
    zoom: 8,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "98%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyB8EZbNyny7DGFI-ZWmVTRqh6Ip_bgCnp4",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
