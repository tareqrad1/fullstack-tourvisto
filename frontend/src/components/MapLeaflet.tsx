"use client";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

export interface MapLeafletProps {
  // Add any props you need here
}

const MapLeaflet = ({}: MapLeafletProps) => {
    return (
        <MapContainer
        center={[40.4168, -3.7038]}
        zoom={13}
        style={{ height: "400px", width: "100%", zIndex: 0 }}
        >
        <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[40.4168, -3.7038]}>
            <Popup>Your Trip Location</Popup>
        </Marker>
        </MapContainer>
    );
};

export default MapLeaflet;