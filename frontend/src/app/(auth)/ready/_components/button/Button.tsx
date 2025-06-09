'use client';

import React from 'react'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ButtonComponent = () => {
    const router = useRouter();
    return <Button className='bg-blueAccent hover:bg-blueAccent-hover w-full text-white font-semibold tracking-wide'><Link href={'/ready/register'}>Free Register</Link></Button>
}

export default ButtonComponent