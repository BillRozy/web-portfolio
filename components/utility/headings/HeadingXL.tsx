import { twMerge } from 'tailwind-merge'

export default function HeadingXL({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const classes = twMerge(
        'text-[40px]',
        'leading-10',
        'md:text-7xl',
        'xl:text-[88px]',
        'font-semibold',
        'tracking-normal',
        'text-font-secondary',
        className
    )
    return <h1 className={classes}>{children}</h1>
}
