import Image from 'next/image'
import React from 'react'

const LeftSide = () => {
    return (
        <div className='bg-[#FFFFFF] rounded-[20px] py-[16px] px-[8px]'>
            <div className='md:px-6'>
                <div className='border-b-[1px] border-[#E5E5EF] pb-4'>
                    <h1 className='text-2xl font-semibold'>Latest user signups</h1>
                </div>
                <div className='flex justify-between items-center py-5'>
                    <p className='font-normal text-sm text-ash'>Name</p>
                    <p className='font-normal text-sm text-ash'>Itinerary Created</p>
                </div>
                {/* content */}
                <div className='space-y-5'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <Image src={'/avatar.png'} alt='user' width={40} height={40} />
                            <h2 className='font-semibold text-sm leading-[18px]'>James Anderson</h2>
                        </div>
                        <p className='text-sm font-normal leading-5'>12</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <Image src={'/avatar.png'} alt='user' width={40} height={40} />
                            <h2 className='font-semibold text-sm leading-[18px]'>James Anderson</h2>
                        </div>
                        <p className='text-sm font-normal leading-5'>12</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <Image src={'/avatar.png'} alt='user' width={40} height={40} />
                            <h2 className='font-semibold text-sm leading-[18px]'>James Anderson</h2>
                        </div>
                        <p className='text-sm font-normal leading-5'>12</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <Image src={'/avatar.png'} alt='user' width={40} height={40} />
                            <h2 className='font-semibold text-sm leading-[18px]'>James Anderson</h2>
                        </div>
                        <p className='text-sm font-normal leading-5'>12</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide