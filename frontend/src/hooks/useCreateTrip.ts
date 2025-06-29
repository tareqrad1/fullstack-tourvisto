import axios from "axios";
import { FC, useState } from "react";

type TDataTrip = {
    title: string;
    subTitle: string;
}
interface CreateTripShape {
    loading: boolean;
    error: string | null;
    createTrip: (data: TDataTrip) => void;
}

export const useCreateTrip = (): CreateTripShape => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [trip, setTrip] = useState<TDataTrip | null>(null);
    const createTrip = async (arg: TDataTrip) => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/trips`, arg, { withCredentials: true });
            const data = await res.data;
            setTrip(data);
            setLoading(false);
            setError(null);
        } catch (error) {
            if(axios.isAxiosError(error)) {
                setError(error?.response?.data?.error || 'An error occurred');
                setLoading(false);
                setTrip(null);
                throw error
            }
        }
    }
    return {
        loading,
        error,
        createTrip
    }
}