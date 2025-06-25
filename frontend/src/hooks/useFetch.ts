'use client';

import axios from "axios";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

type TData = {
    name: string;
};

interface TDataShape {
    data: TData[] | null;
    isLoading: boolean;
    error: any;
    mutate: () => void;
}

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const useFetch = (
    baseURL?: string | null,
    page: number = 1,
    limit: number = 8
): TDataShape => {
    const shouldFetch = !!baseURL;
    const url = shouldFetch ? `${baseURL}?page=${page}&limit=${limit}` : null;

    const { data, isLoading, error, mutate } = useSWR<TData[]>(url, fetcher);

    return {
        data: data ?? null,
        isLoading,
        error,
        mutate
    };
};


// export const usePagination = (limit: number = 6) => {
//     const getKey = (pageIndex: number, prevData: any) => {
//         if(pageIndex && !prevData.length) return null;
//         return `http://localhost:5000/api/users/?page={pageIndex}&limit=${limit}`;
//     }
//     const { data, isLoading, error, setSize, size } = useSWRInfinite(getKey, fetcher);
//     return {
//         data,
//         isLoading,
//         error,
//         setSize,
//         size
//     }
// }
