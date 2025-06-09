'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';

type TFormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    avatar: string;
}

const RegisterForm: React.FC = (): React.JSX.Element => {
    const { register, handleSubmit } = useForm<TFormData>();
    const { state, signup } = useAuth();
    const router = useRouter();
    const submitForm: SubmitHandler<TFormData> = async(data) => {
        //submit signup
    }  
    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)} className='space-y-4'>
                <div>
                    <Input type='text' placeholder='Full Name' {...register('name')} />
                </div>
                <div>
                    <Input type='email' placeholder='Email' {...register('email')} />
                </div>
                <div>
                    <Input type='password' placeholder='Password' {...register('password')} />
                </div>
                <div>
                    <Input type='password' placeholder='Confirm Password' {...register('confirmPassword')} />
                </div>
                <div className="grid w-full max-w-sm items-center gap-3">
                    <Input id="picture" type="file" accept="image/*" {...register('avatar')}/>
                </div>
                {state?.error && <p className='text-start text-red-500 text-sm'>{state.error}</p>}
                <Button type='submit' className='bg-blueAccent hover:bg-blueAccent-hover w-full'>{state?.isLoading ? <Loading /> : 'Sign up'}</Button>
            </form>
            <div className='mt-3'>
                <p className='text-center text-ash'>Already have an account? <span className='text-primary'><Link href={'/login'}>Login</Link></span></p>
            </div>
        </div>
    )
}

export default RegisterForm