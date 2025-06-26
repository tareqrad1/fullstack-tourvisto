import React from 'react';
import { getUserInSession } from '../_action';
import { redirect } from 'next/navigation';
import NavbarDashboard from './_components/NavbarDashboard';
import TotalCards from './_components/section_one/TotalCards';
import Trips from './_components/section_two/Trips';
import ShowUsers from './_components/section_three/page';

const DashboardPage: React.FC = async() => {
  const { token, user } = await getUserInSession();
  if(!token) {
    return redirect('/login')
  }else {
    if(user.role === 'user') {
      return redirect('/')
    }
  }
  return (
    <div className='bg-[#FFFFFF]'>
      <div>
        <NavbarDashboard user={user} />
        <main className='space-y-4'>
          <TotalCards />
          <Trips />
          <ShowUsers />
        </main>
      </div>
    </div>
  )
}

export default DashboardPage