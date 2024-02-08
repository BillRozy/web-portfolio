import React from 'react'

export default function Separator({ className = '' }: { className?: string }) {
    return (
        <div
            className={`border-solid border-b-[1px] border-lightgray w-full my-2 ${className}`}
        ></div>
    )
}
