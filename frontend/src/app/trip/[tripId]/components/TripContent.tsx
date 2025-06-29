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
import { Skeleton } from '@/components/ui/skeleton';

const fetcher = (url: string) => axios.get(url).then(res => res.data);
const TripContent = ({ initialData, user }: { initialData: { trip: ITrip }, user: UserType }) => {
    const router = useRouter();
    const { data, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/trips/${initialData.trip._id}`, fetcher, {
        fallbackData: initialData,
    });
   if (isLoading) {
    return (
        <div className="container flex flex-col lg:flex-row gap-6 mt-6 pb-6">
            <div>
                <Skeleton className="w-32 h-10 mb-4" />
            </div>
            <div className="w-full lg:max-w-4xl space-y-6">
                {/* Title */}
                <Skeleton className="h-10 w-3/4" />

                {/* Trip Info Row */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-4">
                        <Skeleton className="h-6 w-36" />
                        <Skeleton className="h-6 w-36" />
                    </div>
                    <Skeleton className="h-6 w-20" />
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
                    <Skeleton className="h-72 w-full lg:col-span-4 rounded-2xl" />
                    <div className="flex flex-col gap-4 lg:col-span-4">
                        <Skeleton className="h-32 w-full rounded-xl" />
                        <Skeleton className="h-32 w-full rounded-xl" />
                    </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mt-4">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-8 w-20 rounded-full" />
                    ))}
                </div>

                {/* Description */}
                <div className="space-y-2 mt-6">
                    {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-4 w-full" />
                    ))}
                </div>

                {/* Map */}
                <Skeleton className="h-64 w-full rounded-2xl mt-6" />

                {/* Booking Button */}
                <Skeleton className="h-12 w-full rounded-xl mt-4" />
            </div>
        </div>
    );
}

    async function handleRemove() {
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/trips/${initialData.trip._id}`);
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
                        
                        {isAdmin ? (
                            <Trash className='w-5 h-5 cursor-pointer hover:text-gray-400 transition-colors' onClick={handleRemove} />
                        ) : (
                            <p className='text-sm text-ash'>{data.trip.availableSeats > 0 ? data.trip.availableSeats : '0'} seats available</p>
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
                    {/* <PayButton trip={data.trip} /> */}
                    {data.trip.availableSeats > 0 ? (
                    <PayButton trip={data.trip} />
                    ) : (
                    <Button disabled className="mt-4 w-full">
                        Booking Unavailable
                    </Button>
                    )}
                </div>
            </div>
        )
}

export default TripContent