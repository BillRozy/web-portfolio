import Image from 'next/image'
import Link from 'next/link'
import { RedirectType, redirect } from 'next/navigation'

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>
        header
        <nav>

        </nav>
      </header>

      <section>
        { children }
      </section>

      <footer>
        footer
      </footer>
    </>

  )
}
