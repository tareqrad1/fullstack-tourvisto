import React from 'react';
import type { Metadata } from 'next';
import HeadTitle from '@/components/HeadTitle';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';
import AllTrips from './_components/AllTrips';

export const metadata: Metadata = {
  title: "All Trips - Tourvisto",
  description: "Trips - Tourvisto",
  keywords: "trips, tourvisto, travel, itineraries, bookings",
  authors: [{ name: "Tourvisto Team" }],
  icons: { icon: "/fi_2200326.svg" },
};

const AllTripsPage = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/trips`);
  const data = await res.data;

  return (
    <div>
      <div className='flex justify-between items-center'>
        <HeadTitle title='Trips' description='View and generate AI travel plans' />
        <Button className='rounded-[8px] py-3 px-4 text-[16px] leading-[20px] tracking-[0px] bg-blueAccent hover:bg-blueAccent-hover'>
          <Plus className='mr-0' />
          <Link href='/dashboard/create-trip' className="ml-2">Create a Trip</Link>
        </Button>
      </div>

      <AllTrips initialData={data} limit={8} />
    </div>
  );
};

export default AllTripsPage;
