import GreetingsHeading from './GreetingsHeading'
import React from 'react'
import GreetingsAboutMe from './GreetingsAboutMe'
import PrimaryButton from '@/components/utility/buttons/PrimaryButton'
import Socials from '@/components/Socials'
import Image from 'next/image'

export default function GreetingsSubPage() {
    return (
        <section className="relative flex flex-col items-center gap-5">
            <div className="absolute -top-8 -z-10 aspect-auto h-fit w-fit place-self-center">
                <Image alt="Photo of me" src="/image-profile-mobile.webp" width={174} height={383}></Image>
            </div>
            <Socials></Socials>
            <div className="mt-80 flex w-full flex-col items-center gap-5">
                <GreetingsHeading></GreetingsHeading>
                <GreetingsAboutMe></GreetingsAboutMe>
                <PrimaryButton title="Contact Me"></PrimaryButton>
            </div>
        </section>
    )
}
