"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-full bg-emerald-600 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
                <path d="M14.5 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.96-1.45-2.344-2.5" />
                <path d="M8 14v.5" />
                <path d="M16 14v.5" />
                <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
                <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
              </svg>
            </div>
            <span className="font-bold text-xl">PataLimpa</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#benefits" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Benefícios
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Como Funciona
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Histórias de Sucesso
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Perguntas Frequentes
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Preços
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <Link href="#get-started">Começar</Link>
          </Button>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col gap-4">
            <Link
              href="#benefits"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Histórias de Sucesso
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Perguntas Frequentes
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </Link>
            <Button asChild className="mt-2">
              <Link href="#get-started" onClick={() => setIsMenuOpen(false)}>
                Começar
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
