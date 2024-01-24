const LINKEDIN_REDIRECT_URI = `http://localhost:3000/linkedin-redirect-handler`
import { randomBytes } from 'crypto'
import Face from '@/components/Face'
import AboutMe from '@/components/AboutMe'
import Box from '@/components/utility/Box'
import Skills from '@/components/Skills'

function getAuthURI() {
    const LI_AUTH_URL = 'https://www.linkedin.com/oauth/v2/authorization'
    const searchParams = new URLSearchParams({
        response_type: 'code',
        redirect_uri: LINKEDIN_REDIRECT_URI,
        state: randomBytes(8).toString('hex'),
        scope: 'openid profile email',
    })
    return `${LI_AUTH_URL}?${searchParams.toString()}`
}

export default function MyResume({ children }: { children: React.ReactNode }) {
    return (
        <main className="mx-auto w-full container min-w-72">
            <section className="flex flex-col md:flex-row p-3 md:p-8 lg:p-12 gap-4">
                <section className="flex flex-row md:flex-col p-3 lg:p-12 md:p-8 gap-8 bg-white shadow-md shadow-slate-100 h-fit">
                    <Face></Face>
                </section>
                <Skills></Skills>
                <section className="p-3 lg:p-12 md:p-8 bg-white overflow-y-auto max-h-64 md:max-h-[640px] shadow-md shadow-slate-100">
                    <h1 className="text-lg font-semibold sticky -mx-3 top-0 -translate-y-3 p-3 bg-slate-100/90">
                        About Me
                    </h1>
                    <AboutMe></AboutMe>
                </section>
            </section>
        </main>
    )
}
