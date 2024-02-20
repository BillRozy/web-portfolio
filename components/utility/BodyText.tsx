import React from 'react'

export default function BodyText({ children }: { children: React.ReactNode }) {
    const classes = ['text-base', 'md:text-lg', 'tracking-wide', 'text-font-main', 'break-normal', 'text-pretty'].join(
        ' '
    )
    return <span className={classes}>{children}</span>
}
