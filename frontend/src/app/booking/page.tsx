'use client';

import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useFetch } from '@/hooks/useFetch';
import { formatDate } from '@/utils/date';

export interface Booking {
  _id: string;
  trip: {
    _id: string;
    title: string;
    country: string;
    images: string[];
    date: string;
    guests: number;
    price: number;
    startDate: string;
    availableSeats: number;
  };
}

const BookingsPage = () => {
  const { data, isLoading } = useFetch<{ bookings: Booking[] }>('/bookings');

  return (
    <div className="container py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-midnight">My Bookings</h1>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm font-medium text-blueAccent underline">
            ← Back
          </Link>
          <Button variant="ghost" className="relative">
            <Bell className="w-6 h-6 text-midnight" />
            {data?.bookings.length && (
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
            )}
          </Button>
        </div>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-blueAccent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Bookings */}
      {!isLoading && data?.bookings?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-[20px] shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="relative w-full h-[190px]">
                <Image
                  src={booking.trip.images[0]}
                  alt={booking.trip.title}
                  fill
                  className="object-cover rounded-t-[20px]"
                />
              </div>

              <div className="p-4 space-y-3">
                <Link href={`/trip/${booking.trip._id}`}>
                  <h2 className="text-lg font-semibold text-midnight">{booking.trip.title}</h2>
                </Link>

                <div className="flex items-start gap-2 text-sm text-gray-500">
                  <img src="/location.svg" alt="location icon" className="mt-1 w-4 h-4" />
                  <span>{booking.trip.country}</span>
                </div>

                <div className="text-sm text-gray-500">
                  🗓️ {formatDate(booking.trip.startDate)}
                </div>

                <div className="text-sm text-gray-500">
                  👤 {booking.trip.guests} guest(s)
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-[#E0F2FE] text-[#0284C7] text-xs px-3 py-1 rounded-full">
                    {booking.trip.guests} Guests
                  </span>
                  <span className="bg-[#FEF9C3] text-[#CA8A04] text-xs px-3 py-1 rounded-full">
                    Starting {formatDate(booking.trip.startDate)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : !isLoading ? (
        <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
          <p className="mt-4 text-lg">No bookings yet.</p>
        </div>
      ) : null}
    </div>
  );
};

export default BookingsPage;