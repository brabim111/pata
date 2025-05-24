"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SavingsCalculator() {
  const [tapetes, setTapetes] = useState(2)
  const [produtos, setProdutos] = useState(1)
  const [meses, setMeses] = useState(12)
  const [totalEconomia, setTotalEconomia] = useState(0)

  useEffect(() => {
    // Cálculo: (custo tapetes + custo produtos) * meses - preço do método
    const custoTapetes = tapetes * 30 // R$30 por pacote de tapetes
    const custoProdutos = produtos * 25 // R$25 por produto de limpeza
    const custoMensal = custoTapetes + custoProdutos
    const custoTotal = custoMensal * meses
    const precoMetodo = 29.9
    const economia = custoTotal - precoMetodo

    setTotalEconomia(economia)
  }, [tapetes, produtos, meses])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="tapetes">Pacotes de tapetes higiênicos por mês</Label>
          <Input
            id="tapetes"
            type="number"
            min="0"
            max="10"
            value={tapetes}
            onChange={(e) => setTapetes(Number.parseInt(e.target.value) || 0)}
            className="mt-1"
          />
          <p className="text-xs text-gray-500 mt-1">Custo médio: R$30/pacote</p>
        </div>

        <div>
          <Label htmlFor="produtos">Produtos de limpeza por mês</Label>
          <Input
            id="produtos"
            type="number"
            min="0"
            max="10"
            value={produtos}
            onChange={(e) => setProdutos(Number.parseInt(e.target.value) || 0)}
            className="mt-1"
          />
          <p className="text-xs text-gray-500 mt-1">Custo médio: R$25/produto</p>
        </div>
      </div>

      <div>
        <Label htmlFor="meses">Período de cálculo (meses)</Label>
        <Input
          id="meses"
          type="number"
          min="1"
          max="60"
          value={meses}
          onChange={(e) => setMeses(Number.parseInt(e.target.value) || 1)}
          className="mt-1"
        />
      </div>

      <div className="bg-emerald-100 p-4 rounded-lg mt-6">
        <p className="font-medium text-emerald-800">Seu gasto atual com acidentes:</p>
        <p className="text-2xl font-bold text-emerald-800">R${((tapetes * 30 + produtos * 25) * meses).toFixed(2)}</p>

        <div className="mt-4 pt-4 border-t border-emerald-200">
          <p className="font-medium text-emerald-800">Sua economia com o PataLimpa:</p>
          <p className="text-2xl font-bold text-emerald-800">R${totalEconomia.toFixed(2)}</p>
          <p className="text-sm text-emerald-700 mt-1">
            {totalEconomia > 500
              ? "Uau! Você economizará muito dinheiro!"
              : totalEconomia > 200
                ? "Excelente economia a longo prazo!"
                : "Uma economia significativa!"}
          </p>
        </div>
      </div>
    </div>
  )
}
