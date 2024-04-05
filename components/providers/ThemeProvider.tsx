'use client'
import themesConfig, { Theme } from '@/themes.config'
import type { ThemeConfig } from '@/themes.config'

import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext<{
    theme: Theme
    themeColors: ThemeConfig | null
    setTheme: (theme: Theme) => void
}>({
    theme: Theme.UNDEFINED,
    themeColors: null,
    setTheme: () => null,
})

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState(Theme.UNDEFINED)
    const [themeColors, setThemeColors] = useState<ThemeConfig | null>(null)
    const saveTheme = (theme: Theme) => {
        localStorage.setItem('theme', theme)
        setTheme(theme)
    }
    useEffect(() => {
        const computedTheme = localStorage.getItem('theme') === Theme.LIGHT ? Theme.LIGHT : Theme.DARK
        setTheme(computedTheme)
    }, [])
    useEffect(() => {
        setThemeColors(themesConfig[theme])
    }, [theme])
    return <ThemeContext.Provider value={{ theme, setTheme: saveTheme, themeColors }}>{children}</ThemeContext.Provider>
}
