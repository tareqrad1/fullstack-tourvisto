import React from 'react'
import Image from 'next/image'
import { getUserInSession } from '@/app/_action'
import { redirect } from 'next/navigation';
import RegisterForm from './_components/RegisterForm';


const RegisterPage: React.FC = async() => {
  const { token, user } = await getUserInSession();
  if(token) {
    if(user.role === 'admin') {
      return redirect('/dashboard');
    }
    return redirect('/');
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
              <h2 className='text-2xl font-bold text-center text-midnight'>Tourvisto Register</h2>
              <p className='text-center text-ash'>create a new account to start booking amazing tours</p>
            </div>
            <div>
              <RegisterForm />
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

