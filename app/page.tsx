import Circle from '@/components/arts/Circle'
import Ovals from '@/components/arts/Ovals'
import ContactsSubPage from '@/components/sections/contacts/ContactsSubPage'
import GreetingsSubPage from '@/components/sections/greetings/GreetingsSubPage'
import ProjectsSubPage from '@/components/sections/projects/ProjectsSubPage'
import SkillsSubPage from '@/components/sections/skills/SkillsSubPage'
import BackgroundLayer from '@/components/utility/BackgroundLayer'
import Separator from '@/components/utility/Separator'

export default function Home() {
    return (
        <main className="relative mx-auto flex flex-col gap-14 overflow-hidden">
            <BackgroundLayer className="bg-darkgray"></BackgroundLayer>
            <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 p-4 pt-5 md:gap-14 md:p-8 xl:pt-8">
                <GreetingsSubPage></GreetingsSubPage>
                <Separator></Separator>
                <SkillsSubPage></SkillsSubPage>
                <Separator className="md:invisible"></Separator>
                <ProjectsSubPage></ProjectsSubPage>
            </section>
            <section className="relative">
                <BackgroundLayer className="bg-mediumgray"></BackgroundLayer>
                <div id="contactform" className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:pb-12 md:pt-16">
                    <ContactsSubPage></ContactsSubPage>
                </div>
            </section>

            {/* start of art objects */}
            <Ovals className="absolute -left-[342px] top-[124px] -z-30 md:top-[86px] xl:-left-[100px] xl:top-[133px]"></Ovals>
            {/* this circle is here for all screens, except > xl, for xl it is in GreetingsSubPage */}
            <Circle className="absolute -right-[65px] top-[254px] -z-30 md:top-[472px] xl:hidden"></Circle>
            <Ovals className="absolute -right-[340px] top-[1652px] -z-30 md:top-[1340px] lg:top-[1090px] xl:-right-[270px] xl:top-[1200px]"></Ovals>
            <Ovals className="absolute -left-[342px] bottom-[288px] -z-30 md:-left-[370px] md:bottom-[180px] xl:-left-[205px]"></Ovals>
            {/* end of art objects */}
        </main>
    )
}
