import { ButtonHTMLAttributes } from 'react'

export default function PrimaryButton({
    title,
    type = 'button',
    children,
}: {
    title?: string
    type?: 'submit' | 'button'
    children?: React.ReactNode
}) {
    return (
        <button
            type={type}
            className="tracking-widest font-medium text-base border-b-2 border-solid border-primary-400 text-white hover:text-primary-400 uppercase py-2"
        >
            {children ? children : title}
        </button>
    )
}
