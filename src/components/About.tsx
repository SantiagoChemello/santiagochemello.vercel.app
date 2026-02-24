import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Languages } from 'lucide-react'

const experience = [
    {
        title: 'Junior Software Developer',
        company: 'Tekh Studios',
        location: 'Montevideo',
        period: 'Mar 2024 — Sep 2025',
        bullets: [
            'Built web applications using Ruby on Rails',
            'Worked with agile methodologies (Scrum)',
            'Integrated AI tooling into development workflows',
            'Version control & collaboration via GitHub',
            'Authored technical documentation',
        ],
    },
]

const education = {
    degree: "Bachelor's in Computer Engineering",
    university: 'Universidad ORT Uruguay',
    location: 'Montevideo',
    period: '2020 — Present (3rd year)',
    courses: [
        'Agile Software Engineering',
        'Application Design',
        'Clean Code',
    ],
}

const languages = [
    { lang: 'Spanish', level: 'Native' },
    { lang: 'English', level: 'C2 — Proficient' },
]

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6 },
}

export default function About() {
    return (
        <section id="about" className="py-3">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                        {...fadeUp}
                        className="bg-card border border-border rounded-3xl p-8 md:p-10 card-glow"
                    >
                        <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-5">
                            About Me
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                            <p>
                                Advanced Computer Engineering student at Universidad ORT Uruguay
                                with 1.5 years of hands-on experience in software development.
                                Skilled in TypeScript, C#, Ruby on Rails, MySQL, and agile
                                methodologies.
                            </p>
                            <p>
                                Focused on continuous learning, code quality, and
                                collaborative teamwork.
                            </p>
                            <p>Based in Montevideo, Uruguay.</p>
                        </div>

                        <div className="mt-6 pt-5 border-t border-border">
                            <div className="flex items-center gap-2 mb-3">
                                <Languages size={15} className="text-primary" />
                                <h2 className="text-lg font-semibold text-foreground">Languages</h2>
                            </div>
                            <div className="flex gap-3">
                                {languages.map((l) => (
                                    <span
                                        key={l.lang}
                                        className="text-xs text-muted-foreground px-3 py-1.5 rounded-full border border-border bg-secondary/50"
                                    >
                                        {l.lang} — {l.level}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.6, delay: 0.12 }}
                        className="bg-card border border-border rounded-3xl p-8 md:p-10 card-glow"
                    >
                        <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-5">
                            Experience
                        </h2>
                        <div className="space-y-5 mb-7">
                            {experience.map((job, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex flex-col items-center pt-1">
                                        <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                                            <Briefcase size={14} className="text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-foreground font-semibold text-sm">
                                            {job.title}
                                        </p>
                                        <p className="text-muted-foreground text-xs mt-0.5">
                                            {job.company}, {job.location} • {job.period}
                                        </p>
                                        <ul className="mt-2 space-y-1">
                                            {job.bullets.map((b, j) => (
                                                <li
                                                    key={j}
                                                    className="text-muted-foreground text-xs flex items-start gap-2"
                                                >
                                                    <span className="text-primary mt-[5px] shrink-0 text-[8px] leading-none">●</span>
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-5 border-t border-border">
                            <h2 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-4">
                                Education
                            </h2>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center pt-1">
                                    <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                                        <GraduationCap size={14} className="text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-foreground font-semibold text-sm">
                                        {education.degree}
                                    </p>
                                    <p className="text-muted-foreground text-xs mt-0.5">
                                        {education.university}, {education.location} •{' '}
                                        {education.period}
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        {education.courses.map((c) => (
                                            <span
                                                key={c}
                                                className="text-[11px] text-muted-foreground px-2.5 py-1 rounded-full border border-border bg-secondary/50"
                                            >
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
