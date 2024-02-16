import React, { ReactElement, ReactNode } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

function ErrorSymbol() {
    return (
        <span className="absolute right-0 top-1/4 flex size-6 items-center justify-center rounded-full border-[1px] border-[#FF6F5B] text-[#FF6F5B]">
            !
        </span>
    )
}

export default function BaseInput({
    title,
    placeholder = title,
    errors = [],
    className = '',
    renderInput,
    showErrorSymbol = true,
}: {
    title: string
    placeholder?: string
    errors?: string[]
    className?: string
    renderInput: (placeholder: string, className: string) => ReactElement
    showErrorSymbol?: boolean
}) {
    const hasErrors = errors.length > 0
    const commonClasses = [
        'text-font-main',
        'form-input',
        'bg-transparent',
        'border-x-0',
        'border-t-0',
        'border-b-[1px]',
        'placeholder-neutral-500',
        'font-medium',
        'p-4',
        'pr-9',
        'placeholder:tracking-tight',
        'w-full',
    ]
    const neutralClasses = 'border-neutral-400'
    const hoverClasses = 'hover:border-primary'
    const focusClasses = 'focus:ring-0 focus:border-primary'
    const errorClasses = 'border-[#FF6F5B]'
    const classes = twMerge(
        commonClasses,
        hasErrors ? errorClasses : neutralClasses,
        hoverClasses,
        focusClasses,
        className
    )
    return (
        <div className="flex flex-col gap-1">
            <div className="relative">
                {renderInput(placeholder.toUpperCase(), classes)}
                {hasErrors && showErrorSymbol ? <ErrorSymbol></ErrorSymbol> : null}
            </div>
            {hasErrors ? <span className="self-end text-xs text-[#FF6F5B]">{errors[0]}</span> : null}
        </div>
    )
}
