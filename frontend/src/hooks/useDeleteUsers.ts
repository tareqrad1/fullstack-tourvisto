import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";


interface DeleteUserShape {
    deleteUser: (id: string) => Promise<void>;
}

export const useDeleteUser = (): DeleteUserShape => {
    const deleteUser = async(id: string) => {
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/users/delete/${id}`, { withCredentials: true });
            return response.data;
        } catch (error) {
            if(axios.isAxiosError(error)) {
                toast.error(error.response?.data?.error || 'Failed to delete user.');
            }
        }
    }
    return {
        deleteUser
    }
}