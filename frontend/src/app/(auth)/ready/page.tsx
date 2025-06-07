'use client';

import React from 'react'
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { Plane  } from 'lucide-react'
import { useRouter } from 'next/navigation';

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const ReadyPage: React.FC = (): React.JSX.Element => {
    const router = useRouter();
    function handleSubmit() {
        router.push('/ready/register');
    }
    return (
        <div>
            <Image
                src="/bg.png"
                alt="Background"
                fill
                priority
                className="object-cover"
                style={{ zIndex: -1}}
            />
            <div className='flex justify-center items-center px-4 h-screen z-20'>
                <div className='bg-[#FFFFFF] w-fit h-fit rounded-2xl overflow-hidden px-4 py-8'>
                    <div className="logo flex gap-2 mb-4 justify-center">
                        <Image src="/fi_2200326.svg"
                            alt="logo"
                            width={30}
                            height={30}
                            priority
                            className="object-cover"
                        />
                        <h1 className={`text-3xl text-midnight ${plusJakartaSans.className} font-[700] text-3xl`}>Tourvisto</h1>
                    </div>
                    <div className='max-w-[423px] text-center space-y-2'>
                        <h3 className='text-[28px] text-midnight font-semibold'>Start Your Travel Journey</h3>
                        <p className='text-sm md:text-[18px] font-[400] text-ash leading-[28px]'>Sign in with Google to explore AI-generated itineraries, trending destinations, and much more</p>
                    </div>
                    <div className='mt-4 w-full'>
                        <Button className='bg-blueAccent hover:bg-blueAccent-hover w-full text-white font-semibold' onClick={handleSubmit}><Plane className='flex justify-center items-center w-20 h-20' />Free Register</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadyPage