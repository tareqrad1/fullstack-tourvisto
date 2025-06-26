'use client';

import React from 'react'
import Card from './Card'
import { useFetch } from '@/hooks/useFetch'

interface TUsers {
    totalUsers: number;
}
interface TTips {
    totalTrips: number;
}
interface TActiveUsers {
    count: number;
}
const TotalCards = (): React.JSX.Element => {
    const { data: users } = useFetch<TUsers>('/users');
    const { data: trips } = useFetch<TTips>('/trips');
    const { data: activeUsers } = useFetch<TActiveUsers>('/users/active');
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Card title='Total Users' total={users?.totalUsers} percent={12} imageChart='/_Chart.svg' arrowIcon='/arrow-up.svg' color='#027A48' />
            <Card title='Total Trips' total={trips?.totalTrips} percent={3} imageChart='/_ChartDown.svg' arrowIcon='/arrow-down.svg' color='#B42318' />
            <Card title='Active Users Today' total={activeUsers?.count} percent={7} imageChart='/_Chart.svg' arrowIcon='/arrow-up.svg' color='#027A48' />
        </div>
    )
}

export default TotalCards