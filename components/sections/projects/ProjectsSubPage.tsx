import PrimaryButton from '@/components/utility/buttons/PrimaryButton'
import HeadingXL from '@/components/utility/headings/HeadingXL'
import React from 'react'
import Project, { ProjectType } from './Project'

export default function ProjectsSubPage() {
    const projects: ProjectType[] = [
        {
            title: 'Bench Battles',
            img: '/thumbnail-project-1-small.webp',
            skills: ['HTML', 'CSS', 'TypeScript', 'React', 'Redux', 'Electron'],
            linkToGithub: 'https://github.com/BillRozy/bench-battles',
        },
        {
            title: 'MuSync',
            img: '/thumbnail-project-2-small.webp',
            skills: ['HTML', 'CSS', 'TypeScript', 'Vue', 'Quasar', 'Pinia'],
            linkToGithub: 'https://github.com/BillRozy/musink',
        },
    ]
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
                <HeadingXL>Projects</HeadingXL>
                <PrimaryButton title="Contact me"></PrimaryButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                {projects.map((project) => (
                    <Project project={project} key={project.title}></Project>
                ))}
            </div>
        </div>
    )
}
