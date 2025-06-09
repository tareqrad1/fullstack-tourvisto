import React from 'react'
import SideBar from './_components/SideBar'
import { getUserInSession } from '../_action'
import { redirect } from 'next/navigation';

const layout = async({ children }: Readonly<{ children: React.ReactNode }>) => {
    const { token, user } = await getUserInSession();
    if(!token) {
        return redirect('/login')
    }
    return (
        <div className='h-screen bg-[#FFFFFF]'>
            <div className='flex gap-4'>
                <div>
                    <SideBar user={user} />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout