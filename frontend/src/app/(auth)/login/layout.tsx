import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tourvisto – Login',
  description: 'Login to your Tourvisto account to access your travel itineraries and bookings.',
  keywords: 'login, tourvisto, travel, itineraries, bookings',
  authors: [{ name: 'Tourvisto Team' }],
  icons: {
    icon: '/fi_2200326.svg',
  },
}
const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout