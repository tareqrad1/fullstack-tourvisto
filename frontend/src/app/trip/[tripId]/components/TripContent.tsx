'use client';

import React from 'react'
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Image from 'next/image';
import Map from '@/components/MapLeaflet';
import Link from 'next/link';
import { Trash } from 'lucide-react';
import type { ITrip } from '@/components/TripCard';
import useSWR, { mutate } from "swr";
import PayButton from './PayButton';
import Tags from './Tags';
import toast from 'react-hot-toast';
import { UserType } from '@/context/AuthContextProvider';
import { useRouter } from 'next/navigation';

const fetcher = (url: string) => axios.get(url).then(res => res.data);
const TripContent = ({ initialData, user }: { initialData: { trip: ITrip }, user: UserType }) => {
    const router = useRouter();
    const { data, isLoading } = useSWR(`/trips/${initialData.trip._id}`, fetcher, {
        fallbackData: initialData,
    });
    async function handleRemove() {
        try {
            await axios.delete(`/trips/${initialData.trip._id}`);
            toast.success('Trip deleted successfully');
            router.push('/');
            mutate(`/trips`)
        } catch (error: unknown) {
            if(axios.isAxiosError(error)) {
                console.log(error.message);
            }
        }
    }
    const isAdmin = user.role === 'admin';
    return (
    <div className="container flex flex-col lg:flex-row gap-6 mt-6 pb-6">
                <div>
                    <Link href={'/'}>
                        <Button variant="ghost" className="bg-[#ffffff] text-midnight font-semibold text-base w-max">
                            <img src="/arrow-left.svg" alt="arrow-left" className="mr-2" />Go back
                        </Button>
                    </Link>
                </div>
                <div className="w-full lg:max-w-4xl">
                    <h1 className="text-2xl md:text-4xl font-semibold text-midnight leading-snug">
                        { data.trip.title }
                    </h1>
                <div className='flex justify-between items-center'>
                    <div className="flex flex-wrap items-center gap-4 py-4 text-ash text-lg">
                        <p className="flex items-center gap-2">
                            <Image src="/calendar.svg" alt="calendar" width={20} height={20} /> {data.trip.duration} day plan
                        </p>
                        <p className="flex items-center gap-2">
                            <Image src="/location.svg" alt="location" width={20} height={20} /> {data.trip.country}
                        </p>
                    </div>
                    <div>
                        
                        {isAdmin && (
                            <Trash className='w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors' onClick={handleRemove} />
                        )}
                    </div>
                </div>
                {/* Images Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
                    <div className="lg:col-span-4 h-72">
                        <Image src={data.trip.images[0]} alt="main trip" width={800} height={308} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <Image src={data.trip.images[1]} alt="trip image" width={220} height={147} className="rounded-xl object-cover w-full" />
                        <Image src={data.trip.images[2]} alt="trip image" width={220} height={147} className="rounded-xl object-cover w-full" />
                    </div>
                </div>
                {/* Tags + Rating */}
                <Tags trip={data.trip} />
                {/* Description */}
                <div className="mt-6">
                    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-midnight">{data.trip.subTitle}</h2>
                        <p className="text-sm text-ash">Luxury, Diversity, and Harmony</p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-full text-xl font-semibold text-midnight">${data.trip.price}</div>
                    </header>
                    <p className="py-4 text-sm leading-6 text-midnight">
                    {data.trip.description.split('\n').map((paragraph: string, index: number) => (
                        <React.Fragment key={index}>
                            {paragraph}
                            <br />
                        </React.Fragment>
                    ))}
                    <br />
                    <br />
                    </p>
                </div>
                {/* Placeholder for Map */}
                <div className='rounded-full'>
                    <Map latitude={data.trip.location.coordinates[0]} longitude={data.trip.location.coordinates[1]}/>
                </div>
                {/* Dialog Button */}
                    <PayButton />
                </div>
            </div>
        )
}

export default TripContent