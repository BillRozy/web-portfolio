'use client'

import { ThemeContext } from '@/components/ThemeProvider'
import { ScreenSizeContext } from '@/components/ScreenSizeProvider'
import React, { useRef, useEffect, useCallback, useContext } from 'react'
import { useSprings, animated } from '@react-spring/web'
import { useResize, ResizeHandler } from '@/hooks/useResize'

const SMALL_SIZE = 16
const BIG_SIZE = 24

const SMALL_GAP = 8
const BIG_GAP = 16

const SMALL_SIZE_CLASS = 'h-4'
const BIG_SIZE_CLASS = 'md:h-6'

export default function CarouselNav({ quantity, current }: { quantity: number; current: number }) {
    const { md } = useContext(ScreenSizeContext)
    const gap = md ? BIG_GAP : SMALL_GAP
    const size = md ? BIG_SIZE : SMALL_SIZE
    const ref = useRef<HTMLDivElement>(null)
    const callback = useCallback<ResizeHandler>(
        (widthSetter, _) => {
            widthSetter(ref.current?.offsetWidth ?? 0)
        },
        [ref]
    )
    const { width } = useResize(callback)
    const { themeColors } = useContext(ThemeContext)
    const animationForSpring = useCallback(
        (i: number) => {
            const totalWidth = quantity * size + (quantity - 1) * gap
            const startPoint = width / 2 - totalWidth / 2
            return {
                x: startPoint + i * size + i * gap,
                y: 0,
                scale: i === current ? 1 : 0.9,
                opacity: i === current ? 1 : 0.9,
                size,
                color: i === current ? themeColors?.primary : 'transparent',
            }
        },
        [current, themeColors, quantity, width, gap, size]
    )
    const [nav_props, nav_api] = useSprings(quantity, animationForSpring, [])
    useEffect(() => {
        nav_api.start(animationForSpring)
    }, [nav_api, animationForSpring])
    return (
        <div className={`relative ${SMALL_SIZE_CLASS} w-full overflow-hidden ${BIG_SIZE_CLASS}`} ref={ref}>
            {nav_props.map(({ x, scale, y, size, color, opacity }, i) => {
                return (
                    <animated.div
                        className="absolute rounded-full border-2 border-primary"
                        key={i}
                        style={{ x, scale, y, width: size, height: size, opacity, background: color }}
                    ></animated.div>
                )
            })}
        </div>
    )
}
