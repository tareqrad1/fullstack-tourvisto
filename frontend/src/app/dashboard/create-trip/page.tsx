import React from 'react'
import type { Metadata } from 'next'
import TripForm from './_components/TripForm';
import "leaflet/dist/leaflet.css";

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
            </div>
        </div>
    )
};

export default CreatePage;