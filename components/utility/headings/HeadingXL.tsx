export default function HeadingXL({
    children,
    centered = false,
}: {
    children: React.ReactNode
    centered?: boolean
}) {
    const alignment = [centered ? 'text-center' : 'text-start']
    const classes = [
        'text-[40px]',
        'leading-10',
        'md:text-7xl',
        'lg:text-[88px]',
        'font-semibold',
        'tracking-normal',
        'text-white',
        ...alignment,
    ].join(' ')
    return <h1 className={classes}>{children}</h1>
}
