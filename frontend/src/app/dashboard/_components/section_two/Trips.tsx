import TripCard from '@/components/TripCard'
import React from 'react'


const DATA_TRIP = [
    {id: 1, title: 'Thornridge Cir. Shiloh', body: 'St George’s Ln Singapore', key1: 'Mountains', key2: 'City'},
    {id: 2, title: 'Roraima Tepui', body: 'Canaima Park, Venezuela', key1: 'Solo travel', key2: 'Budget'},
    {id: 3, title: 'Socotra Island. Shiloh', body: 'Yemen', key1: 'Luxury', key2: 'City'},
    {id: 4, title: 'San Lake Baikal', body: 'Siberia, Russia', key1: 'Sports', key2: 'Adventurous'},
]

const Trips = () => {
    return (
        <div>
            <h2 className='font-semibold text-midnight text-[16px] mb-3'>Trips</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                {DATA_TRIP.map((ele) => (
                    <TripCard key={ele.id} trip={ele} />
                ))}
            </div>
        </div>
    )
}

export default Trips