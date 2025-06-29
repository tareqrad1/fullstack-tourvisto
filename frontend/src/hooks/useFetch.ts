'use client';

import axios from 'axios';
import useSWR from 'swr';

axios.defaults.withCredentials = true;
const fetcher = async (url: string) => axios.get(url).then(res => res.data);


interface UserFetchReturns<T> {
    data: T  | undefined;
    isLoading: boolean;
    error: string | undefined;
    mutate: () => void | Promise<T | undefined>;
}

export const useFetch = <T>(url: string, fallbackData?: T): UserFetchReturns<T> => {
    
    const { data, isLoading, error, mutate } = useSWR<T>(url, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshInterval: 0,
        fallbackData: fallbackData,
    });
    return {
        data,
        isLoading,
        error,
        mutate
    }
}