const MY_BIRTHDAY = new Date(1994, 8, 4)
const CAREER_STARTED = new Date(2016, 6, 5)

const getAge = (): string =>
    `${Math.floor((Date.now() - MY_BIRTHDAY.getTime()) / 31536000000)} years`
export default function AboutMeDetails() {
    const getExperience = (): string => {
        const diffInSeconds = Date.now() - CAREER_STARTED.getTime()
        const diffInYears = Math.floor(diffInSeconds / 31536000000)
        const diffInMonths = Math.floor(
            12 * ((diffInSeconds % 31536000000) / 31536000000)
        )
        return (
            `${diffInYears} years` +
            (diffInMonths > 0 ? ` and ${diffInMonths} months` : '')
        )
    }
    const paramValueMap = [
        ['Age:', getAge()],
        ['Experience:', getExperience()],
        ['Location:', 'Budapest, Hungary'],
    ]
    return (
        <section className="flex flex-col p-3 lg:p-12 md:p-8 gap-3 bg-white shadow-md shadow-slate-100 h-fit rounded-md">
            {paramValueMap.map(([key, value]) => (
                <div
                    className="flex flex-row flex-wrap justify-center md:justify-normal"
                    key={key}
                >
                    <span className="font-light mr-1">{key}</span>
                    <span>{value}</span>
                </div>
            ))}
        </section>
    )
}
