'use client'

import React, { useEffect, useState } from 'react'
import PrimaryButton from '@/components/utility/buttons/PrimaryButton'
import BaseInput from '@/components/utility/forms/BaseInput'
import { useForm, SubmitHandler } from 'react-hook-form'
import HeadingM from '@/components/utility/headings/HeadingM'
import HeadingL from '@/components/utility/headings/HeadingL'
import emailjs from '@emailjs/browser'
import { FormattedMessage, useIntl } from 'react-intl'

type Inputs = {
    name: string
    email: string
    message: string
}

const PUBLIC_KEY = 'CIOJMJouGv6pUyyx9'
const SERVICE_ID = 'service_x84lgjk'
const TEMPLATE_ID = 'template_5xgib3v'

export default function ContactForm() {
    const intl = useIntl()
    const nameTitle = intl.formatMessage({
        id: 'app.nameFormTitle',
        defaultMessage: 'Name',
    })
    const emailTitle = intl.formatMessage({
        id: 'app.emailFormTitle',
        defaultMessage: 'E-Mail',
    })
    const messageTitle = intl.formatMessage({
        id: 'app.messageFormTitle',
        defaultMessage: 'Message',
    })
    const nameIsRequiredWarning = intl.formatMessage(
        {
            id: 'app.requiredFieldWarning',
            defaultMessage: 'Sorry, field is required',
        },
        { field: nameTitle }
    )
    const nameShouldContainWarning = intl.formatMessage(
        {
            id: 'app.fieldShouldContainWarning',
            defaultMessage: 'Sorry, field should contain at least 2 characters',
        },
        { field: nameTitle, charactersCount: 2 }
    )
    const nameMaxLengthWarning = intl.formatMessage(
        {
            id: 'app.fieldMaxLengthWarning',
            defaultMessage: 'Sorry, field should contain max 20 characters',
        },
        { field: nameTitle, charactersCount: 20 }
    )
    const emailIsRequiredWarning = intl.formatMessage(
        {
            id: 'app.requiredFieldWarning',
            defaultMessage: 'Sorry, field is required',
        },
        { field: emailTitle }
    )
    const emailIsInvalidWarning = intl.formatMessage(
        {
            id: 'app.invalidFieldWarning',
            defaultMessage: 'Sorry, field is invalid',
        },
        { field: emailTitle }
    )
    const messageIsEmptyWarning = intl.formatMessage(
        {
            id: 'app.emptyFieldWarning',
            defaultMessage: 'Sorry, field should not be empty',
        },
        { field: messageTitle }
    )
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const [emailSent, setEmailSent] = useState(false)
    const onSubmit: SubmitHandler<Inputs> = async ({ name, email, message }) => {
        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                user_name: name,
                user_email: email,
                message: message,
            })
            setEmailSent(true)
        } catch (error) {
            console.log('Failed to send an email:', error)
            setEmailSent(false)
        }
    }
    const nameErrors = [
        ...(errors.name?.type === 'required' ? [nameIsRequiredWarning] : []),
        ...(errors.name?.type === 'minLength' ? [nameShouldContainWarning] : []),
        ...(errors.name?.type === 'maxLength' ? [nameMaxLengthWarning] : []),
    ]
    const emailErrors = [
        ...(errors.email?.type === 'required' ? [emailIsRequiredWarning] : []),
        ...(errors.email?.type === 'pattern' ? [emailIsInvalidWarning] : []),
    ]
    const messageErrors = [...(errors.message?.type === 'required' ? [messageIsEmptyWarning] : [])]
    useEffect(() => {
        emailjs.init({
            publicKey: PUBLIC_KEY,
        })
    }, [])
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-md flex-col gap-4 xl:min-w-96">
            {!emailSent ? (
                <>
                    <BaseInput
                        title={nameTitle}
                        errors={nameErrors}
                        renderInput={(placeholder, className) => (
                            <input
                                type="text"
                                placeholder={placeholder}
                                className={className}
                                {...register('name', {
                                    required: true,
                                    minLength: 2,
                                    maxLength: 20,
                                })}
                            ></input>
                        )}
                    ></BaseInput>
                    <BaseInput
                        title={emailTitle}
                        errors={emailErrors}
                        renderInput={(placeholder, className) => (
                            <input
                                placeholder={placeholder}
                                className={className}
                                type="text"
                                {...register('email', {
                                    required: true,
                                    pattern:
                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })}
                            ></input>
                        )}
                    ></BaseInput>
                    <BaseInput
                        title={messageTitle}
                        errors={messageErrors}
                        showErrorSymbol={false}
                        renderInput={(placeholder, className) => (
                            <textarea
                                placeholder={placeholder}
                                className={`resize-none scrollbar-thin ${className}`}
                                style={{ msScrollbarArrowColor: 'white' }}
                                rows={3}
                                {...register('message', { required: true })}
                            ></textarea>
                        )}
                    ></BaseInput>
                    <div className="mb-12 mt-4 self-end">
                        <PrimaryButton type="submit">
                            <FormattedMessage
                                id="app.sendMessageTitle"
                                description="Send Message"
                                defaultMessage="Send Message"
                            />
                        </PrimaryButton>
                    </div>
                </>
            ) : (
                <div className="mx-auto py-12">
                    <HeadingL className="mb-2 text-center">
                        <span className="underline decoration-primary underline-offset-8">
                            <FormattedMessage id="app.thanks" description="Say thanks" defaultMessage="Thank You!" />
                        </span>
                    </HeadingL>
                    <HeadingM>
                        <FormattedMessage
                            id="app.contactBackNtf"
                            description="Say that you will contact back"
                            defaultMessage="I will contact you soon!"
                        />
                    </HeadingM>
                </div>
            )}
        </form>
    )
}
