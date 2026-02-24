import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface TypewriterProps {
    text: string[]
    speed?: number
    deleteSpeed?: number
    waitTime?: number
    cursorChar?: string
    className?: string
}

export function Typewriter({
    text,
    speed = 70,
    deleteSpeed = 40,
    waitTime = 1500,
    cursorChar = '|',
    className = '',
}: TypewriterProps) {
    const [displayText, setDisplayText] = useState('')
    const indexRef = useRef(0)
    const charRef = useRef(0)
    const isDeletingRef = useRef(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        const tick = () => {
            const current = text[indexRef.current]
            if (!current) return

            if (isDeletingRef.current) {
                if (charRef.current > 0) {
                    charRef.current -= 1
                    setDisplayText(current.slice(0, charRef.current))
                    timeoutRef.current = setTimeout(tick, deleteSpeed)
                } else {
                    isDeletingRef.current = false
                    indexRef.current = (indexRef.current + 1) % text.length
                    timeoutRef.current = setTimeout(tick, 200)
                }
            } else if (charRef.current < current.length) {
                charRef.current += 1
                setDisplayText(current.slice(0, charRef.current))
                // Natural variance
                const variance = speed * 0.4
                const delay = speed + (Math.random() * variance * 2 - variance)
                timeoutRef.current = setTimeout(tick, delay)
            } else {
                timeoutRef.current = setTimeout(() => {
                    isDeletingRef.current = true
                    tick()
                }, waitTime)
            }
        }

        timeoutRef.current = setTimeout(tick, 400)

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [text, speed, deleteSpeed, waitTime])

    return (
        <span className={`inline-flex items-baseline ${className}`}>
            <span className="min-w-[0.25em]">{displayText}</span>
            <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                }}
                className="inline-block ml-[1px] text-current"
            >
                {cursorChar}
            </motion.span>
        </span>
    )
}
