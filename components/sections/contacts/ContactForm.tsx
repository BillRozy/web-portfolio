'use client'

import React, { useState } from 'react'
import PrimaryButton from '@/components/utility/buttons/PrimaryButton'
import BaseInput from '@/components/utility/forms/BaseInput'
import { useForm, SubmitHandler } from 'react-hook-form'
import HeadingM from '@/components/utility/headings/HeadingM'
import HeadingL from '@/components/utility/headings/HeadingL'

type Inputs = {
    name: string
    email: string
    message: string
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const [emailSent, setEmailSent] = useState(false)
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('TODO: API Call to send an email')
        setEmailSent(true)
    }
    const nameErrors = [
        ...(errors.name?.type === 'required'
            ? ['Sorry, name is required']
            : []),
        ...(errors.name?.type === 'minLength'
            ? ['Sorry, name should be has at least 2 characters']
            : []),
        ...(errors.name?.type === 'maxLength'
            ? ['Sorry, name should be max 20 characters']
            : []),
    ]
    const emailErrors = [
        ...(errors.email?.type === 'required'
            ? ['Sorry, email is required']
            : []),
        ...(errors.email?.type === 'pattern'
            ? ['Sorry, this email is invalid']
            : []),
    ]
    const messageErrors = [
        ...(errors.message?.type === 'required'
            ? ['Sorry, message should not be empty']
            : []),
    ]
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-md flex-col gap-4 xl:min-w-96">
            {!emailSent ? (
                <>
                    <BaseInput
                        title="Name"
                        errors={nameErrors}
                        input={
                            <input
                                type="text"
                                {...register('name', {
                                    required: true,
                                    minLength: 2,
                                    maxLength: 20,
                                })}
                            ></input>
                        }
                    ></BaseInput>
                    <BaseInput
                        title="Email"
                        errors={emailErrors}
                        input={
                            <input
                                type="text"
                                {...register('email', {
                                    required: true,
                                    pattern:
                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })}
                            ></input>
                        }
                    ></BaseInput>
                    <BaseInput
                        title="Message"
                        errors={messageErrors}
                        showErrorSymbol={false}
                        input={
                            <textarea
                                className="resize-none"
                                rows={3}
                                {...register('message', { required: true })}
                            ></textarea>
                        }
                    ></BaseInput>
                    <div className="mb-12 mt-4 self-end">
                        <PrimaryButton type="submit" title="Send Message"></PrimaryButton>
                    </div>
                </>
            ) : (
                <div className="py-12">
                    <HeadingL>
                        <span className="underline decoration-primary-400 underline-offset-8">Thank You!</span>
                    </HeadingL>
                    <HeadingM>I will contact you soon!</HeadingM>
                </div>
            )}
        </form>
    )
}
