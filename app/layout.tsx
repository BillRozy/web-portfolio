import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Portfolio: Oleg Budylin',
    description: 'TBD',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-dvh scroll-smooth font-kanit">
            <body className="min-h-full w-full bg-darkgray text-lightgray">{children}</body>
        </html>
    )
}
