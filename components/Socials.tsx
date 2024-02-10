import { FaLinkedin, FaGithub, FaTelegram, FaGoogle } from 'react-icons/fa'
import HeadingM from './utility/headings/HeadingM'
const LINK_TO_LINKEDIN = 'https://www.linkedin.com/in/oleg-budylin-8471b1295/'
const LINK_TO_GITHUB = 'https://github.com/BillRozy'
const LINK_TO_TELEGRAM = 'https://t.me/billrozy'
const LINK_TO_GMAIL = 'oleg.budylin.pub@gmail.com'

export default function Socials() {
    return (
        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <HeadingM>@billrozy</HeadingM>
            <div className="flex flex-grow-0 flex-row items-center justify-evenly gap-6 text-white">
                <a className="text-2xl hover:scale-110" href={LINK_TO_LINKEDIN} target="_blank">
                    <FaLinkedin></FaLinkedin>
                </a>
                <a className="text-2xl hover:scale-110" href={LINK_TO_GITHUB} target="_blank">
                    <FaGithub></FaGithub>
                </a>
                <a className="text-2xl hover:scale-110" href={LINK_TO_TELEGRAM} target="_blank">
                    <FaTelegram></FaTelegram>
                </a>
                <a className="text-2xl hover:scale-110" href={LINK_TO_GMAIL} target="_blank">
                    <FaGoogle></FaGoogle>
                </a>
            </div>
        </div>
    )
}
