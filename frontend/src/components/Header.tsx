'use client';

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { LogIn } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Header = ({ user, token }: { user: { name: string, avatar: string }, token: string | undefined }): React.JSX.Element => {
    const isAuthenticated: boolean = token ? true : false;
    const { logout } = useAuth();
    const router = useRouter();
    async function handleLogout() {
        await logout();
        router.refresh();
        toast.success('Logout successfully');
    }
    return (
        <header className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <Image
                src="/hero-img.png"
                alt="Background"
                fill
                priority
                className="object-cover z-0"
            />
            {/* Overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        'linear-gradient(104.72deg, rgba(207, 241, 255, 0.8) 14.17%, rgba(255, 255, 255, 0) 54.71%)'
                }}
            />
            <div className="container flex justify-between items-center absolute top-0 left-0 right-0 z-20 py-5">
                <div className="flex items-center gap-2">
                    <Image src="/fi_2200326.svg" alt="logo" width={30} height={30} />
                    <h1 className="text-3xl font-semibold text-midnight">Tourvisto</h1>
                </div>
                {isAuthenticated ? (
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm text-white font-normal">{user.name}</h2>
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
            {/* Hero Content */}
            <div className="container absolute top-1/2 left-0 transform -translate-y-1/2 z-20">
                <div className="space-y-4 text-center md:text-start">
                    <h1 className="font-bold m-0 text-[50px] md:text-[72px] leading-[110%] text-midnight">Plan Your</h1>
                    <h1 className="font-bold m-0 text-[50px] md:text-[72px] leading-[110%] text-midnight">Trip with Ease</h1>
                    <p className="text-lg font-normal text-[#2E2C48] max-w-xl mt-2">
                        Customize your travel itinerary in minutes—pick your destination, set your preferences, and explore with confidence.
                    </p>
                </div>
                <div className="mt-6 flex justify-center md:justify-start items-center">
                    <Button className="bg-blueAccent hover:bg-blueAccent-hover text-white text-lg font-semibold py-4 px-14">
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
