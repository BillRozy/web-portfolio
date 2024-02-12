import PrimaryButton from '@/components/utility/buttons/PrimaryButton'
import HeadingXL from '@/components/utility/headings/HeadingXL'
import React from 'react'
import Project, { ProjectType } from './Project'
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { basePath } from '@/next.config'
const ProjectImage = ({
    small,
    huge,
    alt,
}: {
    small: StaticImport | string
    huge: StaticImport | string
    alt: string
}) => {
    return (
        <>
            <Image src={`${basePath}/${small}`} alt={`${alt} small variant`} className="block xl:hidden" fill></Image>
            <Image src={`${basePath}/${huge}`} alt={`${alt} huge variant`} className="hidden xl:block" fill></Image>
        </>
    )
}

export default function ProjectsSubPage() {
    const projects: ProjectType[] = [
        {
            title: 'Bench Battles',
            img: (
                <ProjectImage
                    small="/thumbnail-project-1-small.webp"
                    huge="/thumbnail-project-1-large.webp"
                    alt="project 1"
                ></ProjectImage>
            ),
            skills: ['HTML', 'CSS', 'TypeScript', 'React', 'Redux', 'Electron'],
            linkToGithub: 'https://github.com/BillRozy/bench-battles',
        },
        {
            title: 'MuSync',
            img: (
                <ProjectImage
                    small="thumbnail-project-2-small.webp"
                    huge="thumbnail-project-2-large.webp"
                    alt="project 2"
                ></ProjectImage>
            ),
            skills: ['HTML', 'CSS', 'TypeScript', 'Vue', 'Quasar', 'Pinia'],
            linkToGithub: 'https://github.com/BillRozy/musink',
        },
    ]
    return (
        <div className="flex flex-col gap-y-8 md:gap-y-16">
            <div className="flex flex-row items-center justify-between">
                <HeadingXL>Projects</HeadingXL>
                <PrimaryButton>
                    <Link href="#contactform">Contact Me</Link>
                </PrimaryButton>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {projects.map((project) => (
                    <Project project={project} key={project.title}></Project>
                ))}
            </div>
        </div>
    )
}
