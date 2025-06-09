
import React from 'react'
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ButtonComponent from './_components/button/Button';
import { getUserInSession } from '@/app/_action';
import { redirect } from 'next/navigation';

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const ReadyPage: React.FC = async() => {
    const { token, user } = await getUserInSession();
    if(token) {
        if(user.role === 'admin') {
            return redirect('/dashboard');
        }
        return redirect('/');
    }
    return (
        <div>
            <Image
                src="/bg.png"
                alt="Background"
                fill
                loading='lazy'
                className="object-cover"
                style={{ zIndex: -1}}
            />
            <div className='flex justify-center items-center px-4 h-screen z-20'>
                <div className='bg-[#FFFFFF] w-fit h-fit rounded-2xl overflow-hidden px-4 py-9'>
                    <div className="logo flex gap-2 mb-6 justify-center">
                        <Image src="/fi_2200326.svg"
                            alt="logo"
                            width={30}
                            height={30}
                            priority
                            className="object-cover"
                        />
                        <h1 className={`text-3xl text-midnight tracking-wider ${plusJakartaSans.className} font-[700] text-3xl`}>Tourvisto</h1>
                    </div>
                    <div className='max-w-[423px] text-center space-y-2'>
                        <h3 className='text-[25px] text-midnight font-semibold'>Start Your Travel Journey</h3>
                        <p className='text-sm md:text-[18px] font-[400] text-ash leading-[28px]'>Sign in with Google to explore AI-generated itineraries, trending destinations, and much more</p>
                    </div>
                    <div className='mt-5 w-full'>
                        <ButtonComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadyPage