'use client'
import config from '@/tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'
import { Config } from 'tailwindcss/types/config'
import { useMediaQuery } from 'react-responsive'
const fullConfig = resolveConfig(config as unknown as Config)

import { createContext } from 'react'

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xl2'
type ScreenChecks = Record<Breakpoint, boolean>

const defaultBreakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
}

const breakpoints = fullConfig?.theme?.screens ?? defaultBreakpoints

export const ScreenSizeContext = createContext<ScreenChecks>({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xl2: false,
})

export default function ScreenSizeProvider({ children }: { children: React.ReactNode }) {
    const sm = useMediaQuery({ query: `(min-width: ${breakpoints.sm})` })
    const md = useMediaQuery({ query: `(min-width: ${breakpoints.md})` })
    const lg = useMediaQuery({ query: `(min-width: ${breakpoints.lg})` })
    const xl = useMediaQuery({ query: `(min-width: ${breakpoints.xl})` })
    const xl2 = useMediaQuery({ query: `(min-width: ${breakpoints['2xl']})` })

    return <ScreenSizeContext.Provider value={{ sm, md, lg, xl, xl2 }}>{children}</ScreenSizeContext.Provider>
}
