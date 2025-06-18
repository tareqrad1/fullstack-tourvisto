import Image from 'next/image'
import React from 'react'
import Card from './Card'

const TotalCards = (): React.JSX.Element => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Card title='Total Users' total={'12,450'} percent={12} imageChart='/_Chart.svg' arrowIcon='/arrow-up.svg' color='#027A48' />
            <Card title='Total Trips' total={'3,210'} percent={3} imageChart='/_ChartDown.svg' arrowIcon='/arrow-down.svg' color='#B42318' />
            <Card title='Active Users Today' total={'520'} percent={7} imageChart='/_Chart.svg' arrowIcon='/arrow-up.svg' color='#027A48' />

            {/* <div className='bg-[#FFFFFF] p-6 shadow-lg rounded-[20px] space-y-4'>
                <h3 className='font-medium text-[16px] text-[#2E2C48]'>Total Users</h3>
                <div className='flex justify-between items-center'>
                    <div className='space-y-2'>
                        <h1 className='text-midnight font-semibold text-[36px] leading-11'>12,450</h1>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-1'>
                                <Image src={'/arrow-up.svg'} alt='arrow-up' width={13} height={13} priority />
                                <p className='text-sm text-[#027A48]'>12%</p>
                            </div>
                            <p className='text-ash text-sm leading-3.5 max-w-full'>vs last month</p>
                        </div>
                    </div>
                    <div className='w-[128px] h-[64px]'>
                        <img src={'/_Chart.svg'} alt='Chart'/>
                    </div>
                </div>
            </div> */}
            {/* <div className='bg-[#FFFFFF] p-6 shadow-lg rounded-[20px] space-y-4'>
                <h3 className='font-medium text-[16px] text-[#2E2C48]'>Total Trips</h3>
                <div className='flex justify-between items-center'>
                    <div className='space-y-2'>
                        <h1 className='text-midnight font-semibold text-[36px] leading-11'>3,210</h1>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-1'>
                                <Image src={'/arrow-down.svg'} alt='arrow-up' width={13} height={13} priority />
                                <p className='text-sm text-[#B42318]'>3%</p>
                            </div>
                            <p className='text-ash text-sm leading-3.5 max-w-full'>vs last month</p>
                        </div>
                    </div>
                    <div className='w-[128px] h-[64px]'>
                        <img src={'/_ChartDown.svg'} alt='Chart' />
                    </div>
                </div>
            </div> */}
            {/* <div className='bg-[#FFFFFF] p-6 shadow-lg rounded-[20px] space-y-4'>
                <h3 className='font-medium text-[16px] text-[#2E2C48]'>Active Users Today</h3>
                <div className='flex justify-between items-center'>
                    <div className='space-y-2'>
                        <h1 className='text-midnight font-semibold text-[36px] leading-11'>520</h1>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-1'>
                                <Image src={'/arrow-up.svg'} alt='arrow-up' width={13} height={13} priority />
                                <p className='text-sm text-[#027A48]'>7%</p>
                            </div>
                            <p className='text-ash text-sm leading-3.5 max-w-full'>vs last month</p>
                        </div>
                    </div>
                    <div className='w-[128px] h-[64px]'>
                        <img src={'/_Chart.svg'} alt='Chart'/>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default TotalCards