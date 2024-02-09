import React from 'react'
import { twMerge } from 'tailwind-merge'
import ovalSvg from '@/public/pattern-rings.svg'
import Image from 'next/image'

export default function Ovals({ className = '' }: { className?: string }) {
    const defaultSizes = 'h-[129px] w-[530px]'
    const classes = twMerge(defaultSizes, className)
    return (
        <div className={classes}>
            <Image src={ovalSvg} fill alt="oval-art"></Image>
        </div>
    )
}
