import GreetingsHeading from './GreetingsHeading'
import React from 'react'
import GreetingsAboutMe from './GreetingsAboutMe'
import PrimaryButton from '@/components/utility/buttons/PrimaryButton'
import Socials from '@/components/Socials'
import Image from 'next/image'
import myPhotoMobile from '@/public/ME.PORTRAIT.BW.MOBILE.webp'
import myPhotoTablet from '@/public/ME.PORTRAIT.BW.TABLET.webp'
import myPhotoDesktop from '@/public/ME.PORTRAIT.BW.DESKTOP.webp'

import Link from 'next/link'
import Circle from '@/components/arts/Circle'
import BackgroundLayer from '@/components/utility/BackgroundLayer'

export default function GreetingsSubPage() {
    return (
        <section className="relative flex flex-col items-center gap-5 xl:mb-32">
            <div className="absolute -top-5 -z-10 aspect-auto h-fit w-fit place-self-center md:-right-8 md:-top-8 md:-z-40 xl:-top-10">
                <div className="relative h-[383px] w-[174px] md:hidden">
                    <BackgroundLayer className="bg-gradient-to-t from-neutral-300/10 to-main-bg/0"></BackgroundLayer>
                    <Image alt="Photo of me" src={myPhotoMobile} fill></Image>
                </div>
                <div className="relative hidden h-[600px] w-[322px] md:max-xl:block">
                    <BackgroundLayer className="bg-[#242424] light:bg-yellow-100"></BackgroundLayer>
                    <Image alt="Photo of me" src={myPhotoTablet} fill></Image>
                </div>
                <div className="relative hidden h-[720px] w-[445px] xl:block">
                    <BackgroundLayer className="bg-[#242424] light:bg-yellow-100"></BackgroundLayer>
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
