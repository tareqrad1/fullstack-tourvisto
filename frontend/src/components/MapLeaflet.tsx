'use client'

import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface MapProps {
    longitude: number;
    latitude: number;
    zoom?: number;
}

const Map: React.FC<MapProps> = ({ longitude, latitude, zoom = 10 }) => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<maplibregl.Map | null>(null);

    useEffect(() => {
        if (map.current) return; // initialize only once
        if (!mapContainer.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
            center: [longitude, latitude],
            zoom,
        });
        new maplibregl.Marker().setLngLat([longitude, latitude]).addTo(map.current);

    }, [longitude, latitude, zoom]);
    return <div ref={mapContainer} style={{ width: "100%", height: "400px" }} className="rounded-[10px]" />;
    };

export default Map;
