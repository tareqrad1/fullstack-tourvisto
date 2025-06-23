import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const SuccessPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9f9] px-4 text-center relative overflow-hidden">
        {/* Confetti background (optional placeholder) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Add confetti as animated SVG or absolute shapes if needed */}
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-md w-full bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <div className="flex justify-center mb-4">
                {/* <CheckCircle className="text-green-500 w-16 h-16" /> */}
                <Image src={'/success.svg'} alt='success' width={100} height={100} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-midnight mb-2">Thank You & Welcome Aboard!</h1>
            <p className="text-sm text-gray-600 mb-6">
            Your trip's booked — can't wait to have you on this adventure! 🌍 Get ready to explore & make memories.✨
            </p>
            <div className="flex flex-col gap-3">
            <Link href="/trips/details">
                <Button className="w-full bg-blueAccent text-white hover:bg-blueAccent-hover">
                View trip details
                </Button>
            </Link>
            <Link href="/">
                <Button variant="outline" className="w-full">
                    ← Return to homepage
                </Button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default SuccessPage;