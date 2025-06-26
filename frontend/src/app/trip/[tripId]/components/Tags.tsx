import { ITrip } from '@/components/TripCard'
import Image from 'next/image'
import React from 'react'

const Tags = ({ trip }: { trip: ITrip }): React.JSX.Element => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center mt-6 gap-4">
                <div className="flex flex-wrap gap-3">
                {[trip.travelStyle, trip.budgetEstimate, trip.groupType, trip.interest].map((tag, idx) => (
                    <p
                    key={idx}
                    className="text-sm font-medium rounded-full px-4 py-2"
                    style={{
                        backgroundColor: ['#F7EDF6', '#E9F3FB', '#ECFDF3', '#F0F9FF'][idx],
                        color: ['#C11574', '#175CD3', '#027A48', '#026AA2'][idx],
                    }}
                    >
                    {tag}
                    </p>
                ))}
                </div>

                <div className="flex items-center gap-3">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Image key={i} src="/shape.svg" alt="star" width={18} height={18} />
                    ))}
                </div>
                <p className="bg-[#FFF4ED] text-[#B93815] rounded-full px-4 py-2 text-sm font-semibold">4.9 / 5.0</p>
                </div>
            </div>
    )
}

export default Tags