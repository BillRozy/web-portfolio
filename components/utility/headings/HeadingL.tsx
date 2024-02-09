import { twMerge } from 'tailwind-merge'

export default function HeadingL({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const classes = twMerge('text-[32px]', 'md:text-5xl', 'font-semibold', 'text-white', 'tracking-normal', className)
    return <h1 className={classes}>{children}</h1>
}
