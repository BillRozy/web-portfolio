import PrimaryButton from '@/components/utility/buttons/PrimaryButton'
import HeadingXL from '@/components/utility/headings/HeadingXL'
import React from 'react'
import Project, { ProjectType } from './Project'
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { basePath } from '@/next.config'
import Carousel from '@/components/utility/carousel/Carousel'
import { FormattedMessage } from 'react-intl'
const ProjectImage = ({
    desktop,
    tablet,
    mobile,
}: {
    desktop: StaticImport | string
    tablet: StaticImport | string
    mobile: StaticImport | string
}) => {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <img src={`${basePath}/${desktop}`} alt="" className="absolute left-0 top-0 w-full" />
            <img
                src={`${basePath}/${tablet}`}
                alt=""
                className="absolute left-1/2 top-1/4 w-2/5 rounded-sm shadow-lg ring-4 ring-black"
            />
            <img
                src={`${basePath}/${mobile}`}
                alt=""
                className="absolute left-1/2 top-1/2 w-1/6 -translate-x-1/2 rounded-md ring-4 ring-black"
            />
        </div>
    )
}

export default function ProjectsSubPage() {
    const projects: ProjectType[] = [
        {
            title: 'Loopsides - Responsive Web Page',
            img: (
                <ProjectImage
                    desktop="/loopsides-desktop.webp"
                    tablet="/loopsides-tablet.webp"
                    mobile="/loopsides-mobile.webp"
                ></ProjectImage>
            ),
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS'],
            linkToGithub: 'https://github.com/BillRozy/FM-CSS-2',
        },
        {
            title: 'Newspaper - Accessible Web Page',
            img: (
                <ProjectImage
                    desktop="/access-desktop.webp"
                    tablet="/access-tablet.webp"
                    mobile="/access-mobile.webp"
                ></ProjectImage>
            ),
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS'],
            linkToGithub: 'https://github.com/BillRozy/FM-Access-4',
        },
        {
            title: 'Bookmarks - Interesting Web Page',
            img: (
                <ProjectImage
                    desktop="/bookmarks-desktop.png"
                    tablet="/bookmarks-tablet.png"
                    mobile="/bookmarks-mobile.png"
                ></ProjectImage>
            ),
            skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS'],
            linkToGithub: 'https://github.com/BillRozy/FM-CSS-4',
        },
        {
            title: 'This Portfolio Itself!',
            img: (
                <ProjectImage
                    desktop="/portfolio-desktop.webp"
                    tablet="/portfolio-tablet.webp"
                    mobile="/portfolio-mobile.webp"
                ></ProjectImage>
            ),
            skills: ['HTML', 'CSS', 'TypeScript', 'React', 'TailwindCSS', 'Next.js', 'React-Intl'],
            linkToGithub: 'https://github.com/BillRozy/web-portfolio',
        },
    ]
    const projectRenderFunctions = projects.map((project) => {
        return { [`Project${project.title}`]: () => <Project project={project} key={project.title}></Project> }[
            `Project${project.title}`
        ]
    })
    return (
        <div className="flex flex-col gap-y-8 md:gap-y-16">
            <div className="flex flex-row items-center justify-between">
                <HeadingXL>
                    <FormattedMessage
                        id="app.projectSectionTitle"
                        description="Title for projects section"
                        defaultMessage="Projects"
                    />
                </HeadingXL>
                <PrimaryButton>
                    <Link href="#contactform">
                        <FormattedMessage
                            id="app.contactMeLink"
                            description="Contact me link text"
                            defaultMessage="Contact Me"
                        />
                    </Link>
                </PrimaryButton>
            </div>
            <div className="w-full lg:hidden">
                <Carousel>{projectRenderFunctions}</Carousel>
            </div>
            <div className="hidden grid-cols-1 gap-12 md:grid-cols-2 lg:grid">
                {projects.map((project) => (
                    <Project project={project} key={project.title}></Project>
                ))}
            </div>
        </div>
    )
}
