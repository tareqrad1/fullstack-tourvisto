import { getUserInSession } from '@/app/_action';
// import { Button } from '@/components/ui/button';
// import axios from 'axios';
// import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';
import Navbar from './components/Navbar';
// import Tags from './components/Tags';
// import Map from '@/components/MapLeaflet';
// import Link from 'next/link';
// import PayButton from './components/PayButton';
// import { Trash } from 'lucide-react';
import TripContent from './components/TripContent';

const TripPage = async ({ params }: { params: { tripId: string } }) => {
    const { user, token } = await getUserInSession();
    if (!token) return redirect('/login');

    const { tripId } = params;
    
    const res = await fetch(`http://localhost:5000/api/trips/${tripId}`, {
        headers: {
            Cookie: `token=${token}`,
        }
    });
    const data = await res.json();
    return (
        <div>
            <Navbar user={user} />
        {/* Main Content */}
        <TripContent initialData={data} user={user} />
        </div>
    );
};

export default TripPage;
