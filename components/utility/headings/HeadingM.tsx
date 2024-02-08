export default function HeadingM({
    children,
    centered = false,
}: {
    children: React.ReactNode
    centered?: boolean
}) {
    const alignment = [centered ? 'text-center' : 'text-start']
    const classes = [
        'text-2xl',
        'md:text-3xl',
        'font-semibold',
        'text-white',
        ...alignment,
    ].join(' ')
    return <h3 className={classes}>{children}</h3>
}
