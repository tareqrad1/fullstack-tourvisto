import Image from 'next/image';
import React from 'react';

interface ITrip {
    id: number;
    title: string;
    body: string;
    key1: string;
    key2: string;
}

const TripCard: React.FC<{ trip: ITrip }> = ({ trip }): React.JSX.Element => {
    return (
        <div className='bg-white rounded-[20px] shadow-md overflow-hidden'>
            <div className='relative w-full h-[190px]'>
                <Image
                src="/img.png"
                alt={trip.title}
                fill
                className='object-cover rounded-t-[20px]'
                />
                <p className='absolute top-4 right-4 text-black bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm'>
                    $300
                </p>
            </div>
            <div className='p-4 space-y-4'>
                <h1 className='text-lg font-semibold'>{trip.title}</h1>
                <div className='flex items-start gap-2'>
                    <img src="/location.svg" alt="location icon" className="mt-1 w-4 h-4" />
                    <p className='text-sm text-gray-500'>St George’s Ln Singapore</p>
                </div>
                <div className='flex flex-wrap gap-2'>
                    <span className='bg-[#ECFDF3] text-[#027A48] text-sm px-4 py-1 rounded-full'>
                        {trip.key1}
                    </span>
                    <span className='bg-[#F3F0FB] text-[#6941C6] text-sm px-4 py-1 rounded-full'>
                        {trip.key2}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TripCard;
