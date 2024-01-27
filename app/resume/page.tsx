const LINKEDIN_REDIRECT_URI = `http://localhost:3000/linkedin-redirect-handler`
import { randomBytes } from 'crypto'
import Face from '@/components/Face'
import AboutMe from '@/components/AboutMe'
import Box from '@/components/utility/Box'
import Skills from '@/components/Skills'
import AboutMeDetails from '@/components/AboutMeDetails'

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
            <section className="flex flex-col md:flex-row md:flex-auto p-3 md:p-8 lg:p-12 gap-4">
                <section className="flex flex-col lg:flex-row gap-3">
                    <section className="flex flex-col min-[540px]:max-md:flex-row gap-4">
                        <Face></Face>
                        <AboutMeDetails></AboutMeDetails>
                    </section>
                    <Skills></Skills>
                </section>
                <AboutMe></AboutMe>
            </section>
        </main>
    )
}
