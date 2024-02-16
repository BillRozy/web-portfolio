import { FaLinkedin, FaGithub, FaTelegram, FaGoogle } from 'react-icons/fa'
import HeadingM from './utility/headings/HeadingM'
import { IconType } from 'react-icons/lib'
import { ReactElement } from 'react'
const LINK_TO_LINKEDIN = 'https://www.linkedin.com/in/oleg-budylin-8471b1295/'
const LINK_TO_GITHUB = 'https://github.com/BillRozy'
const LINK_TO_TELEGRAM = 'https://t.me/billrozy'
const LINK_TO_GMAIL = 'oleg.budylin.pub@gmail.com'

export default function Socials() {
    const buttons: [string, ReactElement][] = [
        [LINK_TO_LINKEDIN, <FaLinkedin key="lk" />],
        [LINK_TO_GITHUB, <FaGithub key="gh"></FaGithub>],
        [LINK_TO_TELEGRAM, <FaTelegram key="tg"></FaTelegram>],
        [LINK_TO_GMAIL, <FaGoogle key="gm"></FaGoogle>],
    ]
    return (
        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <HeadingM>@billrozy</HeadingM>
            <div className="flex flex-grow-0 flex-row items-center justify-evenly gap-6 text-font-secondary">
                {buttons.map(([link, icon]) => (
                    <a
                        className="text-2xl hover:scale-110 hover:text-primary md:text-3xl"
                        href={link}
                        target="_blank"
                        key={link}
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </div>
    )
}
