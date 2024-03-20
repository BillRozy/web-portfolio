import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function BackgroundLayer({ className = '' }: { className?: string }) {
    const finalClasses = twMerge('absolute -z-50 size-full transition-colors duration-500', className)
    return <div className={finalClasses}></div>
}
