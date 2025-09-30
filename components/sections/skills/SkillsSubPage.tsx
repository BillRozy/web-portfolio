import Skill from './Skill'
import { useIntl } from 'react-intl'

export default function SkillsSubPage() {
    const intl = useIntl()
    const getYearsExperienceMessage = (startYear: number) => {
        return intl.formatMessage(
            {
                id: 'app.yearsExperienceMessage',
            },
            {
                num: new Date().getFullYear() - startYear,
            }
        )
    }
    const skills = [
        {
            title: 'HTML',
            description: getYearsExperienceMessage(2018),
        },
        {
            title: 'CSS',
            description: getYearsExperienceMessage(2018),
        },
        {
            title: 'JavaScript',
            description: getYearsExperienceMessage(2018),
        },
        {
            title: 'Vue',
            description: getYearsExperienceMessage(2021),
        },
        {
            title: 'React',
            description: getYearsExperienceMessage(2021),
        },
        {
            title: 'TailwindCSS',
            description: getYearsExperienceMessage(2023),
        },
        {
            title: 'TypeScript',
            description: getYearsExperienceMessage(2023),
        },
        {
            title: 'Python',
            description: getYearsExperienceMessage(2019),
        },
        {
            title: 'Node.js',
            description: getYearsExperienceMessage(2020),
        },
    ]
    return (
        <ul className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3">
            {skills.map((skill) => (
                <Skill {...skill} key={skill.title}></Skill>
            ))}
        </ul>
    )
}
