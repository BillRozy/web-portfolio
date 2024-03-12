'use client'

import React, { ReactNode, useRef, useEffect, useState, useCallback, useMemo } from 'react'
import { useDrag } from '@use-gesture/react'
import { useSprings, animated } from '@react-spring/web'
import { useResize, ResizeHandler } from '@/hooks/useResize'
import CarouselNav from './CarouselNav'

type CarouselChild = () => ReactNode

export default function Carousel({ children, startPage = 0 }: { children: CarouselChild[]; startPage?: number }) {
    const fakeChildren = useMemo(() => [children[children.length - 1], ...children, children[0]], [children])
    const [navPage, setNavPage] = useState(startPage)
    const [realPage, setRealPage] = useState(startPage + 1) // because 0 is always "fake" page
    const [pendingOverflow, setPendingOverflow] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const allTheRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})
    const callback = useCallback<ResizeHandler>(
        (widthSetter, heightSetter) => {
            widthSetter(ref.current?.offsetWidth ?? 0)
            heightSetter(Math.max(...Object.values(allTheRefs.current).map((ref) => ref?.offsetHeight ?? 0)))
        },
        [allTheRefs, ref]
    )
    const { width, height } = useResize(callback)
    const [props, api] = useSprings(fakeChildren.length, (i) => {
        return {
            x: i * width,
            scale: 1,
            display: 'block',
        }
    })

    const setCurrentPage = (desiredPage: number) => {
        const curPage =
            desiredPage < 0 ? fakeChildren.length - 1 : desiredPage > fakeChildren.length - 1 ? 1 : desiredPage
        const overflow = desiredPage < 1 || desiredPage > children.length
        setRealPage(curPage)
        setPendingOverflow(overflow)
    }
    const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel }) => {
        if (active && Math.abs(mx) > width / 2) {
            const desired_cur_page = realPage + (xDir > 0 ? -1 : 1)
            setCurrentPage(desired_cur_page)
            cancel()
        }
        api.start((i) => {
            if (i < realPage - 2 || i > realPage + 2) return { display: 'none' }
            const x = (i - realPage) * width + (active ? mx : 0)
            const scale = active ? 1 - Math.abs(mx) / width / 2 : 1
            return { x, scale, display: 'block' }
        })
    })

    useEffect(() => {
        const newRealPage = realPage === fakeChildren.length - 1 ? 1 : realPage === 0 ? children.length : realPage
        setNavPage(newRealPage - 1)
        api.start((i) => {
            const x = (i - realPage) * width
            const scale = 1
            return {
                x,
                scale,
                display: i < realPage - 1 || i > realPage + 1 ? 'none' : 'block',
                onRest() {
                    // on animation end
                    if (pendingOverflow) {
                        api.set((i) => {
                            const x = (i - newRealPage) * width
                            const scale = 1
                            return {
                                x,
                                scale,
                                display: i < newRealPage - 1 || i > newRealPage + 1 ? 'none' : 'block',
                            }
                        })
                        setPendingOverflow(false)
                        setRealPage(newRealPage)
                    }
                },
            }
        })
    }, [realPage, api, children.length, fakeChildren.length, width, pendingOverflow])

    return (
        <div>
            <div className="relative mb-6 w-full overflow-hidden" ref={ref} style={{ height }}>
                {props.map(({ x, display, scale }, i) => (
                    <animated.div className="absolute w-full touch-none" {...bind()} key={i} style={{ display, x }}>
                        <animated.div
                            className="w-full touch-none"
                            style={{ scale }}
                            ref={(ref) => (allTheRefs.current[i] = ref)}
                        >
                            {fakeChildren[i]?.()}
                        </animated.div>
                    </animated.div>
                ))}
            </div>
            <CarouselNav quantity={children.length} current={navPage}></CarouselNav>
        </div>
    )
}
