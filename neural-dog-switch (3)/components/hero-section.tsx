"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Award, Shield, TrendingUp } from "lucide-react"
import { useState } from "react"
import { PainQuiz } from "./pain-quiz"

export function HeroSection() {
  const [showQuiz, setShowQuiz] = useState(false)

  // URLs das imagens dos depoimentos
  const testimonialImages = [
    "https://optimalhealthscout.shop/wp-content/uploads/2025/05/01.png",
    "https://optimalhealthscout.shop/wp-content/uploads/2025/05/02.png",
    "https://optimalhealthscout.shop/wp-content/uploads/2025/05/03.png",
    "https://optimalhealthscout.shop/wp-content/uploads/2025/05/04.png",
    "https://optimalhealthscout.shop/wp-content/uploads/2025/05/05.png",
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-12">
          {/* Headline */}
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 mx-auto w-fit bg-emerald-100 text-emerald-700 hover:bg-emerald-100 px-3 py-1.5 text-sm font-medium">
              Método Cientificamente Comprovado
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Pare de Limpar Xixi de Cachorro <span className="text-emerald-600">Para Sempre</span>
            </h1>

            {/* Pain questions */}
            <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
              <p className="text-lg font-medium text-red-800 mb-2">Você está cansado de:</p>
              <ul className="text-left space-y-2 text-red-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✓</span>
                  <span>Acordar com o cheiro de xixi todas as manhãs?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✓</span>
                  <span>Gastar fortunas com produtos de limpeza e tapetes?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">✓</span>
                  <span>Sentir vergonha quando visitas percebem o cheiro em sua casa?</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Photo */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://optimalhealthscout.shop/wp-content/uploads/2025/05/nova-capa.png"
                alt="Guia PataLimpa"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-medium text-lg">Veja a transformação</p>
                  <p className="text-sm opacity-80">De acidentes a hábitos perfeitos</p>
                </div>
              </div>

              {/* Certification badge */}
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                <div className="bg-yellow-400 rounded-full p-2 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-lg shadow-lg p-3 md:p-4 max-w-[150px] md:max-w-[200px]">
              <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs md:text-sm font-medium">4.9/5</span>
              </div>
              <p className="text-[10px] md:text-xs text-gray-600">"Meu filhote foi treinado em 5 dias! Incrível!"</p>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center w-full max-w-3xl mx-auto px-2">
            <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 mb-8 shadow-md">
              <p className="text-lg md:text-xl text-gray-600 mb-6 text-center">
                O método PataLimpa reprograma os hábitos de banheiro do seu cão em apenas 5 dias, não meses. Nossa
                abordagem baseada no cérebro tem uma taxa de sucesso de 97%.
              </p>

              <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm">Funciona em 3-7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm">97% de taxa de sucesso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm">Garantia de 30 dias</span>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <Button
                  onClick={() => setShowQuiz(true)}
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white w-full max-w-xs sm:w-auto animate-pulse-scale"
                >
                  Resolva o Problema do Seu Cão Agora
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  <Shield className="h-4 w-4 inline mr-1" />
                  Garantia dupla: 30 dias + resultados em 7 dias ou devolvemos seu dinheiro
                </p>
              </div>
            </div>

            {/* Social proof counter */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-center">
                <TrendingUp className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <span className="font-medium">10.347+ donos de cães já resolveram este problema</span>
              </div>
              <div className="flex -space-x-2">
                {testimonialImages.map((image, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Cliente ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-medium text-emerald-600">
                  +99
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>

      {/* Quiz modal */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            <PainQuiz onClose={() => setShowQuiz(false)} />
          </div>
        </div>
      )}
    </section>
  )
}
