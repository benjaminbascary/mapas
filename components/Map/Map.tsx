"use client";

import { mockData, poligonsCoordinates } from "../../utils/mockData";
import { satelliteLayers } from "@/utils";
import { Field, DrawControls } from "..";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  FeatureGroup,
} from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-draw/dist/leaflet.draw.css";

const Map = () => {
  const layers = satelliteLayers;

  return (
    <MapContainer
      attributionControl={false}
      key={Math.random()}
      style={{ width: "100vw", height: "100vh", borderRadius: 2 }}
      center={[mockData.generalRocaLatitude, mockData.generalRocaLongitude]}
      zoom={13}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      zoomAnimation={true}
      inertiaDeceleration={1000}
      zoomControl={true}
    >
      <TileLayer
        url={layers.satellite}
        maxZoom={20}
        subdomains={["mt1", "mt2", "mt3"]}
      />
      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Terrenos activos">
          <FeatureGroup>
            {poligonsCoordinates.map((polygon, index) => (
              <Field key={index} coordinates={polygon as LatLngExpression[]} />
            ))}
            <DrawControls />
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="MUIs">
          <FeatureGroup>
            {poligonsCoordinates.map((polygon, index) => (
              <Field key={index} coordinates={polygon as LatLngExpression[]} />
            ))}
            <DrawControls />
          </FeatureGroup>
        </LayersControl.Overlay>
        <LayersControl.BaseLayer checked name="Satellite">
          <TileLayer
            url={layers.satellite}
            maxZoom={20}
            subdomains={["mt1", "mt2", "mt3"]}
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Hybrid">
          <TileLayer url={layers.topographic} maxZoom={20} />
        </LayersControl.BaseLayer>
      </LayersControl>
    </MapContainer>
  );
};

export default Map;
