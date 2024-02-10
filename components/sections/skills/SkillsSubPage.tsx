import Skill from './Skill'

export default function SkillsSubPage() {
    const skills = [
        {
            title: 'HTML',
            description: '5 Years Experience',
        },
        {
            title: 'CSS',
            description: '5 Years Experience',
        },
        {
            title: 'JavaScript',
            description: '5 Years Experience',
        },
        {
            title: 'Vue',
            description: '5 Years Experience',
        },
        {
            title: 'React',
            description: '2 Years Experience',
        },
        {
            title: 'TailwindCSS',
            description: '1 Year Experience',
        },
        {
            title: 'TypeScript',
            description: '3 Years Experience',
        },
        {
            title: 'Python',
            description: '5 Years Experience',
        },
        {
            title: 'Node.js',
            description: '3 Years Experience',
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
