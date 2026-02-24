import { motion } from 'framer-motion'
import { CardContainer, CardBody, CardItem } from './ui/FloatingCard'

const projects = [
    {
        title: 'Bloomly',
        type: 'Mobile App',
        description:
            'A lifestyle growth app designed for anyone who wants to elevate their life with intention — turning self-development into a structured, rewarding journey.',
        image: '/bloomly.jpg',
        repo: 'https://github.com/SantiagoChemello/bloomly-app',
        tech: ['TypeScript'],
    },
    {
        title: 'Taskify',
        type: 'Web App',
        description:
            'A minimalist and elegant web application for managing your daily tasks. Simple yet powerful, it helps you organize personal and professional activities efficiently.',
        image: '/taskify.jpg',
        repo: 'https://github.com/SantiagoChemello/taskify-app',
        tech: ['Ruby on Rails'],
    },
]

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6 },
}

export default function Works() {
    return (
        <section id="works" className="pt-10 pb-3">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div {...fadeUp}>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">
                            Projects
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                            >
                                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                                    <CardContainer containerClassName="w-full !p-0">
                                        <CardBody className="bg-card relative group/card hover:shadow-2xl hover:shadow-primary/[0.07] border-border rounded-2xl p-5 border w-full">
                                            {/* Thumbnail */}
                                            <CardItem translateZ={80} className="w-full">
                                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-card">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </CardItem>

                                            {/* Info */}
                                            <CardItem translateZ={40} className="mt-4 w-full">
                                                <h3 className="text-foreground font-semibold text-sm group-hover/card:text-primary transition-colors duration-200">
                                                    {project.title} — {project.type}
                                                </h3>
                                                <p className="text-muted-foreground text-xs mt-1">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-3">
                                                    {project.tech.map((t) => (
                                                        <span
                                                            key={t}
                                                            className="text-xs text-muted-foreground px-3 py-1.5 rounded-full border border-border bg-secondary/50"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </CardItem>
                                        </CardBody>
                                    </CardContainer>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
