'use client'

import { createContext, useEffect, useState } from 'react'
import { IntlProvider, MessageFormatElement } from 'react-intl'

import enMessages from '@/compiled-lang/en.json'

export const SupportedLocale = {
    EN: 'en',
    RU: 'ru',
    HU: 'hu',
} as const

type MessagesCache = {
    en: Record<string, MessageFormatElement[]>
    ru?: Record<string, MessageFormatElement[]>
    hu?: Record<string, MessageFormatElement[]>
}

export type SupportedLocaleType = (typeof SupportedLocale)[keyof typeof SupportedLocale]

export const SUPPORTED_LOCALES_LIST: SupportedLocaleType[] = Object.values(SupportedLocale)

const cachedMessagesForLocales: MessagesCache = {
    en: enMessages,
}

const LOCALE_KEY_IN_LOCAL_STORAGE = 'locale'

const parseLocaleWithDefault = (defaultLocale: SupportedLocaleType = SupportedLocale.EN): SupportedLocaleType => {
    const strLocale = (localStorage.getItem(LOCALE_KEY_IN_LOCAL_STORAGE) ??
        navigator.language.split('-')[0]) as SupportedLocaleType
    return SUPPORTED_LOCALES_LIST.includes(strLocale) ? strLocale : defaultLocale
}

export const LocaleContext = createContext<{
    locale: SupportedLocaleType
    setLocale: (locale: SupportedLocaleType) => void
}>({
    locale: SupportedLocale.EN,
    setLocale: () => null,
})

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<SupportedLocaleType>(SupportedLocale.EN)
    const [messages, setMessages] = useState<Record<string, MessageFormatElement[]>>(
        cachedMessagesForLocales[SupportedLocale.EN]
    )
    const saveLocale = (locale: SupportedLocaleType) => {
        localStorage.setItem(LOCALE_KEY_IN_LOCAL_STORAGE, locale)
        setLocale(locale)
    }
    useEffect(() => {
        setLocale(parseLocaleWithDefault())
    }, [setLocale])
    useEffect(() => {
        const loadMessages = async () => {
            if (!(locale in cachedMessagesForLocales)) {
                cachedMessagesForLocales[locale] = await import(`@/compiled-lang/${locale}.json`)
            }
            setMessages(cachedMessagesForLocales[locale] ?? enMessages)
        }
        loadMessages()
    }, [locale])
    return (
        <LocaleContext.Provider value={{ locale, setLocale: saveLocale }}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </LocaleContext.Provider>
    )
}
