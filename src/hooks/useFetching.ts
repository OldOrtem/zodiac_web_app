import { useState } from "react"

export default function useFetching(callback:(arg?: boolean ) => Promise<void>):[(arg?: boolean) => Promise<void>, boolean, string] {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (arg?: boolean) => {
        try {
            setIsLoading(true);
            await callback(arg);
        } catch (e) {
            setError(e.message || 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    }
    return [fetching, isLoading, error];
}