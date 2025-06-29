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
        <div className="h-full">
            <div
                className="bg-white rounded-[20px] shadow-md overflow-hidden cursor-pointer flex flex-col h-full"
                onClick={() => router.push('/trip/' + trip._id)}
            >
                <div className="relative w-full h-[190px] flex-shrink-0">
                    <Image
                        src={trip.images[0]}
                        alt={trip.title}
                        fill
                        className="object-cover rounded-t-[20px]"
                    />
                    <p className="absolute top-4 right-4 text-black bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                        ${trip.price}
                    </p>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    {/* Responsive title with line clamp */}
                    <h1
                        className="text-lg font-semibold leading-tight mb-2 
                        line-clamp-3 break-words"
                        title={trip.title} // full title on hover
                    >
                        {trip.title}
                    </h1>

                    <div className='flex justify-between items-center'>
                        <div className="flex items-start gap-2 mb-2">
                            <img
                                src="/location.svg"
                                alt="location icon"
                                className="mt-1 w-4 h-4 flex-shrink-0"
                            />
                            <p className="text-sm text-gray-500 truncate max-w-[calc(100%-1rem)]">
                                {trip.country}
                            </p>
                        </div>
                        <p className='text-[10px] text-ash'>{trip.availableSeats > 0 ? `Available` : 'Fully Booked'}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="bg-[#ECFDF3] text-[#027A48] text-sm px-4 py-1 rounded-full whitespace-nowrap">
                            {trip.travelStyle}
                        </span>
                        <span className="bg-[#F3F0FB] text-[#6941C6] text-sm px-4 py-1 rounded-full whitespace-nowrap">
                            {trip.budgetEstimate}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripCard;
