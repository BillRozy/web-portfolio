import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { debounce } from 'lodash'

export type ResizeHandler = {
    (widthSetter: Dispatch<SetStateAction<number>>, heightSetter: Dispatch<SetStateAction<number>>): void;
}

export const useResize = (handler: ResizeHandler) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    useEffect(() => {
        const wrappedHandler = debounce(() => handler(setWidth, setHeight), 250)
        window.addEventListener('resize', wrappedHandler)
        wrappedHandler()
        return () => {
            window.removeEventListener('resize', wrappedHandler)
        }
    }, [handler])
    return {
        width,
        height,
        setWidth,
        setHeight
    }
}