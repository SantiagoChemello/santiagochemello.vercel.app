import { useEffect, useRef } from 'react'

const techs = [
    { name: 'Ruby on Rails', icon: '◆' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'MySQL', icon: '⊞' },
    { name: 'PostgreSQL', icon: '⊡' },
    { name: 'Agile / Scrum', icon: '↻' },
    { name: 'Python', icon: '⟨⟩' },
    { name: 'Java', icon: 'J' },
    { name: 'React', icon: 'R' },
    { name: '.NET', icon: '⧉' },
]

function TechPill({ name, icon }: { name: string; icon: string }) {
    return (
        <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-card/50 whitespace-nowrap shrink-0 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-200 cursor-default select-none">
            <span className="text-primary text-base" aria-hidden="true">{icon}</span>
            <span>{name}</span>
        </div>
    )
}

export default function TechTicker() {
    const items = [...techs, ...techs]
    const trackRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!trackRef.current || !sectionRef.current) return
            const rect = sectionRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const progress = (windowHeight - rect.top) / (windowHeight + rect.height)
            const offset = (progress - 0.5) * 400 + 45
            trackRef.current.style.transform = `translateX(${-offset}px)`
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section ref={sectionRef} className="py-3 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="relative bg-card border border-border rounded-2xl py-4 overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

                    <div
                        ref={trackRef}
                        className="flex gap-4 w-max transition-transform duration-100 ease-out"
                    >
                        {items.map((tech, i) => (
                            <TechPill key={`${tech.name}-${i}`} name={tech.name} icon={tech.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
