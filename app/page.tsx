'use client'

import { ThemeContext } from '@/components/ThemeProvider'
import Circle from '@/components/arts/Circle'
import Ovals from '@/components/arts/Ovals'
import ContactsSubPage from '@/components/sections/contacts/ContactsSubPage'
import FooterSubPage from '@/components/sections/footer/FooterSubPage'
import GreetingsSubPage from '@/components/sections/greetings/GreetingsSubPage'
import ProjectsSubPage from '@/components/sections/projects/ProjectsSubPage'
import SkillsSubPage from '@/components/sections/skills/SkillsSubPage'
import BackgroundLayer from '@/components/utility/BackgroundLayer'
import Separator from '@/components/utility/Separator'
import { useContext } from 'react'

export default function Home() {
    const { theme } = useContext(ThemeContext)
    return (
        <main
            className={`${theme} theme-loading:opacity-0 scrollbar scrollbar-thumb-primary hover:scrollbar-thumb-stone-400 scrollbar-track-stone-900/90 light:scrollbar-track-stone-100 max-h-screen overflow-y-auto overflow-x-hidden opacity-100 transition-opacity duration-1000 `}
        >
            <section className="relative mx-auto flex flex-col">
                <BackgroundLayer className="bg-main-bg"></BackgroundLayer>
                <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 p-4 pt-5 md:gap-14 md:p-8 xl:pt-8">
                    <GreetingsSubPage></GreetingsSubPage>
                    <Separator></Separator>
                    <SkillsSubPage></SkillsSubPage>
                    <Separator className="md:invisible"></Separator>
                    <ProjectsSubPage></ProjectsSubPage>
                </section>
                <section className="relative mt-14">
                    <BackgroundLayer className="bg-secondary-bg"></BackgroundLayer>
                    <div className=" mx-auto max-w-6xl px-4 pt-14 md:px-8 md:pt-16">
                        <div id="contactform" className="pb-12">
                            <ContactsSubPage></ContactsSubPage>
                        </div>
                        <Separator className="my-0"></Separator>
                        <FooterSubPage></FooterSubPage>
                    </div>
                </section>
                {/* arts */}
                <div className="-z-30" data-nosnippet>
                    <Ovals className="absolute -left-[342px] top-[124px] md:top-[86px] xl:-left-[100px] xl:top-[133px]"></Ovals>
                    {/* this circle is here for all screens, except > xl, for xl it is in GreetingsSubPage */}
                    <Circle className="absolute -right-[65px] top-[254px] md:top-[472px] xl:hidden"></Circle>
                    <Ovals className="absolute -right-[340px] top-[1652px] md:top-[1340px] lg:top-[1090px] xl:-right-[270px] xl:top-[1200px]"></Ovals>
                    <Ovals className="absolute -left-[342px] bottom-[378px] md:-left-[370px] md:bottom-[256px] xl:-left-[205px]"></Ovals>
                </div>
            </section>
        </main>
    )
}
