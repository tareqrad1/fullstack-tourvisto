'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const NotFoundPage: React.FC = (): React.JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[#F9FBFC] px-4">
            <Image
                src="/fi_2200326.svg"
                alt="404 Not Found"
                width={300}
                height={300}
                className="mb-8"
            />
            <h1 className="text-4xl font-bold text-midnight mb-2">Page Not Found</h1>
            <p className="text-ash text-lg mb-6">
                Sorry, the page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link href="/">
                <Button className="bg-blueAccent hover:bg-blueAccent-hover text-white">
                Go to Homepage
                </Button>
            </Link>
        </div>
    )
}

export default NotFoundPage
