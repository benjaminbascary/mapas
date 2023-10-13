import React from "react";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

const DrawControls = () => {
  return (
    <EditControl
      position="bottomright"
      onCreated={() => {}}
      onEdited={() => {}}
      onDeleted={() => {}}
      draw={{
        polygon: true,
        rectangle: false,
        circle: false,
        polyline: false,
        marker: false,
      }}
    />
  );
};

export default DrawControls;
