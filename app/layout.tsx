import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Portfolio: Oleg Budylin',
    description: 'TBD',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-dvh font-kanit">
            <body className="mx-auto min-h-full text-lightgray lg:container">{children}</body>
        </html>
    )
}
