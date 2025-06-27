'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export interface ITrip {
    _id: string;
    title: string;
    subTitle: string;
    country: string;
    images: string[];
    createdAt: string;
    travelStyle: string;
    budgetEstimate: string;
    price: string;
    startDate: string;
    availableSeats: number;
    interest: string;
    groupType: string;
    duration: number;
}

const TripCard: React.FC<{ trip: ITrip }> = ({ trip }): React.JSX.Element => {
    const router = useRouter();    
    return (
        <div className='h-full'>
            <div className='bg-white rounded-[20px] shadow-md overflow-hidden'
            onClick={() => router.push('/trip/'+ trip._id)}
        >
            <div className='relative w-full h-[190px]'>
                <Image
                src={trip.images[0]}
                alt={trip.title}
                fill
                className='object-cover rounded-t-[20px]'
                />
                <p className='absolute top-4 right-4 text-black bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm'>
                    ${trip.price}
                </p>
            </div>
            <div className='p-4 space-y-4 cursor-pointer'>
                <h1 className='text-lg font-semibold'>{trip.title}</h1>
                <div className='flex items-start gap-2'>
                    <img src="/location.svg" alt="location icon" className="mt-1 w-4 h-4" />
                    <p className='text-sm text-gray-500'>{trip.country}</p>
                </div>
                <div className='flex flex-wrap gap-2'>
                    <span className='bg-[#ECFDF3] text-[#027A48] text-sm px-4 py-1 rounded-full'>
                        {trip.travelStyle}
                    </span>
                    <span className='bg-[#F3F0FB] text-[#6941C6] text-sm px-4 py-1 rounded-full'>
                        {trip.budgetEstimate}
                    </span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TripCard;
