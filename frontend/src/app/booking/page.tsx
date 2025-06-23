'use client';

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Booking {
  _id: string;
  tripTitle: string;
  location: string;
  image: string;
  date: string;
  guests: number;
  price: number;
}

const BookingsPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  useEffect(() => {
    // Fetch bookings from your API
    fetch('http://localhost:5000/api/bookings/', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setBookings(data.bookings || []));
  }, []);

  return (
    <div className="container py-8">
      {/* Navbar Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-midnight">My Bookings</h1>
        <div>
          <Link href={'/'} className="text-sm font-medium text-midnight underline">back</Link>
          <Button variant="ghost" className="relative">
            <Bell className="w-6 h-6 text-midnight" />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
          </Button>
        </div>
      </div>

      {/* Bookings List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <Card key={booking._id} className="shadow-md hover:shadow-lg transition-all">
              <CardHeader className="p-0">
                <Image
                  src={booking.image}
                  alt={booking.tripTitle}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-md"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl font-semibold text-midnight mb-2">
                  {booking.tripTitle}
                </CardTitle>
                <p className="text-ash text-sm mb-1">📍 {booking.location}</p>
                <p className="text-ash text-sm mb-1">🗓️ {booking.date}</p>
                <p className="text-ash text-sm mb-1">👤 {booking.guests} guest(s)</p>
                <p className="text-blueAccent font-semibold mt-2">${booking.price}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-ash col-span-full">No bookings yet.</p>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
