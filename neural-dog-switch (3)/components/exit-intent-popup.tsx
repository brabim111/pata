"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true)
        setHasShown(true)
      }
    }

    // Wait a bit before adding the listener to avoid triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 3000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasShown])

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full animate-in fade-in zoom-in duration-300">
        <div className="relative p-6">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-red-600">Espere!</h3>
            <p className="text-lg font-medium">Oferta Especial de Última Chance</p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg mb-4">
            <p className="text-gray-700 mb-2">
              Antes de sair, queremos oferecer um <span className="font-bold">desconto adicional de 10%</span> no Pacote
              Completo PataLimpa.
            </p>
            <p className="text-gray-700">
              Esta oferta é válida apenas por <span className="font-bold">15 minutos</span> e não será repetida.
            </p>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center">
              <span className="font-bold text-emerald-800">Preço Normal:</span>
              <span className="text-gray-500 line-through">R$29,90</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-emerald-800">Preço Especial:</span>
              <span className="font-bold text-emerald-800">R$24,91</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Link
                href="https://pay.cakto.com.br/vhtf92e?utm_source=website&utm_medium=exit_popup&utm_campaign=special_offer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aproveitar Oferta Especial
              </Link>
            </Button>
            <Button variant="outline" onClick={() => setShowPopup(false)} className="w-full">
              Não, prefiro pagar mais depois
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
