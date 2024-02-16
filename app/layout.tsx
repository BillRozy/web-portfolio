import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
    title: 'Portfolio: Oleg Budylin',
    description: 'TBD',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="max-h-dvh min-h-dvh scroll-smooth font-kanit">
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
