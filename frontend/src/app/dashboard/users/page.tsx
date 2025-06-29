import React from 'react'
import type { Metadata } from 'next'
import { UsersTable } from './_components/UserTable'
import { getUserInSession } from '@/app/_action'
import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const metadata: Metadata = {
  title: "All Users - Tourvisto",
  description: "Users - Tourvisto",
  keywords: "users, tourvisto, travel, itineraries, bookings",
  authors: [{ name: "Tourvisto Team" }],
  icons: {
    icon: "/fi_2200326.svg",
  },
}

const UsersPage = async() => {
  const { token } = await getUserInSession();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    headers: {
      Cookie: `token=${token}`,
    },
    cache: 'no-store'
  });
  const data = await res.json();
  return (
    <div>
      <div className='py-5'>
        <h1 className='text-2xl font-semibold text-midnight'>Manage Users</h1>
        <p className='text-lg font-normal text-ash'>Filter, sort, and access detailed user profiles</p>
      </div>
      <div>
        <UsersTable initialData={data} />
      </div>
    </div>
  )
}

export default UsersPage