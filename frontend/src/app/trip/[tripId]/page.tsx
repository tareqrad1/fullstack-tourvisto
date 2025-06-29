import { getUserInSession } from '@/app/_action';
import { redirect } from 'next/navigation';
import React from 'react';
import Navbar from './components/Navbar';
import TripContent from './components/TripContent';

const TripPage = async ({ params }: { params: { tripId: string } }) => {
    const { user, token } = await getUserInSession();
    if (!token) return redirect('/login');

    const { tripId } = params;
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trips/${tripId}`, {
        headers: {
            Cookie: `token=${token}`,
        }
    });
    const data = await res.json();
    return (
        <div>
            <Navbar user={user} />
            <TripContent initialData={data} user={user} />
        </div>
    );
};

export default TripPage;
