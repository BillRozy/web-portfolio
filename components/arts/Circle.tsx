import React from 'react'
import { twMerge } from 'tailwind-merge'

const SvgCircle = ({ className = '' }: { className?: string }) => {
    const classes = twMerge('stroke-art-primary', className)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={129} height={129} className={classes}>
            <circle cx={830.5} cy={585.5} r={64} fill="none" transform="translate(-766 -521)" />
        </svg>
    )
}

export default SvgCircle
