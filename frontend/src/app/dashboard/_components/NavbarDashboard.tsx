import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavbarDashboard: React.FC<{user: { name: string }}> = ({ user }: { user: { name: string } }): React.JSX.Element => {
    return (
        <div className='flex flex-col md:flex-row justify-between w-full gap-2 py-5'>
            <div className='flex flex-col'>
                <h1 className='text-xl md:text-2xl font-semibold text-midnight'>Welcome {user.name.split(' ')[0]} 👋</h1>
                <p className='font-normal text-sm md:text-[18px] leading-6 text-ash'>Track activity, trends, and popular destinations in real time</p>
            </div>
            <div>
                <Button className='w-full rounded-[8px] p-[12px 16px] text-[16px] leading-[20px] tracking-[0px] bg-blueAccent hover:bg-blueAccent-hover'><Plus className='mr-0' /><Link href='/dashboard/create-trip'>Create a Trip</Link></Button>
            </div>
        </div>
    )
}

export default NavbarDashboard