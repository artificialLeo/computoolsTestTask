import React, {useEffect, useRef} from 'react';

export const useObserver = (ref, options = {}, callback = () => {}, deps = []) => {
    const observer = useRef(null);

    const handleObserver = (entities) => {
        const target = entities[0]
        if (target.isIntersecting) {
            callback()
        }
    }

    const cleanOb = () => {
        if (observer.current) {
            observer.current.disconnect()
        }
    }

    useEffect(() => {
        cleanOb();

        const ob = observer.current = new IntersectionObserver(handleObserver, options)
        if (ref.current) {
            ob.observe(ref.current)
        }

        return () => {
            cleanOb();
        }
    }, deps)
};

