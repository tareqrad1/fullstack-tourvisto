'use client';

import { useFetch } from '@/hooks/useFetch';
import { formatDate } from '@/utils/date';
import Image from 'next/image'
import React, { use } from 'react'
import UsersSkeletons from './_components/UsersSkeletons';

type UserTypes = {
    name: string;
    email: string;
    avatar: string;
    role: string;
    createdAt: string;
}
interface TLatestUsers {
    latestUsers: UserTypes[]
}
const LeftSide = (): React.JSX.Element => {
    const { data: users, isLoading } = useFetch<TLatestUsers>('/users/latest');
    
    if(isLoading) {
        return <UsersSkeletons />
    }
    return (
        <div className='bg-[#FFFFFF] rounded-[20px] py-[16px] px-[8px]'>
            <div className='md:px-6'>
                <div className='border-b-[1px] border-[#E5E5EF] pb-4'>
                    <h1 className='text-2xl font-semibold'>Latest user signups</h1>
                </div>
                <div className='flex justify-between items-center py-5'>
                    <p className='font-normal text-sm text-ash'>Name</p>
                    <p className='font-normal text-sm text-ash'>Created</p>
                </div>
                {/* content */}
                <div className='space-y-5'>
                    {users?.latestUsers.map((user: UserTypes) => (
                        <div className='flex justify-between items-center' key={user.name}>
                            <div className='flex gap-2 items-center'>
                                <Image src={user.avatar} alt='user' width={40} height={40} className='rounded-full w-[40px] h-[40px]' />
                                <h2 className='font-semibold text-sm leading-[18px]'>{user.name}</h2>
                            </div>
                            <p className='font-semibold text-sm leading-[18px]'>{formatDate(user.createdAt)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LeftSide