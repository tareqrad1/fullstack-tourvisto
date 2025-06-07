'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const LoginPage: React.FC = (): React.JSX.Element => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
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
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <Input type='email' placeholder='Email'/>
                </div>
                <div>
                  <Input type='password' placeholder='Password'/>
                </div>
                <Button type='submit' className='bg-blueAccent hover:bg-blueAccent-hover w-full'>Login</Button>
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

export default LoginPage

