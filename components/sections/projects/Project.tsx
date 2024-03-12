import BackgroundLayer from '@/components/utility/BackgroundLayer'
import BodyText from '@/components/utility/BodyText'
import PrimaryButton from '@/components/utility/buttons/PrimaryButton'
import HeadingM from '@/components/utility/headings/HeadingM'
import React, { ReactElement } from 'react'

export type ProjectType = {
    title: string
    img: ReactElement
    skills: string[]
    linkToGithub?: string
}

const GitHubLink = ({ linkToGithub }: { linkToGithub?: string }) => {
    if (linkToGithub == null) return null
    return (
        <a href={linkToGithub} target="_blank">
            Check on Github
        </a>
    )
}

export default function Project({ project }: { project: ProjectType }) {
    return (
        <div className="group relative flex flex-shrink-0 flex-col items-start gap-2">
            <div className="relative aspect-[4/3] w-full touch-none">
                {project.img}
                <BackgroundLayer className="z-0 hidden bg-overflow-bg/90 xl:invisible xl:block xl:hover:cursor-pointer xl:group-hover:visible"></BackgroundLayer>
                <PrimaryButton className="left-0 right-0 top-1/2 mx-auto hidden max-w-40 -translate-y-1/2 xl:invisible xl:absolute xl:block xl:group-hover:visible">
                    <GitHubLink linkToGithub={project.linkToGithub}></GitHubLink>
                </PrimaryButton>
            </div>
            <HeadingM>
                <span className="uppercase">{project.title}</span>
            </HeadingM>
            <ul className="flex flex-row flex-wrap gap-x-4 uppercase md:mb-2">
                {project.skills.map((skill) => (
                    <li key={skill}>
                        <BodyText>{skill}</BodyText>
                    </li>
                ))}
            </ul>
            <PrimaryButton className="xl:hidden">
                <GitHubLink linkToGithub={project.linkToGithub}></GitHubLink>
            </PrimaryButton>
        </div>
    )
}
