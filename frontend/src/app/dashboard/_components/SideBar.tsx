'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { LINK_DASHBOARD } from '@/constant/data';
import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'react-hot-toast';
import { PanelRightOpen } from 'lucide-react';

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
});

type TUser = {
    user: {
        name: string;
        email: string;
        avatar: string;
    };
};

const SideBar = ({ user }: TUser): React.JSX.Element => {
    const { logout } = useAuth();
    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
        };
        if (open) {
        document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);
    async function handleLogout() {
        await logout();
        toast.success('Logout successfully');
        router.push('/');
    }
    return (
        <div className='h-screen'>
        {/* Toggle Button: visible only on small screens */}
        <div className="lg:hidden p-4">
            <Button onClick={() => setOpen(!open)} className="bg-blueAccent text-white">
            {open ? <PanelRightOpen className='z-20' /> : <PanelRightOpen />}
            </Button>
        </div>

        {/* Sidebar */}
        <div ref={sidebarRef} className={`fixed top-0 left-0 h-full z-40 transition-transform duration-300 bg-white border-r border-[#ECF2EF] shadow-lg w-[270px] flex flex-col justify-between
            ${open ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0 lg:static`}>
            <div>
            <div className='flex items-center gap-2 py-7 px-3 border-b border-[#ECF2EF]'>
                <Image src={'/fi_2200326.svg'} alt='logo' width={29} height={29} />
                <h1 className={`text-2xl font-[700] leading-6 text-midnight capitalize ${plusJakartaSans.className}`}>tourvisto</h1>
            </div>
            <div className='px-3'>
                <div className='flex flex-col gap-4 py-4 '>
                {LINK_DASHBOARD.map((item, idx) => (
                    <div key={idx}>
                    <Link href={item.link} className={`flex items-center gap-2 py-3 px-2 rounded-lg ${pathname === item.link && 'bg-blueAccent'}`}>
                        <Image src={item.icon} alt={item.name} width={20} height={20} priority />
                        <h3 className={`text-ash text font-[400] text-lg ${pathname === item.link && 'text-white'}`}>{item.name}</h3>
                    </Link>
                    </div>
                ))}
                </div>
            </div>
            </div>
            <div className='flex items-center gap-3 p-4 border-t border-[#ECF2EF]'>
            <Image src={user.avatar} alt='user' width={40} height={40}  className='rounded-full' />
            <div>
                <h3 className='font-semibold text-[16px]'>{user.name}</h3>
                <p className='text-sm text-ash'>{user.email.substring(0, user.email.indexOf('.'))}</p>
            </div>
            <Button onClick={handleLogout} variant="ghost" className="hover:bg-transparent p-0">
                <Image src={'/logout.svg'} alt='logout' width={24} height={24} priority />
            </Button>
            </div>
        </div>
        </div>
    );
};

export default SideBar;
