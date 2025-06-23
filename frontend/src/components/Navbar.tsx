'use client';

import { useAuth } from '@/hooks/useAuth'
import { Bell, LogIn } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast'
import React from 'react'
import { Button } from './ui/button';

const Navbar = ({ user, token, style }: { user: { name: string, avatar: string }, token: string | undefined, style?: string }) => {
    const isAuthenticated: boolean = token ? true : false;
    const { logout } = useAuth();
    const router = useRouter();
    async function handleLogout() {
        await logout();
        router.refresh();
        toast.success('Logout successfully');
    }
    return (
            <div className="container flex justify-between items-center absolute top-0 left-0 right-0 z-20 py-5">
                <div className="flex items-center gap-2">
                    <Image src="/fi_2200326.svg" alt="logo" width={30} height={30} />
                    <h1 className="text-3xl font-semibold text-midnight">Tourvisto</h1>
                </div>
                {isAuthenticated ? (
                    <div className="flex items-center gap-2">
                        <Link href={'/booking'}>
                            <button className="relative hover:bg-none cursor-pointer mr-2">
                                <Bell className="w-6 h-6 text-[#e6e6e6]" />
                                <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
                            </button>
                        </Link>
                        <h2 className={`text-sm font-normal ${style ? style : 'text-white'}`}>{user.name}</h2>
                        <Image src={user.avatar} alt="avatar" width={40} height={40} className='rounded-full' priority />
                        <div className="bg-white/30 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer ml-3" onClick={handleLogout}>
                            <Image src="/logout.svg" alt="logout" width={24} height={24} priority />
                        </div>
                    </div>
                ) : (
                    <Link
                        href="/login"
                        className="flex items-center gap-2 bg-white/30 hover:bg-white/40 transition text-white px-4 py-2 rounded-full shadow-md backdrop-blur-sm"
                    >
                        <LogIn className="w-4 h-4" />
                        <span className="text-sm font-medium">Login</span>
                    </Link>
                )}
            </div>
    )
}

export default Navbar