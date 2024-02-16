'use client'

import { createContext, useEffect, useState } from 'react'

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    UNDEFINED = 'theme-loading',
}

export const ThemeContext = createContext<{
    theme: Theme
    setTheme: (theme: Theme) => void
}>({
    theme: Theme.UNDEFINED,
    setTheme: () => null,
})

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState(Theme.UNDEFINED)
    const saveTheme = (theme: Theme) => {
        localStorage.setItem('theme', theme)
        setTheme(theme)
    }
    useEffect(() => {
        const computedTheme = localStorage.getItem('theme') === Theme.LIGHT ? Theme.LIGHT : Theme.DARK
        setTheme(computedTheme)
    }, [])
    return <ThemeContext.Provider value={{ theme, setTheme: saveTheme }}>{children}</ThemeContext.Provider>
}
