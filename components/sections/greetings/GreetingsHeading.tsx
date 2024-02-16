import React from 'react'
import HeadingXL from '@/components/utility/headings/HeadingXL'

export default function GreetingsHeading() {
    return (
        <div>
            <HeadingXL className="text-center md:text-start">
                <span>Nice to </span>
                <br className="hidden md:max-xl:inline-block"></br>
                <span>meet you! </span>
                <br className="hidden xl:inline-block"></br>
                <span>I&apos;m </span>
                <br className="hidden md:max-xl:inline-block"></br>
                <span className="underline decoration-primary underline-offset-8 md:underline-offset-[14px] xl:underline-offset-[17px]">
                    Oleg Budylin
                </span>
                .
            </HeadingXL>
        </div>
    )
}
