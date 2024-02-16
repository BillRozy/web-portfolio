import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Separator({ className = '' }: { className?: string }) {
    const baseClasses = 'border-font-main my-2 w-full border-b-[1px] border-solid'
    const finalClasses = twMerge(baseClasses, className)
    return <div className={finalClasses}></div>
}
