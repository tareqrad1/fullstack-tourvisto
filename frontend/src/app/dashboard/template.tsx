import React from 'react'
import SideBar from './_components/SideBar'
import { getUserInSession } from '../_action'
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dashboard - Tourvisto",
    description: "Dashboard - Tourvisto",
    keywords: "dashboard, tourvisto, travel, itineraries, bookings",
    authors: [{ name: "Tourvisto Team" }],
    icons: {
        icon: "/fi_2200326.svg",
    },
}

const layout = async({ children }: Readonly<{ children: React.ReactNode }>) => {
    const { token, user } = await getUserInSession();
    if(!token) {
        return redirect('/login')
    }
    return (
        <div className='h-screen w-full bg-[#FFFFFF]'>
            <div className='block md:flex'>
                <div>
                    <SideBar user={user} />
                </div>
                <div className='w-[100%] px-3 md:px-6 lg:px-9'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout