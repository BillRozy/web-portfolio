import Socials from '@/components/Socials'
import FormattedArticle from '@/components/utility/FormattedArticle'
import Separator from '@/components/utility/Separator'
import HeadingXL from '@/components/utility/headings/HeadingXL'
import React from 'react'
import ContactForm from './ContactForm'

export default function ContactsSubPage() {
    return (
        <section className="flex flex-col items-center gap-4">
            <section className="mx-auto mb-8 flex flex-col items-center gap-4 md:gap-8 xl:mx-0 xl:w-full xl:flex-row xl:items-stretch xl:justify-between">
                <div className="flex flex-col items-center gap-4 md:gap-8 xl:items-start">
                    <HeadingXL>Contact</HeadingXL>
                    <FormattedArticle className="max-w-md text-center xl:max-w-lg xl:text-start">
                        I would love to hear about your project and how I could help. Please fill in the form, and I’ll
                        get back to you as soon as possible.
                    </FormattedArticle>
                </div>
                <ContactForm></ContactForm>
            </section>
            <Separator className="mb-6"></Separator>
            <Socials></Socials>
        </section>
    )
}
