import FormattedArticle from '@/components/utility/FormattedArticle'
import HeadingL from '@/components/utility/headings/HeadingL'
import React from 'react'

export default function Skill({
    title,
    description,
}: {
    title: string
    description: string
}) {
    return (
        <li className="flex flex-col p-2 items-center md:items-start">
            <HeadingL>{title}</HeadingL>
            <FormattedArticle>{description}</FormattedArticle>
        </li>
    )
}
