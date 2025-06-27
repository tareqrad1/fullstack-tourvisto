'use client';

import TripCard, { ITrip } from '@/components/TripCard';
import { TableFooter, TableRow, TableCell, Table } from '@/components/ui/table';
import axios from 'axios';
import useSWR from 'swr';
import { useState } from 'react';
type TripsResponse = {
    trips: ITrip[];
    currentPage: number;
    totalPages: number;
};

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const AllTrips = ({ initialData, limit }: { initialData: TripsResponse, limit: number }) => {
    const [page, setPage] = useState<number>(1);
    const { data, isLoading } = useSWR<TripsResponse>(`/trips?page=${page}&limit=${limit}`, fetcher, {
        fallbackData: initialData,
    });

    return (
        <div className='w-full'>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-[180px] bg-gray-200 animate-pulse rounded-md"></div>
                ))
            : data?.trips.map((trip) => <TripCard key={trip._id} trip={trip} />)}
        </div>
        <Table className='w-full bg-[#ffffff]'>
            <TableFooter className="w-full bg-[#ffffff]">
            <TableRow>
                <TableCell colSpan={6}>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                    <div className="flex gap-2">
                    <button
                        onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100 disabled:opacity-50"
                    >
                        Previous
                    </button>

                    {Array.from({ length: data?.totalPages || 1 }, (_, i) => i + 1).map((p) => (
                        <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`px-3 py-1 rounded-md border text-sm transition ${
                            page === p
                            ? 'bg-black text-white border-black'
                            : 'hover:bg-gray-100'
                        }`}
                        >
                        {p}
                        </button>
                    ))}

                    <button
                        onClick={() =>
                        setPage(prev => Math.min(prev + 1, data?.totalPages || 1))
                        }
                        disabled={page === data?.totalPages}
                        className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100 disabled:opacity-50"
                    >
                        Next
                    </button>
                    </div>
                </div>
                </TableCell>
            </TableRow>
        </TableFooter>
        </Table>
        </div>
    );
};

export default AllTrips;