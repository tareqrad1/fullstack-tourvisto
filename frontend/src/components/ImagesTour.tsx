import Image from 'next/image';
import React from 'react';
import HeadTitle from './HeadTitle';

const ImagesTour = (): React.JSX.Element => {
    return (
        <div>
                {/* Header */}
                <HeadTitle title='Featured Travel Destinations' description='Check out some of the best places you can visit around the world.' />
                <div className="grid grid-cols-1 lg:grid-cols-9 gap-5">
                    {/* Left Section */}
                    <div className="lg:col-span-6 space-y-4 selection:select-none">
                        <div className="w-full h-[270px] relative rounded-xl overflow-hidden">
                            <Image
                            src="/card-img-1.png"
                            alt="card"
                            fill
                            className="object-cover"
                            priority
                            />
                            <span className='absolute top-4 left-4 text-[#FF543D] bg-white px-3 py-1 rounded-full text-sm font-bold shadow-sm'>3.5</span>
                            <div className='flex flex-col font-normal text-lg text-[#FFFFFF] absolute bottom-4 left-4'>
                                <h1 className='font-bold text-3xl text-[#FFFFFF]'>Barcelona Tour</h1>
                                <p className='flex items-center gap-1'><img src={'/avator.svg'} alt='avatar' width={28.571428298950195} height={28.571428298950195} />196 Activities</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative h-[200px] md:h-[390px] rounded-xl overflow-hidden">
                            <Image
                                src="/card-img-2.png"
                                alt="card"
                                fill
                                className="object-cover"
                                priority
                            />
                            <span className='absolute top-4 left-4 text-[#FF543D] bg-white px-3 py-1 rounded-full text-sm font-bold shadow-sm'>3.5</span>
                            <div className='flex flex-col font-normal text-lg text-[#FFFFFF] absolute bottom-4 left-4'>
                                <h1 className='font-bold text-3xl text-[#FFFFFF]'>London, United State</h1>
                                <p className='flex items-center gap-1 text-[16px]'><img src={'/avator.svg'} alt='avatar' width={28.571428298950195} height={28.571428298950195} />220 Activities</p>
                            </div>
                            </div>
                            <div className="flex-1 relative h-[200px] md:h-[390px] rounded-xl overflow-hidden">
                            <Image
                                src="/card-img-3.svg"
                                alt="card"
                                fill
                                className="object-cover"
                                priority
                            />
                            <span className='absolute top-4 left-4 text-[#FF543D] bg-white px-3 py-1 rounded-full text-sm font-bold shadow-sm'>3.5</span>
                            <div className='flex flex-col font-normal text-lg text-[#FFFFFF] absolute bottom-4 left-4'>
                                <h1 className='font-bold text-3xl text-[#FFFFFF]'>Australia Tour</h1>
                                <p className='flex items-center gap-1 text-[16px]'><img src={'/avator.svg'} alt='avatar' width={28.571428298950195} height={28.571428298950195} />196 Activities</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="lg:col-span-3 space-y-4">
                        <div className="relative h-[219px] rounded-xl overflow-hidden">
                            <Image
                                src={`/card-img-4.svg`}
                                alt={`card`}
                                fill
                                className="object-cover"
                                priority
                            />
                            <span className='absolute top-4 left-4 text-[#FF543D] bg-white px-3 py-1 rounded-full text-sm font-bold shadow-sm'>3.5</span>
                            <div className='flex flex-col font-normal text-lg text-[#FFFFFF] absolute bottom-4 left-4'>
                                <h1 className='font-bold text-xl text-[#FFFFFF]'>Australia Tour</h1>
                                <p className='flex items-center gap-1 text-sm'><img src={'/avator.svg'} alt='avatar' width={24.571428298950195} height={24.571428298950195} />196 Activities</p>
                            </div>
                        </div>
                        <div className="relative h-[219px] rounded-xl overflow-hidden">
                            <Image
                                src={`/card-img-5.svg`}
                                alt={`card`}
                                fill
                                className="object-cover"
                                priority
                            />
                            <span className='absolute top-4 left-4 text-[#FF543D] bg-white px-3 py-1 rounded-full text-sm font-bold shadow-sm'>3.5</span>
                            <div className='flex flex-col font-normal text-lg text-[#FFFFFF] absolute bottom-4 left-4'>
                                <h1 className='font-bold text-xl text-[#FFFFFF]'>Japan Tour</h1>
                                <p className='flex items-center gap-1 text-sm'><img src={'/avator.svg'} alt='avatar' width={24.571428298950195} height={24.571428298950195} />196 Activities</p>
                            </div>
                        </div>
                        <div className="relative h-[206px] rounded-xl overflow-hidden">
                            <Image
                                src={`/card-img-6.svg`}
                                alt={`card`}
                                fill
                                className="object-cover"
                                priority
                            />
                            <span className='absolute top-4 left-4 text-[#FF543D] bg-white px-3 py-1 rounded-full text-sm font-bold shadow-sm'>3.5</span>
                            <div className='flex flex-col font-normal text-lg text-[#FFFFFF] absolute bottom-4 left-4'>
                                <h1 className='font-bold text-xl text-[#FFFFFF]'>Japan Tour</h1>
                                <p className='flex items-center gap-1 text-sm'><img src={'/avator.svg'} alt='avatar' width={24.571428298950195} height={24.571428298950195} />196 Activities</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ImagesTour