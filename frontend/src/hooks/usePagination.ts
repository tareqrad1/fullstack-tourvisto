import useSWRInfinite from "swr/infinite";

const fetcher =(url: string) => fetch(url).then(res=>res.json());
export  const usePagination = (limit: number) => {
    const getKey = (pageIndex: number, prevData: string | any[]) => {
    if(pageIndex && !prevData.length) return null;
        return `https://jsonplaceholder.typicode.com/posts?_page=${pageIndex}&_limit=${limit}`
    }
    const { data, isLoading, error, setSize, size } = useSWRInfinite(getKey, fetcher);
    return {
        data,
        isLoading,
        error,
        setSize,
        size
    }
}

export default usePagination