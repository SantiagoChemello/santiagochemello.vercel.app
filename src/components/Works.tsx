import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
    {
        title: 'Project Alpha',
        type: 'Identity',
        description: 'Visual Identity & Strategic Direction (2023)',
        gradient: 'from-orange-500 via-pink-400 to-teal-400',
    },
    {
        title: 'Experience Beta',
        type: 'Platform',
        description: 'Full-stack React & Design System (2024)',
        gradient: 'from-slate-600 via-slate-500 to-cyan-700',
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
        <section id="works" className="py-3">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    {...fadeUp}
                    className="bg-card border border-border rounded-3xl p-8 md:p-10"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">
                            Selected Works
                        </h2>
                        <a
                            href="#works"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer hidden sm:inline-flex items-center gap-1"
                        >
                            View all 12 projects
                            <ArrowUpRight size={14} />
                        </a>
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="group cursor-pointer"
                            >
                                {/* Thumbnail */}
                                <div
                                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} mb-4`}
                                >
                                    {/* Abstract shapes for visual interest */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {i === 0 ? (
                                            /* Abstract blobs for Project Alpha */
                                            <div className="relative">
                                                <div className="w-32 h-32 rounded-full bg-orange-400/60 blur-sm" />
                                                <div className="w-28 h-28 rounded-full bg-pink-400/60 blur-sm absolute top-4 left-12" />
                                                <div className="w-24 h-24 rounded-full bg-teal-400/50 blur-sm absolute -top-2 left-8" />
                                            </div>
                                        ) : (
                                            /* Dashboard mockup for Experience Beta */
                                            <div className="w-3/4 h-3/4 bg-background/30 backdrop-blur-sm rounded-lg border border-white/10 p-3">
                                                <div className="space-y-2">
                                                    <div className="h-2 bg-white/20 rounded w-3/4" />
                                                    <div className="h-2 bg-white/15 rounded w-1/2" />
                                                    <div className="mt-3 grid grid-cols-3 gap-2">
                                                        <div className="h-12 bg-white/10 rounded" />
                                                        <div className="h-12 bg-white/10 rounded" />
                                                        <div className="h-12 bg-white/10 rounded" />
                                                    </div>
                                                    <div className="h-16 bg-white/10 rounded mt-2" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                                        <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                                            <ArrowUpRight size={18} className="text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <h3 className="text-foreground font-semibold text-sm group-hover:text-primary transition-colors duration-200">
                                    {project.title} — {project.type}
                                </h3>
                                <p className="text-muted-foreground text-xs mt-1">
                                    {project.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
