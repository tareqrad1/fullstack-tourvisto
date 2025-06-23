import React from 'react'
import type { Metadata } from 'next'
import TripForm from './_components/TripForm';
import "leaflet/dist/leaflet.css";
import { Button } from '@/components/ui/button';
import Map from '@/components/MapLeaflet';

export const metadata: Metadata = {
    title: "Create Trip - Tourvisto",
    description: "Create Trip - Tourvisto",
    keywords: "create trip, tourvisto, travel, itineraries, bookings",
    authors: [{ name: "Tourvisto Team" }],
    icons: {
        icon: "/fi_2200326.svg",
    },
};

const CreatePage = (): React.JSX.Element => {
    return (
        <div>
            <div className='py-5'>
                <h1 className='text-2xl font-semibold text-midnight'>Add new Trips</h1>
                <p className='text-lg font-normal text-ash'>View and generate AI travel plans</p>
            </div>
            <div className='bg-[#FFFFFF] p-6 shadow-lg rounded-[20px] max-w-3xl mx-auto py-5 mb-5'>
                <div className='z-10'>
                    <TripForm />
                </div>
                <div className='mt-4'>
                    <Map latitude={34.052235} longitude={-118.243683} />
                </div>
                <Button className='w-full py-[14px] px-[16px] bg-blueAccent hover:bg-blueAccent-hover rounded-[8px] font-semibold text-white text-[16px] leading-[20px] my-4'>
                <img src="/mynaui_sparkles.svg" alt="generate svg" />
                    Generate a trip
                </Button>
            </div>
        </div>
    )
};

export default CreatePage;