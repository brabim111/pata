"use client"

import type React from "react"

import { useState } from "react"

export function BeforeAfterComparison() {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative h-[400px] overflow-hidden rounded-lg border-8 border-white shadow-xl">
        {/* Before image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://optimalhealthscout.shop/wp-content/uploads/2025/05/imagem_gerada-2025-05-17T234147.937.png')`,
            width: "100%",
          }}
        ></div>

        {/* After image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://optimalhealthscout.shop/wp-content/uploads/2025/05/depois-casa-limpa.jpg')`,
            width: `${sliderPosition}%`,
            borderRight: "3px solid white",
          }}
        ></div>

        {/* Slider control */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="h-full w-[3px] bg-white pointer-events-none"
            style={{ left: `${sliderPosition}%`, position: "absolute" }}
          ></div>
          <div
            className="h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%`, position: "absolute", transform: "translateX(-50%)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-600"
            >
              <path d="m9 18 6-6-6-6" />
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          Antes
        </div>
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          Depois
        </div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="w-full mt-4"
      />

      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-bold text-red-800 mb-2">Antes do PataLimpa</h4>
          <ul className="text-left text-red-700 space-y-2">
            <li>• Acidentes diários</li>
            <li>• Cheiro persistente</li>
            <li>• Móveis danificados</li>
            <li>• Frustração constante</li>
            <li>• Gastos com produtos de limpeza</li>
          </ul>
        </div>
        <div className="bg-emerald-50 p-4 rounded-lg">
          <h4 className="font-bold text-emerald-800 mb-2">Depois do PataLimpa</h4>
          <ul className="text-left text-emerald-700 space-y-2">
            <li>• Casa sempre limpa</li>
            <li>• Sem odores desagradáveis</li>
            <li>• Móveis preservados</li>
            <li>• Relacionamento harmonioso</li>
            <li>• Economia significativa</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
