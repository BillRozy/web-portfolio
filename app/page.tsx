import Image from 'next/image'
import Link from 'next/link'
import { RedirectType, redirect } from 'next/navigation'

export default function Home({ children }: { children: React.ReactNode }) {
    return redirect('/resume')
    // <section className="md:container md:mx-auto px-4 min-h-full">
    //   <h1> Welcome to my portfolio website!</h1>
    //   <article>
    //     TBD
    //   </article>
    //   <ul>
    //     <li><Link href="/resume"> Resume </Link></li>
    //     <li><Link href="/portfolio"> Portfolio </Link></li>
    //   </ul>
    // </section>
}
