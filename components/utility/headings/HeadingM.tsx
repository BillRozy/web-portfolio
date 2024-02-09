import { twMerge } from 'tailwind-merge'

export default function HeadingM({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const classes = twMerge('text-2xl', 'md:text-3xl', 'font-semibold', 'text-white', className)
    return <h1 className={classes}>{children}</h1>
}
