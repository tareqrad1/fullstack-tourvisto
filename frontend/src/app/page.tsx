import { redirect } from 'next/navigation'
import { getUserInSession } from './_action'
import Header from '@/components/Header'
import ImagesTour from '@/components/ImagesTour'
import HeadTitle from '@/components/HeadTitle'
import Image from 'next/image'
import axios from 'axios'
import AllTrips from './dashboard/all-trips/_components/AllTrips'
import Link from 'next/link'

const Home = async() => {
    const { token, user } = await getUserInSession()
    if(user?.role === 'admin') {
        return redirect('/dashboard')
    }
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/trips`);
    const data = await res.data;
    return (
        <div>
            <Header user={user} token={token} />
            <main className="container py-10" id="features">
                <ImagesTour />
                {/* start of content */}
                <HeadTitle title='Handpicked Trips' description='Browse well-planned trips designed for different travel styles and interests' />
                <AllTrips initialData={data} limit={4} />
            </main>
            <footer className="container py-5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                <div className="flex items-center gap-2">
                    <Image src="/fi_2200326.svg" alt="logo" width={30} height={30} priority />
                    <h1 className="text-2xl font-bold leading-5 text-midnight">Tourvisto</h1>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-center">
                    <Link href="/terms">
                    <p className="text-[16px] font-normal text-ash hover:underline cursor-pointer">
                        Terms & Condition
                    </p>
                    </Link>
                    <p className="text-[16px] font-normal text-ash hover:underline cursor-pointer">
                    Privacy Policy
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Home