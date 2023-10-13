"use client";
import { LatLngExpression } from "leaflet";
import { useMap, Polygon } from "react-leaflet";

const Field = ({ coordinates }: { coordinates: LatLngExpression[] }) => {
  const map = useMap();

  const handlePolygonSelect = () => {
    console.log(coordinates)
    map.setView(coordinates[0], 16);
  };

  return (
    <Polygon
      eventHandlers={{ click: handlePolygonSelect }}
      positions={coordinates}
    />
  );
};

export default Field;
