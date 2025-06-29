import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const UsersSkeletons = (): React.JSX.Element => {
    return (
        <div className="bg-[#FFFFFF] rounded-[20px] py-[16px] px-[8px]">
            <div className="md:px-6">
                <div className="border-b-[1px] border-[#E5E5EF] pb-4">
                    <Skeleton className="h-6 w-48" />
                </div>
                <div className="flex justify-between items-center py-5">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-28" />
                </div>
                <div className="space-y-5">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-4 w-32" />
                    </div>
                    <Skeleton className="h-4 w-10" />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default UsersSkeletons