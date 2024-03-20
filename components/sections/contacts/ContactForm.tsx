'use client'

import React, { useEffect, useState } from 'react'
import PrimaryButton from '@/components/utility/buttons/PrimaryButton'
import BaseInput from '@/components/utility/forms/BaseInput'
import { useForm, SubmitHandler } from 'react-hook-form'
import HeadingM from '@/components/utility/headings/HeadingM'
import HeadingL from '@/components/utility/headings/HeadingL'
import emailjs from '@emailjs/browser'

type Inputs = {
    name: string
    email: string
    message: string
}

const PUBLIC_KEY = 'CIOJMJouGv6pUyyx9'
const SERVICE_ID = 'service_x84lgjk'
const TEMPLATE_ID = 'template_5xgib3v'

export default function ContactForm() {
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
        ...(errors.name?.type === 'required' ? ['Sorry, name is required'] : []),
        ...(errors.name?.type === 'minLength' ? ['Sorry, name should be has at least 2 characters'] : []),
        ...(errors.name?.type === 'maxLength' ? ['Sorry, name should be max 20 characters'] : []),
    ]
    const emailErrors = [
        ...(errors.email?.type === 'required' ? ['Sorry, email is required'] : []),
        ...(errors.email?.type === 'pattern' ? ['Sorry, this email is invalid'] : []),
    ]
    const messageErrors = [...(errors.message?.type === 'required' ? ['Sorry, message should not be empty'] : [])]
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
                        title="Name"
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
                        title="Email"
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
                        title="Message"
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
                        <PrimaryButton type="submit" title="Send Message"></PrimaryButton>
                    </div>
                </>
            ) : (
                <div className="mx-auto py-12">
                    <HeadingL className="mb-2 text-center">
                        <span className="underline decoration-primary underline-offset-8">Thank You!</span>
                    </HeadingL>
                    <HeadingM>I will contact you soon!</HeadingM>
                </div>
            )}
        </form>
    )
}
