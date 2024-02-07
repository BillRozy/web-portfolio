import Socials from '@/components/Socials'
import FormattedArticle from '@/components/utility/FormattedArticle'
import Separator from '@/components/utility/Separator'
import HeadingXL from '@/components/utility/headings/HeadingXL'
import React from 'react'
import ContactForm from './ContactForm'

export default function ContactsSubPage() {
    return (
        <section className="flex flex-col gap-4 items-center">
            <HeadingXL centered>Contact</HeadingXL>
            <FormattedArticle centered>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                cupiditate veritatis quisquam vel expedita blanditiis tempore
                aperiam labore odit itaque!
            </FormattedArticle>
            <ContactForm></ContactForm>
            <Separator className="mb-6"></Separator>
            <Socials></Socials>
        </section>
    )
}
