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
        <main className="relative flex flex-col gap-14 overflow-hidden">
            <BackgroundLayer className="bg-darkgray"></BackgroundLayer>
            <section className="flex flex-col gap-12 p-4 pt-5 md:gap-14 md:p-8 lg:p-16">
                <GreetingsSubPage></GreetingsSubPage>
                <Separator></Separator>
                <SkillsSubPage></SkillsSubPage>
                <Separator className="md:invisible"></Separator>
                <ProjectsSubPage></ProjectsSubPage>
            </section>
            <section className="relative">
                <BackgroundLayer className="bg-mediumgray"></BackgroundLayer>
                <div id="contactform" className="px-4 py-14 md:px-8 md:pb-12 md:pt-16 lg:p-16">
                    <ContactsSubPage></ContactsSubPage>
                </div>
            </section>
            {/* start of art objects */}
            <Ovals className="absolute -left-[342px] top-[124px] -z-30 md:top-[86px]"></Ovals>
            <Circle className="absolute -right-[65px] top-[254px] -z-30 md:top-[472px]"></Circle>
            <Ovals className="absolute -right-[340px] top-[1652px] -z-30 md:top-[1340px]"></Ovals>
            <Ovals className="absolute -left-[342px] bottom-[288px] -z-30 md:-left-[370px] md:bottom-[180px]"></Ovals>
            {/* end of art objects */}
        </main>
    )
}
