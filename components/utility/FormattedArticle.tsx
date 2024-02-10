import BodyText from './BodyText'

export default function FormattedArticle({
    children,
    className = '',
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <p className={className}>
            <BodyText>{children}</BodyText>
        </p>
    )
}
