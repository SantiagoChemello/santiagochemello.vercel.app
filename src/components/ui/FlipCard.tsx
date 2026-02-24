import { useState, type ReactNode } from 'react'

interface FlipCardProps {
    children: ReactNode
    className?: string
    flipDirection?: 'horizontal' | 'vertical'
}

interface FlipCardSideProps {
    children: ReactNode
    className?: string
}

export function FlipCard({ children, className = '', flipDirection = 'horizontal' }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false)

    const rotateAxis = flipDirection === 'vertical' ? 'rotateX' : 'rotateY'

    return (
        <div
            className={`group [perspective:1000px] cursor-pointer ${className}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div
                className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                    transform: isFlipped ? `${rotateAxis}(180deg)` : `${rotateAxis}(0deg)`,
                }}
            >
                {children}
            </div>
        </div>
    )
}

export function FlipCardFront({ children, className = '' }: FlipCardSideProps) {
    return (
        <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] ${className}`}>
            {children}
        </div>
    )
}

export function FlipCardBack({ children, className = '' }: FlipCardSideProps) {
    return (
        <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] ${className}`}>
            {children}
        </div>
    )
}
