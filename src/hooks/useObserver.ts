import { useEffect, useRef, MutableRefObject } from "react";

interface UseObserverProps {
    ref: MutableRefObject<Element | null>;
    canLoad: boolean;
    isLoading: boolean;
    callback: () => void;
}

export const useObserver = ({ ref, canLoad, isLoading, callback }: UseObserverProps) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        const cb: IntersectionObserverCallback = (entries) => {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        };

        observer.current = new IntersectionObserver(cb);
        if (ref.current) {
            observer.current.observe(ref.current);
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [isLoading, canLoad, ref, callback]);
};
