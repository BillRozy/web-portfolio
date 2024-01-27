import Image from 'next/image'
import { FaLinkedin, FaGithub, FaTelegram, FaGoogle } from 'react-icons/fa'

const LINK_TO_LINKEDIN = 'https://www.linkedin.com/in/oleg-budylin-8471b1295/'
const LINK_TO_GITHUB = 'https://github.com/BillRozy'
const LINK_TO_TELEGRAM = 'https://t.me/billrozy'
const LINK_TO_GMAIL = 'oleg.budylin.pub@gmail.com'

export default function Face() {
    return (
        <section className="flex flex-auto md:flex-col md:items-center bg-white shadow-md shadow-slate-100 h-fit rounded-md overflow-hidden">
            <div className="aspect-square relative w-24 min-[540px]:max-md:w-32 md:w-36 lg:w-48 shrink-0 mr-2 overflow-hidden md:rounded-full md:mx-8 md:mt-8 m-0 md:shadow-md shadow-slate-100">
                <Image
                    alt="Photo of me"
                    src="/me.jpg"
                    width={320}
                    height={320}
                ></Image>
            </div>
            <div className="flex flex-col w-full justify-evenly md:gap-2 p-3 lg:p-12 md:p-8">
                <span className="font-bold text-xl hover:underline">
                    Oleg Budylin
                </span>
                <span className="font-light w-min">@billrozy</span>
                <div className="flex flex-row flex-wrap gap-2">
                    <a
                        className="text-2xl hover:scale-110"
                        href={LINK_TO_LINKEDIN}
                        target="_blank"
                    >
                        <FaLinkedin></FaLinkedin>
                    </a>
                    <a
                        className="text-2xl hover:scale-110"
                        href={LINK_TO_GITHUB}
                        target="_blank"
                    >
                        <FaGithub></FaGithub>
                    </a>
                    <a
                        className="text-2xl hover:scale-110"
                        href={LINK_TO_TELEGRAM}
                        target="_blank"
                    >
                        <FaTelegram></FaTelegram>
                    </a>
                    <a
                        className="text-2xl hover:scale-110"
                        href={LINK_TO_GMAIL}
                        target="_blank"
                    >
                        <FaGoogle></FaGoogle>
                    </a>
                </div>
            </div>
        </section>
    )
}
