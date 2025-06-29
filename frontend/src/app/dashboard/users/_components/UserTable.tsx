'use client';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { UsersTableSkeleton } from "@/components/UserSkeleton";
import { useDeleteUser } from "@/hooks/useDeleteUsers";
import { formatDate } from "@/utils/date";
import axios from "axios";
import { useState } from "react";
import useSWR from "swr";


type TUsers = {
    _id: string,
    name: string,
    email: string,
    avatar: string,
    role: string,
    createdAt: string,
    updatedAt: string,
}


const fetcher = (url: string) => axios.get(url).then(res => res.data);

export function UsersTable({ initialData }: any) {
    const [page, setPage] = useState<number>(1);
    const { data: users, isLoading, error, mutate } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/users?page=${page}&limit=9`, fetcher, {
        fallbackData: initialData,
    });
    const { deleteUser } = useDeleteUser();

    if(isLoading) return <UsersTableSkeleton />
    return (
        <div className="overflow-x-auto">
        <Table className="bg-[#FFFFFF] border-[1px] border-[#EEF9FF] p-6 shadow-lg rounded-[20px] py-5 mb-5 min-w-[700px] w-full">
            <TableCaption>A list of all users.</TableCaption>
            <TableHeader className="bg-[#eaecf075] w-full">
            <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email address</TableHead>
                <TableHead>Date joined</TableHead>
                <TableHead>Status</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            {users.users.map((user: TUsers) => (
                <TableRow key={user._id} className="text-sm">
                <TableCell className="flex items-center gap-2 text-midnight font-semibold text-sm cursor-pointer min-w-0">
                    <img src={user.avatar} alt="user-photo" className="w-8 h-8 rounded-full" />
                    <span className="truncate overflow-hidden text-ellipsis max-w-[150px] sm:max-w-[200px]">
                    {user.name}
                    </span>
                </TableCell>
                <TableCell className="text-sm truncate overflow-hidden text-ellipsis max-w-[150px] sm:max-w-[200px]">
                    {user.email}
                </TableCell>
                <TableCell>{formatDate(user.createdAt)}</TableCell>
                <TableCell className={`${user.role === 'admin' ? "text-[#344054]" : "text-[#027A48]"}`}>
                    {user.role}
                </TableCell>
                <TableCell className="text-right hover:cursor-pointer"
                onClick={async() => {
                    await deleteUser(user._id)
                    mutate();
                }}
                >
                    <img src="/trash.svg" alt="trash-svg" />
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
            <TableFooter className="bg-[#eaecf075] w-full">
            <TableRow>
                <TableCell colSpan={6}>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className="px-4 py-2 border rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span>Page {page} of {users?.totalPages}</span>
                    <button
                        onClick={() => setPage((prev) => Math.min(prev + 1, users?.totalPages))}
                        disabled={page === users?.totalPages}
                        className="px-4 py-2 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>

                </TableCell>
            </TableRow>
            </TableFooter>
        </Table>
        </div>
    );
}
