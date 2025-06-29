import { Booking } from '@/app/booking/page'
import { useFetch } from '@/hooks/useFetch'
import Image from 'next/image'
import React from 'react'
import UsersSkeletons from './_components/UsersSkeletons'

const RightSide = (): React.JSX.Element => {
    const { data, isLoading } = useFetch<{ lastBooking: Booking[] }>('/bookings/last');
    if(isLoading) {
        return <UsersSkeletons />
    }
    return (
        <div className='bg-[#FFFFFF] rounded-[20px] py-[16px] px-[8px]'>
                    <div className='md:px-6'>
                        <div className='border-b-[1px] border-[#E5E5EF] pb-4'>
                            <h1 className='text-2xl font-semibold'>Latest trip bookings</h1>
                        </div>
                        <div className='flex justify-between items-center py-5'>
                            <p className='font-normal text-sm text-ash'>booking</p>
                            <p className='font-normal text-sm text-ash'>seats</p>
                        </div>
                        {/* content */}
                        <div className='max-h-80 overflow-y-auto space-y-5 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent'>
                            {data?.lastBooking.map((booking: Booking) => (
                                <div className='flex justify-between items-center' key={booking._id}>
                                <div className='flex gap-2 items-center'>
                                    <Image
                                    src={booking.trip.images[0] || '/card-img-3.png'}
                                    alt='user'
                                    width={40}
                                    height={40}
                                    className='rounded-md object-cover'
                                    />
                                    <h2 className='font-semibold text-sm leading-[18px]'>
                                    {booking.trip.title}
                                    </h2>
                                </div>
                                <p className='text-sm font-normal leading-5'>{booking.trip.availableSeats}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    )
}

export default RightSide