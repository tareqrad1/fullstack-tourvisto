"use server"

import axios from "axios"
import { cookies } from "next/headers"

export const getUserInSession = async () => {
    try {
        const cookie = await cookies()
        const token = cookie.get('token')
        if(!token?.value) {
            return {
                success: false,
                error: 'You are not logged in',
            };
        }
        const response = await axios.get('http://localhost:5000/api/auth/me', {
            withCredentials: true,
            headers: {
                Cookie: `token=${token?.value}`
            }
        });
        const data = await response.data;
        return {
            user: data.user,
            token: token?.value
        };
    } catch (error) {
        return {
            success: false,
            error: 'Something went wrong',
        };
    }
}