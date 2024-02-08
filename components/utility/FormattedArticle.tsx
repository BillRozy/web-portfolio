import BodyText from './BodyText'

export default function FormattedArticle({
    children,
    centered = false,
}: {
    children: React.ReactNode
    centered?: boolean
}) {
    const positionClasses = [centered ? 'text-center' : 'text-start']
    const classes = [...positionClasses].join(' ')
    return (
        <p className={classes}>
            <BodyText>{children}</BodyText>
        </p>
    )
}
