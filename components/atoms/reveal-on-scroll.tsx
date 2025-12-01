
"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealOnScrollProps = {
  children: ReactNode
  className?: string
  delayMs?: number
}

export function RevealOnScroll({
  children,
  className,
  delayMs,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.15,
      },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  const base = className ? className : ""

  const animClasses = visible
    ? "animate-in fade-in slide-in-from-bottom-4 duration-700"
    : "opacity-0 translate-y-4"

  return (
    <div
      ref={ref}
      className={`${base} ${animClasses}`}
      style={visible && delayMs ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}
