'use client';

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, EyeClosed } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'

type TFormInputs = {
    email: string;
    password: string;
}
const LoginForm: React.FC = (): React.JSX.Element => {
    const { state, login } = useAuth();
    const { register, handleSubmit, watch } = useForm<TFormInputs>();
    const email = watch('email');
    const password = watch('password');
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();
    const submitForm: SubmitHandler<TFormInputs> = async(data) => {
        await login(data.email, data.password);
        router.push('/');
    }
    return (
        <div className='container'>
            <Image
                src="/bg.png"
                alt="Background"
                fill
                priority
                className="object-cover"
                style={{ zIndex: -1}}
            />
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-white shadow-lg rounded-md px-8 pt-6 pb-8 w-full max-w-md mx-auto lg:mt-10 z-20'>
                    <div className='space-y-2 mb-6'>
                    <h2 className='text-2xl font-bold text-center text-midnight'>Welcome Back</h2>
                    <p className='text-center text-ash'>sign in to start booking amazing tours</p>
                    </div>
                    <div>
                    <form onSubmit={handleSubmit(submitForm)} className='space-y-4'>
                        <div>
                        <Input type='email' placeholder='Email' {...register('email')} />
                        </div>
                    {open ? (
                        <div className='relative'>
                        <Eye width={20} hanging={20} className='text-ash absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer' onClick={() => setOpen(false)} />
                        <Input type='text' placeholder='Password' {...register('password')} />
                        </div>
                    ) : (
                        <div className='relative'>
                        <EyeClosed width={20} hanging={20} className='text-ash absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer' onClick={() => setOpen(true)} />
                        <Input type='password' placeholder='Password' {...register('password')} />
                        </div>
                    )}
                    {state?.error && (<p className='text-start text-red-500 text-sm'>{state?.error}</p>)}
                        <Button disabled={!email || !password} type='submit' className='bg-blueAccent hover:bg-blueAccent-hover w-full'>{state?.isLoading ? 'Loading...' : 'Sign in'}</Button>
                    </form>
                    <div className='mt-3'>
                        <p className='text-center text-ash'>Don't have an account? <span className='text-primary'><Link href={'/ready/register'}>Sign up</Link></span></p>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default LoginForm