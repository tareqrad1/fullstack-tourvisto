import { redirect } from 'next/navigation'
import { getUserInSession } from './_action'
import Header from '@/components/Header'
import ImagesTour from '@/components/ImagesTour'
import HeadTitle from '@/components/HeadTitle'
import TripCard, { ITrip } from '@/components/TripCard'
import { PaginationDemo } from '@/components/Pagenation'
import Image from 'next/image'

const Home = async() => {
    const { token, user } = await getUserInSession()
    if(user?.role === 'admin') {
        return redirect('/dashboard')
    }
    const res = await fetch('http://localhost:5000/api/trips/', {
        headers: {
            Cookie: `token=${token}`,
        },
    });
    const data = await res.json();
    return (
        <div>
            <Header user={user} token={token} />
            <main className="container py-10">
                <ImagesTour />
                {/* start of content */}
                <div>
                    <HeadTitle title='Handpicked Trips' description='Browse well-planned trips designed for different travel styles and interests' />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                        {data?.trips.map((trip: ITrip) => (
                            <TripCard key={trip._id} trip={trip} />
                        ))}
                    </div>
                    <footer className='border-t-[1px] border-[#EAECF0] flex items-center justify-between p-4 mt-5'>
                        <PaginationDemo />
                    </footer>
                </div>
            </main>
            <footer className='flex justify-between items-center container py-5'>
                <div className='flex items-center gap-2'>
                    <Image src={'/fi_2200326.svg'} alt='logo' width={30} height={30} priority />
                    <h1 className='text-2xl font-bold leading-5 text-midnight'>Tourvisto</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='text-[16px] font-normal text-ash hover:underline cursor-pointer'>Terms & Condition</p>
                    <p className='text-[16px] font-normal text-ash hover:underline cursor-pointer'>Privacy Policy</p>
                </div>
            </footer>
        </div>
    )
}

export default Home