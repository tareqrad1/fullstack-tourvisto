import Image from 'next/image'
import React from 'react'

type TCard = {
    title: string;
    total: string;
    percent: number;
    imageChart: string;
    arrowIcon: string;
    color: string;
};

const Card: React.FC<TCard> = ({ title, total, percent, imageChart, arrowIcon, color }: TCard): React.JSX.Element => {
    return (
        <div className='bg-[#FFFFFF] p-6 shadow-lg rounded-[20px] space-y-4'>
            <h3 className='font-medium text-[16px] text-[#2E2C48]'>{title}</h3>
            <div className='flex justify-between items-center'>
                <div className='space-y-2'>
                    <h1 className='text-midnight font-semibold text-[36px] leading-11'>{total}</h1>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-1'>
                            <Image src={arrowIcon} alt='arrow' width={13} height={13} priority />
                            <p className={`text-[${color}] text-sm`}>{percent}%</p>
                        </div>
                    <p className='text-ash text-sm leading-3.5 max-w-full'>vs last month</p>
                    </div>
                </div>
                <div className='w-[128px] h-[64px]'>
                    <img src={imageChart} alt='Chart'/>
                </div>
            </div>
        </div>
    )
}

export default Card