import React from 'react';
import { getUserInSession } from '../_action';
import { redirect } from 'next/navigation';

const DashboardPage = async() => {
  const {token, user} = await getUserInSession();
  if(!token) {
    return redirect('/login')
  }else {
    if(user.role === 'user') {
      return redirect('/')
    }
  }
  return (
    <div className='h-screen bg-[#FFFFFF]'>
      <div className=''>
        <div className='w-full'>
          <h1>Dashboard content</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A natus fugiat eos praesentium nam maiores, modi illum impedit, eaque dolores incidunt quos, quas velit. Ad assumenda perspiciatis ex dolorum accusantium!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vitae, quam dolores in optio dolorem repudiandae adipisci? Illo, unde. Repudiandae quia impedit officia? Sit, sed nostrum illo esse accusantium ex!</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage