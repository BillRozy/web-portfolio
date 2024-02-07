import React from 'react'
import HeadingXL from '@/components/utility/headings/HeadingXL'

export default function GreetingsHeading() {
    return (
        <div>
            <HeadingXL centered>
                Nice to meet you! I&apos;am&nbsp;
                <span className="underline underline-offset-8 decoration-primary-400">
                    Oleg Budylin
                </span>
                .
            </HeadingXL>
        </div>
    )
}
