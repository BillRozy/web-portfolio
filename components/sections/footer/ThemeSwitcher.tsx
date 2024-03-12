'use client'

import { Theme } from '@/themes.config'
import { ThemeContext } from '@/components/ThemeProvider'
import React, { useContext } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

export default function ThemeSwitcher() {
    const { theme, setTheme } = useContext(ThemeContext)
    const toggleTheme = () => {
        if (theme === Theme.DARK) {
            setTheme(Theme.LIGHT)
        } else if (theme === Theme.LIGHT) {
            setTheme(Theme.DARK)
        }
    }
    const is_dark = theme === Theme.DARK
    const iconBaseClasses = 'transition-all duration-500 text-neutral-900'
    const holderBaseClasses = 'relative h-8 w-16 md:h-11 md:w-[88px] rounded-full shadow-inner'
    const indicatorBaseClasses =
        'absolute size-[28px] md:size-[40px] top-0.5 rounded-full flex items-center justify-center hover:cursor-pointer hover:scale-110 transition-all duration-200 bg-gradient-to-b from-font-secondary to-font-main'
    const holderDarkClasses = 'shadow-neutral-950'
    const holderLightClasses = 'shadow-neutral-500'
    const indicatorDarkClasses = 'right-0.5'
    const indicatorLightClasses = 'left-0.5'
    const holderThemeClasses = is_dark ? holderDarkClasses : holderLightClasses
    const indicatorThemeClasses = is_dark ? indicatorDarkClasses : indicatorLightClasses
    const holderClasses = twMerge(holderBaseClasses, holderThemeClasses)
    const indicatorClasses = twMerge(indicatorBaseClasses, indicatorThemeClasses)
    const moonClasses = twMerge(
        iconBaseClasses,
        'size-4 md:size-5',
        is_dark ? 'text-yellow-100 scale-125' : 'opacity-50'
    )
    const sunClasses = twMerge(
        iconBaseClasses,
        'md:size-6 size-5',
        !is_dark ? 'text-yellow-400 scale-125' : 'opacity-50 text-stone-200'
    )
    return (
        <div className="flex flex-row items-center gap-4 transition-all md:gap-6">
            <FaSun className={sunClasses}></FaSun>
            <div className={holderClasses}>
                <div className={indicatorClasses} onClick={toggleTheme}></div>
            </div>
            <FaMoon className={moonClasses}></FaMoon>
        </div>
    )
}
