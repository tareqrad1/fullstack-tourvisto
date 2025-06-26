import { getUserInSession } from '@/app/_action'
import TripCard, { ITrip } from '@/components/TripCard'
import React from 'react'




const Trips = async() => {
    const { token } = await getUserInSession();
    const res = await fetch('http://localhost:5000/api/trips/', {
        headers: {
            Cookie: `token=${token}`,
        },
    });
    const data = await res.json();
    console.log(data.trips, 'tripss');
    return (
        <div>
            <h2 className='font-semibold text-midnight text-[16px] mb-3'>Trips</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                {data.trips.map((trip: ITrip) => (
                    <TripCard key={trip._id} trip={trip} />
                ))}
            </div>
        </div>
    )
}

export default Trips