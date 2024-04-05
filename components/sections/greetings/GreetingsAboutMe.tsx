import React from 'react'
import FormattedArticle from '@/components/utility/FormattedArticle'
import { FormattedMessage } from 'react-intl'

export default function GreetingsAboutMe() {
    return (
        <FormattedArticle className="max-w-md text-center md:text-start">
            <FormattedMessage
                id="app.aboutMe"
                description="Say words about me"
                defaultMessage="Based in Hungary, Budapest, I am a full-stack developer experienced in creating web applications and testing
                libraries in Automotive area."
            />
        </FormattedArticle>
    )
}
