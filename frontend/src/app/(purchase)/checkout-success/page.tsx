'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import axios from 'axios';


const SuccessPage = () => {
    const [isProcess, setIsProcess] = useState<boolean>(false);
    useEffect(() => {
        const handleCheckoutSuccess = async(sessionId: string) => {
            setIsProcess(true);
            try {
                await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/payments/checkout-success`, { sessionId });
                setIsProcess(false);
            } catch (error) {
                alert('Something went wrong. Please try again.');
            }finally {
                setIsProcess(false);
            }
        }
        const searchParams = new URLSearchParams(window.location.search).get('session_id');
        if (searchParams) {
			handleCheckoutSuccess(searchParams);
		} else {
			setIsProcess(false);
		}
    },[])

    if (isProcess) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-lg text-gray-700 font-medium">Processing your payment...</p>
            </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9f9] px-4 text-center relative overflow-hidden">
        {/* Confetti background (optional placeholder) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Add confetti as animated SVG or absolute shapes if needed */}
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-md w-full bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <div className="flex justify-center mb-4">
                <Image src={'/success.svg'} alt='success' width={100} height={100} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-midnight mb-2">Thank You & Welcome Aboard!</h1>
            <p className="text-sm text-gray-600 mb-6">
            Your trip's booked — can't wait to have you on this adventure! 🌍 Get ready to explore & make memories.✨
            </p>
            <div className="flex flex-col gap-3">
            <Link href="/">
                <Button variant="outline" className="w-full">
                    ← Return to homepage
                </Button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default SuccessPage;