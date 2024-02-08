import BodyText from '@/components/utility/BodyText'
import PrimaryButton from '@/components/utility/buttons/PrimaryButton'
import HeadingM from '@/components/utility/headings/HeadingM'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

export type ProjectType = {
    title: string
    img: StaticImport | string
    skills: string[]
    linkToGithub?: string
}

export default function Project({ project }: { project: ProjectType }) {
    return (
        <div className="flex flex-col gap-2 items-start">
            <div className="relative aspect-[4/3] w-full">
                <Image src={project.img} alt="project 1 image" fill></Image>
            </div>
            <HeadingM>
                <span className="uppercase">{project.title}</span>
            </HeadingM>
            <ul className="flex flex-row flex-wrap gap-x-4 uppercase">
                {project.skills.map((skill) => (
                    <li key={skill}>
                        <BodyText>{skill}</BodyText>
                    </li>
                ))}
            </ul>
            <PrimaryButton>
                <a href={project.linkToGithub} target="_blank">
                    Check on Github
                </a>
            </PrimaryButton>
        </div>
    )
}
