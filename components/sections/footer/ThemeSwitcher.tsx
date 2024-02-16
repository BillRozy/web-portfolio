'use client'

import { Theme, ThemeContext } from '@/components/ThemeProvider'
import React, { useContext, useState } from 'react'
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
    const iconBaseClasses = 'transition-all duration-500 text-stone-900 md:size-6'
    const holderBaseClasses = 'relative h-8 w-16 md:h-11 md:w-[88px] rounded-full border-2'
    const indicatorBaseClasses =
        'absolute size-7 md:size-[40px] top-0 rounded-full flex items-center justify-center hover:cursor-pointer hover:scale-110 transition-all duration-200'
    const holderDarkClasses = 'bg-gradient-to-r from-transparent to-sky-100 border-stone-600'
    const holderLightClasses = 'bg-gradient-to-l from-transparent to-yellow-100 border-stone-600'
    const indicatorDarkClasses = 'right-0 bg-gradient-to-r  text-sky-100 from-stone-600 to-stone-500'
    const indicatorLightClasses = 'left-0 bg-gradient-to-l text-yellow-400 from-stone-600 to-stone-900'
    const holderThemeClasses = is_dark ? holderDarkClasses : holderLightClasses
    const indicatorThemeClasses = is_dark ? indicatorDarkClasses : indicatorLightClasses
    const holderClasses = twMerge(holderBaseClasses, holderThemeClasses)
    const indicatorClasses = twMerge(indicatorBaseClasses, indicatorThemeClasses)
    const moonClasses = twMerge(iconBaseClasses, is_dark ? 'text-sky-200 scale-125' : 'opacity-50')
    const sunClasses = twMerge(iconBaseClasses, !is_dark ? 'text-yellow-400 scale-150' : 'opacity-50 text-stone-200')
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
