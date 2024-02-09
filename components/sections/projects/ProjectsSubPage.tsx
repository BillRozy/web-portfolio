import PrimaryButton from '@/components/utility/buttons/PrimaryButton'
import HeadingXL from '@/components/utility/headings/HeadingXL'
import React from 'react'
import Project, { ProjectType } from './Project'
import { basePath } from '@/next.config'
import Link from 'next/link'

export default function ProjectsSubPage() {
    const projects: ProjectType[] = [
        {
            title: 'Bench Battles',
            img: `${basePath}/thumbnail-project-1-small.webp`,
            skills: ['HTML', 'CSS', 'TypeScript', 'React', 'Redux', 'Electron'],
            linkToGithub: 'https://github.com/BillRozy/bench-battles',
        },
        {
            title: 'MuSync',
            img: `${basePath}/thumbnail-project-2-small.webp`,
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
