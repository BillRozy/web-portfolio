'use client'

import {
    LocaleContext,
    SupportedLocale,
    SupportedLocaleType,
    SUPPORTED_LOCALES_LIST,
} from '@/components/providers/LocaleProvider'
import React, { useContext } from 'react'
import { twMerge } from 'tailwind-merge'

export default function LocaleSwitcher() {
    const { locale, setLocale } = useContext(LocaleContext)
    const safelyChangeLocale = (strLocale: string) => {
        if (SUPPORTED_LOCALES_LIST.includes(strLocale as SupportedLocaleType)) {
            setLocale(strLocale as SupportedLocaleType)
        } else {
            throw Error(`${strLocale} locale is not supported`)
        }
    }
    return (
        <select
            className="form-select border-0 border-b-2 border-neutral-400 bg-transparent uppercase text-font-main shadow-inner hover:cursor-pointer focus:border-primary focus:ring-0"
            value={locale}
            onChange={(event) => safelyChangeLocale(event.target.value)}
        >
            {Object.values(SupportedLocale).map((locale) => (
                <option key={locale}>{locale}</option>
            ))}
        </select>
    )
}
