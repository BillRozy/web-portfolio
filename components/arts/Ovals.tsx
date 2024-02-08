import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Ovals({ className = '' }: { className?: string }) {
    const defaultSizes = 'h-[129px] w-[530px]'
    const essential = "bg-[url('/pattern-rings.svg')] bg-cover bg-center"
    const classes = twMerge(essential, defaultSizes, className)
    return <div className={classes}></div>
}
