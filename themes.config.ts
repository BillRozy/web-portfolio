import colors from 'tailwindcss/colors'

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    UNDEFINED = 'theme-loading',
}

export type ThemeConfig = {
    primary: string
    'main-bg': string
    'secondary-bg': string
    'overflow-bg': string
    font: {
        main: string
        secondary: string
    },
    art: {
        primary: string
        secondary: string
    }
}

export type ThemesConfig = {
    [Theme.LIGHT]: ThemeConfig
    [Theme.DARK]: ThemeConfig
    [Theme.UNDEFINED]: any
}

const themes: ThemesConfig = {
    [Theme.LIGHT]: {
        primary: colors.yellow[500],
        'main-bg': colors.white,
        'secondary-bg': colors.stone[50],
        'overflow-bg': colors.stone[100],
        font: {
            main: colors.stone[700],
            secondary: colors.stone[900],
        },
        art: {
            primary: colors.stone[200],
            secondary: colors.stone[200],
        },
    },
    [Theme.DARK]: {
        primary: colors.yellow[400],
        'main-bg': '#151515',
        'secondary-bg': '#242424',
        'overflow-bg': colors.stone[900],
        font: {
            main: '#D9D9D9',
            secondary: colors.white,
        },
        art: {
            primary: colors.white,
            secondary: colors.stone[100],
        },
    },
    [Theme.UNDEFINED]: {},
}

export default themes
