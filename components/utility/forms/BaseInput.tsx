import React, { ReactElement, ReactNode } from 'react'

function ErrorSymbol() {
    return (
        <span className="flex justify-center items-center absolute rounded-full text-[#FF6F5B] border-[1px] border-[#FF6F5B] size-6 top-1/4 right-0">
            !
        </span>
    )
}

export default function BaseInput({
    title,
    placeholder = title,
    errors = [],
    classNames = [],
    input,
    showErrorSymbol = true,
}: {
    title: string
    placeholder?: string
    errors?: string[]
    classNames?: string[]
    input: ReactElement
    showErrorSymbol?: boolean
}) {
    const hasErrors = errors.length > 0
    const commonClasses = [
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
    const neutralClasses = ['border-neutral-500']
    const hoverClasses = ['hover:border-primary-400']
    const focusClasses = ['focus:ring-0', 'focus:border-primary-400']
    const errorClasses = ['border-[#FF6F5B]']
    const classes = [
        ...commonClasses,
        ...(hasErrors ? errorClasses : neutralClasses),
        ...hoverClasses,
        ...focusClasses,
        ...classNames,
    ].join(' ')
    const render_input = React.cloneElement(input, {
        placeholder: placeholder.toUpperCase(),
        className: classes,
    })
    return (
        <div className="flex flex-col gap-1">
            <div className="relative">
                {render_input}
                {hasErrors && showErrorSymbol ? (
                    <ErrorSymbol></ErrorSymbol>
                ) : null}
            </div>
            {hasErrors ? (
                <span className="text-[#FF6F5B] text-xs self-end">
                    {errors[0]}
                </span>
            ) : null}
        </div>
    )
}
