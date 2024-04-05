import Skill from './Skill'
import { useIntl } from 'react-intl'

export default function SkillsSubPage() {
    const intl = useIntl()
    const years5ExperienceMessage = intl.formatMessage(
        {
            id: 'app.yearsExperienceMessage',
        },
        {
            num: 5,
        }
    )
    const years3ExperienceMessage = intl.formatMessage(
        {
            id: 'app.yearsExperienceMessage',
        },
        {
            num: 3,
        }
    )
    const years2ExperienceMessage = intl.formatMessage(
        {
            id: 'app.yearsExperienceMessage',
        },
        {
            num: 2,
        }
    )
    const years1ExperienceMessage = intl.formatMessage(
        {
            id: 'app.yearsExperienceMessage',
        },
        {
            num: 1,
        }
    )
    const skills = [
        {
            title: 'HTML',
            description: years5ExperienceMessage,
        },
        {
            title: 'CSS',
            description: years5ExperienceMessage,
        },
        {
            title: 'JavaScript',
            description: years3ExperienceMessage,
        },
        {
            title: 'Vue',
            description: years5ExperienceMessage,
        },
        {
            title: 'React',
            description: years2ExperienceMessage,
        },
        {
            title: 'TailwindCSS',
            description: years1ExperienceMessage,
        },
        {
            title: 'TypeScript',
            description: years3ExperienceMessage,
        },
        {
            title: 'Python',
            description: years5ExperienceMessage,
        },
        {
            title: 'Node.js',
            description: years3ExperienceMessage,
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
