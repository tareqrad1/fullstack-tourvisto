// 'use client'
import { redirect } from 'next/navigation'
import { getUserInSession } from './_action'
import Image from 'next/image'
import Header from '@/components/Header'
import ImagesTour from '@/components/ImagesTour'
import HeadTitle from '@/components/HeadTitle'
import TripCard from '@/components/TripCard'

const Home = async() => {
    const { token, user } = await getUserInSession()
    if(user?.role === 'admin') {
        return redirect('/dashboard')
    }
    return (
        <div>
            <Header user={user} token={token} />
            <main className="container py-10">
                <ImagesTour />
                {/* start of content */}
                <div className=''>
                    <HeadTitle title='Handpicked Trips' description='Browse well-planned trips designed for different travel styles and interests' />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <TripCard trip={{id: index, title: 'Thornridge Cir. Shiloh', body: 'St George’s Ln Singapore', key1: 'Mountains', key2: 'City'}} key={index} />
                        ))}
                    </div>
                    <footer className='bg-[#FFFFFF] border-t-[1px] border-[#EAECF0] flex items-center justify-between p-4 mt-5'>
                        <div style={{ boxShadow: '0px 12px 16px -4px #1018281A' }} className='bg-[#FFFFFF] shadow-sm py-[8px] px-[14px] rounded-full cursor-pointer'>
                            <span className='flex items-center gap-1.5 text-midnight'><img src="/arrow-left.svg" alt="" />Previous</span>
                        </div>
                        <div style={{ boxShadow: '0px 12px 16px -4px #1018281A' }} className='bg-[#FFFFFF] shadow-sm py-[8px] px-[14px] rounded-full cursor-pointer'>
                            <span className='flex items-center gap-1.5 text-midnight'>Next<img src="/arrow-right.svg" alt="" /></span>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    )
}

export default Home