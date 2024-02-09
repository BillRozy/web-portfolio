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
        <li className="flex flex-col items-center p-2 md:items-start md:gap-y-4">
            <HeadingL>{title}</HeadingL>
            <FormattedArticle>{description}</FormattedArticle>
        </li>
    )
}
