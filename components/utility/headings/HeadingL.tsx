export default function HeadingL({
    children,
    centered,
}: {
    children: React.ReactNode
    centered?: boolean
}) {
    const alignment = [centered ? 'text-center' : 'text-start']
    const classes = [
        'text-[32px]',
        'md:text-5xl',
        'font-semibold',
        'text-white',
        'tracking-normal',
        ...alignment,
    ].join(' ')
    return <h2 className={classes}>{children}</h2>
}
