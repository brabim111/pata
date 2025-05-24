"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, CheckCircle } from "lucide-react"
import Link from "next/link"

interface PainQuizProps {
  onClose: () => void
}

export function PainQuiz({ onClose }: PainQuizProps) {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    dogAge: "",
    problemDuration: "",
    previousAttempts: "",
    problemType: "",
  })

  const handleAnswer = (question: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }))
    setStep((prev) => prev + 1)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Qual a idade do seu cão?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("dogAge", "puppy")}
              >
                <div className="text-left">
                  <p className="font-medium">Filhote</p>
                  <p className="text-sm text-gray-500">Menos de 1 ano</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("dogAge", "adult")}
              >
                <div className="text-left">
                  <p className="font-medium">Adulto</p>
                  <p className="text-sm text-gray-500">1 a 7 anos</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("dogAge", "senior")}
              >
                <div className="text-left">
                  <p className="font-medium">Sênior</p>
                  <p className="text-sm text-gray-500">Mais de 7 anos</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("dogAge", "unknown")}
              >
                <div className="text-left">
                  <p className="font-medium">Não tenho certeza</p>
                  <p className="text-sm text-gray-500">Idade desconhecida</p>
                </div>
              </Button>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Há quanto tempo seu cão tem problemas de xixi em casa?</h3>
            <div className="grid grid-cols-1 gap-3">
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("problemDuration", "recent")}
              >
                <div className="text-left">
                  <p className="font-medium">Problema recente</p>
                  <p className="text-sm text-gray-500">Começou nas últimas semanas</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("problemDuration", "months")}
              >
                <div className="text-left">
                  <p className="font-medium">Alguns meses</p>
                  <p className="text-sm text-gray-500">Problema persiste há 2-6 meses</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("problemDuration", "longterm")}
              >
                <div className="text-left">
                  <p className="font-medium">Problema crônico</p>
                  <p className="text-sm text-gray-500">Mais de 6 meses</p>
                </div>
              </Button>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Você já tentou outros métodos de treinamento?</h3>
            <div className="grid grid-cols-1 gap-3">
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("previousAttempts", "none")}
              >
                <div className="text-left">
                  <p className="font-medium">Nenhum método</p>
                  <p className="text-sm text-gray-500">Primeira tentativa de treinamento</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("previousAttempts", "basic")}
              >
                <div className="text-left">
                  <p className="font-medium">Métodos básicos</p>
                  <p className="text-sm text-gray-500">Tentei algumas dicas da internet</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("previousAttempts", "multiple")}
              >
                <div className="text-left">
                  <p className="font-medium">Múltiplos métodos</p>
                  <p className="text-sm text-gray-500">Já tentei vários métodos sem sucesso</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("previousAttempts", "professional")}
              >
                <div className="text-left">
                  <p className="font-medium">Ajuda profissional</p>
                  <p className="text-sm text-gray-500">Já consultei treinador ou veterinário</p>
                </div>
              </Button>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Qual o principal problema que você enfrenta?</h3>
            <div className="grid grid-cols-1 gap-3">
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("problemType", "everywhere")}
              >
                <div className="text-left">
                  <p className="font-medium">Faz xixi em qualquer lugar</p>
                  <p className="text-sm text-gray-500">Não tem local definido</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("problemType", "specific")}
              >
                <div className="text-left">
                  <p className="font-medium">Faz xixi em locais específicos</p>
                  <p className="text-sm text-gray-500">Sempre nos mesmos lugares</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("problemType", "night")}
              >
                <div className="text-left">
                  <p className="font-medium">Problemas noturnos</p>
                  <p className="text-sm text-gray-500">Principalmente durante a noite</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className="justify-start h-auto p-4"
                onClick={() => handleAnswer("problemType", "anxiety")}
              >
                <div className="text-left">
                  <p className="font-medium">Relacionado à ansiedade</p>
                  <p className="text-sm text-gray-500">Quando fica sozinho ou estressado</p>
                </div>
              </Button>
            </div>
          </div>
        )
      case 5:
        return (
          <div className="space-y-6 text-center">
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">Análise Concluída!</h3>
              <p className="text-emerald-700">
                Com base nas suas respostas, o Método PataLimpa é <span className="font-bold">97% compatível</span> com
                o problema do seu cão.
              </p>
            </div>

            <div className="p-4">
              <h4 className="font-medium mb-2">Recomendação Personalizada:</h4>
              <p className="text-gray-700 mb-4">
                Para cães{" "}
                {answers.dogAge === "puppy" ? "filhotes" : answers.dogAge === "adult" ? "adultos" : "seniores"} com
                problemas de
                {answers.problemDuration === "recent"
                  ? " início recente"
                  : answers.problemDuration === "months"
                    ? " alguns meses"
                    : " longo prazo"}
                , recomendamos o <span className="font-bold text-emerald-600">Pacote Completo PataLimpa</span> que
                inclui:
              </p>

              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Guia completo com técnicas específicas para o problema do seu cão</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Bônus especial: "Como lidar com{" "}
                    {answers.problemType === "anxiety"
                      ? "ansiedade"
                      : answers.problemType === "night"
                        ? "problemas noturnos"
                        : "marcação territorial"}
                    "
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Cronograma personalizado para cães que{" "}
                    {answers.previousAttempts === "multiple" || answers.previousAttempts === "professional"
                      ? "resistiram a outros métodos"
                      : "estão em primeiro treinamento"}
                  </span>
                </li>
              </ul>

              <Button asChild size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 animate-pulse-scale">
                <Link
                  href="https://pay.cakto.com.br/vhtf92e?utm_source=website&utm_medium=quiz&utm_campaign=complete_plan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Obter Solução Personalizada
                </Link>
              </Button>

              <p className="text-sm text-gray-500 mt-3">Acesso imediato após o pagamento + Garantia de 30 dias</p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Diagnóstico Personalizado</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="mb-6">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>Início</span>
          <span>Solução</span>
        </div>
      </div>

      {renderStep()}

      {step < 5 && (
        <div className="mt-6 flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={() => setStep((prev) => prev - 1)}>
              Voltar
            </Button>
          ) : (
            <div></div>
          )}
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </div>
      )}
    </div>
  )
}
