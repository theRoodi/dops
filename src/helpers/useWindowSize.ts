import {useEffect, useState} from 'react';


/**
 * calculate width window size
 */
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(0)
    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return windowSize
}