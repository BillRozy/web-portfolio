import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

export default function FooterSubPage() {
    return (
        <footer className="flex flex-col items-center justify-center gap-4 p-8">
            {/* <MadeWith></MadeWith> */}
            <ThemeSwitcher></ThemeSwitcher>
        </footer>
    )
}
