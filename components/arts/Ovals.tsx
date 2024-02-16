import React from 'react'
import { twMerge } from 'tailwind-merge'

const SvgOvals = ({ className = '' }: { className?: string }) => {
    const classes = twMerge('stroke-art-secondary dark:opacity-25', className)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={530} height={129} className={classes}>
            <g fill="none" fillRule="evenodd">
                <ellipse cx={265} cy={40} rx={264.5} ry={39.5} />
                <ellipse cx={265} cy={52} rx={264.5} ry={39.5} />
                <ellipse cx={265} cy={65} rx={264.5} ry={39.5} />
                <ellipse cx={265} cy={77} rx={264.5} ry={39.5} />
                <ellipse cx={265} cy={89} rx={264.5} ry={39.5} />
            </g>
        </svg>
    )
}
export default SvgOvals
