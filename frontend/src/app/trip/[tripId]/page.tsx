import { getUserInSession } from '@/app/_action';
import { redirect } from 'next/navigation';
import Navbar from './components/Navbar';
import TripContent from './components/TripContent';

const TripPage = async ({ params }: { params: Promise<{tripId: string}> }) => {
    const { user, token } = await getUserInSession();
    if (!token) return redirect('/login');

    const { tripId } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/trips/${tripId}`, {
        headers: {
        Cookie: `token=${token}`,
        },
    });
    const data = await res.json();

    return (
        <>
        <Navbar user={user} />
        <TripContent initialData={data} user={user} />
        </>
    );
};

export default TripPage;