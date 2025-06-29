import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Checkout Cancel",
    description: "Checkout Cancel Page",
    keywords: "checkout, cancel, travel",
    authors: [{ name: "Tourvisto Team" }],
    icons: {
        icon: "/fi_2200326.svg",
    },
};

const CancelPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff0f0] px-4 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-md w-full bg-white p-8 rounded-2xl shadow-md border border-red-200 animate-shake">
                <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                    Payment Cancelled
                </h1>
                <p className="text-sm text-gray-600 mb-6">
                    Your payment didn’t go through. No worries — you can try again or explore more trips!
                </p>
                <div className="flex flex-col gap-3">
                    <Link href="/">
                        <Button className="w-full bg-blueAccent text-white hover:bg-blueAccent-hover">
                            Browse Other Trips
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

export default CancelPage;
