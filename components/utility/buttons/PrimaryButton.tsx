import { twMerge } from 'tailwind-merge'

export default function PrimaryButton({
    title,
    className = '',
    type = 'button',
    children,
}: {
    title?: string
    className?: string
    type?: 'submit' | 'button'
    children?: React.ReactNode
}) {
    const classes = twMerge(
        'border-b-2 border-solid border-primary-400 py-2 text-base font-medium uppercase tracking-widest text-white hover:text-primary-400',
        className
    )
    return (
        <button type={type} className={classes}>
            {children ? children : title}
        </button>
    )
}
