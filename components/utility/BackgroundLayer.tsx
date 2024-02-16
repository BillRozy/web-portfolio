import React from 'react'

export default function BackgroundLayer({ className = '' }: { className?: string }) {
    return <div className={`absolute -z-50 size-full transition-colors duration-500 ${className}`}></div>
}
