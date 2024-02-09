import GreetingsHeading from './GreetingsHeading'
import React from 'react'
import GreetingsAboutMe from './GreetingsAboutMe'
import PrimaryButton from '@/components/utility/buttons/PrimaryButton'
import Socials from '@/components/Socials'
import Image from 'next/image'
import myPhotoMobile from '@/public/image-profile-mobile.webp'
import myPhotoTablet from '@/public/image-profile-tablet.webp'
import Link from 'next/link'

export default function GreetingsSubPage() {
    return (
        <section className="relative flex flex-col items-center gap-5">
            <div className="absolute -top-5 -z-10 aspect-auto h-fit w-fit place-self-center md:-right-8 md:-top-8 md:-z-40">
                <div className="relative h-[383px] w-[174px] md:hidden">
                    <Image alt="Photo of me" src={myPhotoMobile} fill priority={true}></Image>
                </div>
                <div className="relative hidden h-[600px] w-[322px] md:block">
                    <Image alt="Photo of me" src={myPhotoTablet} fill priority={true}></Image>
                </div>
            </div>
            <Socials></Socials>
            <div className="mt-80 flex w-full flex-col items-center gap-5 md:mt-14 md:items-start md:gap-12">
                <GreetingsHeading></GreetingsHeading>
                <GreetingsAboutMe></GreetingsAboutMe>
                <PrimaryButton>
                    <Link href="#contactform">Contact Me</Link>
                </PrimaryButton>
            </div>
        </section>
    )
}
