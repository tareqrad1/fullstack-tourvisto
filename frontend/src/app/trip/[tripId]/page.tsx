import { getUserInSession } from '@/app/_action';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import Navbar from './components/Navbar';
import Tags from './components/Tags';
import Map from '@/components/MapLeaflet';
import Link from 'next/link';
import PayButton from './components/PayButton';
import { Bell } from "lucide-react";


const TripPage = async ({ params }: { params: { tripId: string } }) => {
    const { user, token } = await getUserInSession();
    if (!token) return redirect('/login');

    const { tripId } = params;
    const response = await axios.get(`http://localhost:5000/api/trips/${tripId}`, {
        withCredentials: true,
        headers: {
        Cookie: `token=${token}`,
        },
    });

    const data = await response.data?.trip;
    return (
        <div>
            <Navbar user={user} />
        {/* Main Content */}
        <div className="container flex flex-col lg:flex-row gap-6 mt-6 pb-6">
            <Link href={'/'}>
                <Button variant="ghost" className="bg-[#ffffff] text-midnight font-semibold text-base w-max">
                    <img src="/arrow-left.svg" alt="arrow-left" className="mr-2" />Go back
                </Button>
            </Link>
            <div className="w-full lg:max-w-4xl">
                <h1 className="text-2xl md:text-4xl font-semibold text-midnight leading-snug">
                    {!data.title || '5-Day Japan Highlights: Culture, Food and Adventure'}
                </h1>
            <div className="flex flex-wrap items-center gap-4 py-4 text-ash text-lg">
                <p className="flex items-center gap-2">
                <Image src="/calendar.svg" alt="calendar" width={20} height={20} /> 5 day plan
                </p>
                <p className="flex items-center gap-2">
                <Image src="/location.svg" alt="location" width={20} height={20} /> Tokyo, Kyoto, Osaka
                </p>
            </div>
            {/* Images Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
                <div className="lg:col-span-4 h-72">
                    <Image src="/img-1.jpg" alt="main trip" width={800} height={308} className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="lg:col-span-4 flex flex-col gap-4">
                    <Image src="/img-2.png" alt="trip image" width={220} height={147} className="rounded-xl object-cover w-full" />
                    <Image src="/img-3.png" alt="trip image" width={220} height={147} className="rounded-xl object-cover w-full" />
                </div>
            </div>
            {/* Tags + Rating */}
            <Tags />
            {/* Description */}
            <div className="mt-6">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-midnight">5-Day Japan Adventure</h2>
                    <p className="text-sm text-ash">Luxury, Diversity, and Harmony</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-full text-xl font-semibold text-midnight">$604</div>
                </header>

                <p className="py-4 text-sm leading-6 text-midnight">
                Experience the best of Japan in 5 unforgettable days, traveling through Tokyo, Kyoto, and Osaka. From the bustling streets of
                Shibuya to the historic temples of Kyoto and the vibrant food scene in Osaka, this itinerary blends culture, sightseeing,
                and local flavors.
                <br />
                <br />
                Arrive at Narita/Haneda Airport & check-in at hotel. Visit Shibuya Crossing & Hachiko Statue. Explore Shinjuku for city
                views at Tokyo Metropolitan Govt. Building. Dinner at an Izakaya in Golden Gai. Take the Hakone Ropeway for a scenic view.
                Relax in an onsen (hot spring). Visit Lake Ashi & see Fuji in the distance. Travel to Kyoto via Shinkansen (bullet train).
                Visit Fushimi Inari Shrine (red torii gates). Explore Gion (Geisha district) in the evening.
                </p>
            </div>
            {/* Placeholder for Map */}
            <div className='rounded-full'>
                <Map latitude={34.052235} longitude={-118.243683}/>
            </div>
            {/* Dialog Button */}
                <PayButton />
            </div>
        </div>
        </div>
    );
};

export default TripPage;
