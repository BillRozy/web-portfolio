import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Circle({ className = '' }: { className?: string }) {
    const defaultSizes = 'h-[129px] w-[129px]'
    const essential = "bg-[url('/pattern-circle.svg')] bg-cover bg-center"
    const classes = twMerge(essential, defaultSizes, className)
    return <div className={classes}></div>
}
