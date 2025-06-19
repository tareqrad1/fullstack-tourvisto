"use client";

import dynamic from 'next/dynamic';
import { MapLeafletProps } from './MapLeaflet';

const MapLeaflet = dynamic(
    () => import('./MapLeaflet'),
    { 
        ssr: false,
        loading: () => <div style={{ height: "400px", width: "100%" }} className='text-center mt-9 text-sm'>Loading map...</div>
    }
);

export default function MapLeafletWrapper(props: MapLeafletProps) {
    return <MapLeaflet {...props} />;
}
