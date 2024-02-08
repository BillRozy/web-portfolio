import React from 'react'
import circleSvg from '@/public/pattern-circle.svg'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

export default function Circle({ className = '' }: { className?: string }) {
    const defaultSizes = 'h-[129px] w-[129px]'
    const classes = twMerge(defaultSizes, className)
    return (
        <div className={classes}>
            <Image src={circleSvg} fill alt="circle-art"></Image>
        </div>
    )
}
