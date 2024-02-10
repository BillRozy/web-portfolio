import GreetingsHeading from './GreetingsHeading'
import React from 'react'
import GreetingsAboutMe from './GreetingsAboutMe'
import PrimaryButton from '@/components/utility/buttons/PrimaryButton'
import Socials from '@/components/Socials'
import Image from 'next/image'
import myPhotoMobile from '@/public/image-profile-mobile.webp'
import myPhotoTablet from '@/public/image-profile-tablet.webp'
import myPhotoDesktop from '@/public/image-profile-desktop.webp'
import Link from 'next/link'
import Circle from '@/components/arts/Circle'

export default function GreetingsSubPage() {
    return (
        <section className="relative flex flex-col items-center gap-5 xl:mb-32">
            <div className="absolute -top-5 -z-10 aspect-auto h-fit w-fit place-self-center md:-right-8 md:-top-8 md:-z-40 xl:-top-10">
                <div className="relative h-[383px] w-[174px] md:hidden">
                    <Image alt="Photo of me" src={myPhotoMobile} fill></Image>
                </div>
                <div className="relative hidden h-[600px] w-[322px] md:max-xl:block">
                    <Image alt="Photo of me" src={myPhotoTablet} fill></Image>
                </div>
                <div className="relative hidden h-[720px] w-[445px] xl:block">
                    <Image alt="Photo of me" src={myPhotoDesktop} fill></Image>
                    {/* xl screen only circle is here  */}
                    <Circle className="absolute -left-[65px] bottom-16 hidden xl:block"></Circle>
                </div>
            </div>
            <Socials></Socials>
            <div className="mt-80 flex w-full flex-col items-center gap-5 md:mt-14 md:items-start md:gap-12 xl:mt-24 xl:gap-16">
                <GreetingsHeading></GreetingsHeading>
                <GreetingsAboutMe></GreetingsAboutMe>
                <PrimaryButton>
                    <Link href="#contactform" scroll={true}>
                        Contact Me
                    </Link>
                </PrimaryButton>
            </div>
        </section>
    )
}
