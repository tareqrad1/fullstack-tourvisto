'use client';

import { Booking } from '@/app/booking/page';
import { Button } from '@/components/ui/button'
import { useFetch } from '@/hooks/useFetch';
import { Bell } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar: React.FC<{user: { name: string, avatar: string }}> = ({ user }: { user: { name: string, avatar: string } }): React.JSX.Element => {
    const { data } = useFetch<{ bookings: Booking[] }>('/bookings');
    return (
        <nav className="container flex justify-between items-center py-5">
            <div className="flex items-center gap-2">
                <Image src="/fi_2200326.svg" alt="logo" width={30} height={30} />
                <h1 className="text-2xl md:text-3xl font-semibold text-midnight">Tourvisto</h1>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-midnight hidden sm:inline">{user.name}</span>
                <Image src={user.avatar} alt="avatar" width={40} height={40} className="rounded-full w-[35px] h-[35px]" />
                <Link href={'/booking'}>
                    <Button variant="ghost" className="relative">
                        <Bell className="w-6 h-6 text-midnight" />
                        {data?.bookings.length && (
                            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
                        )}
                    </Button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar