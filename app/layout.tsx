import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Portfolio: Oleg Budylin',
    description: 'TBD',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full">
            <body
                className={
                    inter.className +
                    ' min-h-full flex bg-neutral-50 text-gray-900'
                }
            >
                {children}
            </body>
        </html>
    )
}