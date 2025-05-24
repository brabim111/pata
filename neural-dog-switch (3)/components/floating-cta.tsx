"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past 1000px
      const scrollPosition = window.scrollY
      if (scrollPosition > 1000 && !isClosed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isClosed])

  const handleClose = () => {
    setIsClosed(true)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white p-3 rounded-lg shadow-lg border border-emerald-100 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700 animate-pulse-scale">
        <Link
          href="https://pay.cakto.com.br/vhtf92e?utm_source=website&utm_medium=floating_button&utm_campaign=complete_plan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          Obter Pacote Completo
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>

      <button onClick={handleClose} className="text-gray-500 hover:text-gray-700" aria-label="Fechar">
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
