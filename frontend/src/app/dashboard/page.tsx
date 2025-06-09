import { get } from 'http'
import React from 'react'
import { getUserInSession } from '../_action'
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
    <div>DashboardPage - {user?.name}</div>
  )
}

export default DashboardPage