'use client';
import React, { createContext, useEffect, useRef, useState } from "react";
import axios, { isAxiosError } from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.withCredentials = true;

type UserType = {
    id: string;
    name: string;
    email: string;
    role: string;
    avatar: string;
}
type StateType = {
    user: UserType | null;
    isLoading: boolean;
    error: string | null;
}
interface AuthContextType {
    state: StateType | null;
    setState: React.Dispatch<React.SetStateAction<StateType>>;
    signup: (name: string, email: string, password: string, confirmPassword: string, avatar: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<StateType>({
        user: null,
        isLoading: false,
        error: null,
    });
    const signup = async (name: string, email: string, password: string, confirmPassword: string, avatar: string) => {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));
        try {
            const response = await axios.post('/auth/register', {
                name,
                email,
                password,
                confirmPassword,
                avatar
            });
            return response.data;
        } catch (error: Error | unknown) {
            if(axios.isAxiosError(error)) {
                setState((prev) => ({
                    user: null,
                    isLoading: false,
                    error: error.response?.data.error || 'An error occurred',
                }));
                throw error;
            }
        }
    };
    const login = async (email: string, password: string) => {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));
        try {
            const response = await axios.post('/auth/login', {
                email,
                password
            });
            setState((prev) => ({
                ...prev,
                user: response.data?.user,
                isLoading: false,
                error: null,
            }));
        } catch (error: unknown) {
            if(isAxiosError(error)) {
                if(error instanceof Error) {
                    setState((prev) => ({
                        error: error.response?.data.error,
                        isLoading: false,
                        user: null,
                    }))
                    throw error;
                }
            }
        }
    };
    const logout = async () => {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));
        try {
            await axios.post('/auth/logout');
            setState((prev) => ({
                ...prev,
                user: null,
                isLoading: false,
                error: null,
            }));
        } catch (error: Error | unknown) {
            if(axios.isAxiosError(error)) {
                if(error instanceof Error) {
                    setState((prev) => ({
                        ...prev,
                        user: null,
                        isLoading: false,
                        error: error.response?.data?.error || 'An error occurred',
                    }));
                }
            }
        }
    }
    return (
        <AuthContext.Provider value={{ state, setState, signup, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};
export default AuthContextProvider;