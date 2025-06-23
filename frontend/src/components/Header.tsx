'use client';

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Header = ({ user, token }: { user: { name: string, avatar: string }, token: string | undefined }): React.JSX.Element => {
    return (
        <header className="relative w-full h-screen overflow-hidden"
        style={{ backgroundImage: "url('/hero-img.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", width: "100%", height: "100vh" }}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        'linear-gradient(104.72deg, rgba(207, 241, 255, 0.8) 14.17%, rgba(255, 255, 255, 0) 54.71%)'
                }}
            />
            <Navbar user={user} token={token} />
            {/* Hero Content */}
            <motion.div className="container absolute top-1/2 left-0 transform -translate-y-1/2 z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
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
            </motion.div>
        </header>
    )
}

export default Header
