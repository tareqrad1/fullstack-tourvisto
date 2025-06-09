// 'use client'
import { redirect } from 'next/navigation'
import { getUserInSession } from './_action'

const Home = async() => {
    const { token, user } = await getUserInSession()
    if(!token) {
        return redirect('/ready')
    }
    if(user.role === 'admin') {
        return redirect('/dashboard')
    }
    return (
        <>
            <h1>welcome user page - {user.name}</h1>
        </>
    )
}

export default Home