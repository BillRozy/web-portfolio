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
        'border-b-2 border-solid border-primary py-2 text-base font-medium uppercase tracking-widest text-font-secondary hover:text-primary',
        className
    )
    return (
        <button type={type} className={classes}>
            {children ? children : title}
        </button>
    )
}
