import Socials from '@/components/Socials'
import FormattedArticle from '@/components/utility/FormattedArticle'
import Separator from '@/components/utility/Separator'
import HeadingXL from '@/components/utility/headings/HeadingXL'
import React from 'react'
import ContactForm from './ContactForm'

export default function ContactsSubPage() {
    return (
        <section className="flex flex-col items-center gap-4">
            <section className="mx-auto mb-8 flex max-w-md flex-col items-center gap-4 md:gap-8">
                <HeadingXL>Contact</HeadingXL>
                <FormattedArticle className="text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque cupiditate veritatis quisquam vel
                    expedita blanditiis tempore aperiam labore odit itaque!
                </FormattedArticle>
                <ContactForm></ContactForm>
            </section>
            <Separator className="mb-6"></Separator>
            <Socials></Socials>
        </section>
    )
}
