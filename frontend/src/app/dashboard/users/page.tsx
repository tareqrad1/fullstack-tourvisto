import React from 'react'
import type { Metadata } from 'next'
import { UsersTable } from './components/UserTable'

export const metadata: Metadata = {
  title: "All Users - Tourvisto",
  description: "Users - Tourvisto",
  keywords: "users, tourvisto, travel, itineraries, bookings",
  authors: [{ name: "Tourvisto Team" }],
  icons: {
    icon: "/fi_2200326.svg",
  },
}

const UsersPage = () => {
  return (
    <div>
      <div className='py-5'>
        <h1 className='text-2xl font-semibold text-midnight'>Manage Users</h1>
        <p className='text-lg font-normal text-ash'>Filter, sort, and access detailed user profiles</p>
      </div>
      <div>
        <UsersTable />
      </div>
    </div>
  )
}

export default UsersPage