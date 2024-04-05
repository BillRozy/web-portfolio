import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import LocaleSwitcher from './LocaleSwitcher'

export default function FooterSubPage() {
    return (
        <footer className="flex items-center justify-evenly gap-4 p-8 md:p-12">
            <ThemeSwitcher></ThemeSwitcher>
            <LocaleSwitcher></LocaleSwitcher>
        </footer>
    )
}
