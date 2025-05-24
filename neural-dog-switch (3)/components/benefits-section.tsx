import { Card, CardContent } from "@/components/ui/card"
import { Clock, Brain, Award, Sparkles, ThumbsUp, Heart } from "lucide-react"
import { SavingsCalculator } from "./savings-calculator"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-emerald-600" />,
      title: "Resultados Rápidos",
      description:
        "A maioria dos cães mostra melhora significativa em apenas 3-7 dias, não semanas ou meses como métodos tradicionais.",
    },
    {
      icon: <Brain className="h-10 w-10 text-emerald-600" />,
      title: "Baseado em Neurociência",
      description:
        "Nosso método trabalha com os padrões cerebrais naturais do seu cão para criar mudanças comportamentais duradouras.",
    },
    {
      icon: <Award className="h-10 w-10 text-emerald-600" />,
      title: "Comprovadamente Eficaz",
      description: "97% de taxa de sucesso em todas as raças e idades de cães, mesmo em casos difíceis.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-emerald-600" />,
      title: "Sem Métodos Severos",
      description: "Completamente baseado em reforço positivo. Sem gritos, punições ou estresse para você ou seu cão.",
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-emerald-600" />,
      title: "Fácil de Seguir",
      description:
        "Instruções simples e passo a passo que qualquer pessoa pode implementar, independentemente da experiência.",
    },
    {
      icon: <Heart className="h-10 w-10 text-emerald-600" />,
      title: "Fortalece o Vínculo",
      description:
        "O processo de treinamento realmente melhora seu relacionamento com seu cão, construindo confiança e comunicação.",
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Por Que o PataLimpa Funciona</h2>
          <p className="text-lg text-gray-600 max-w-[800px]">
            Nossa abordagem revolucionária está mudando como os cães aprendem hábitos de banheiro trabalhando com seus
            padrões cerebrais naturais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-emerald-100 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison and calculator */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Compare o Custo</h3>
            <p className="text-gray-600 mb-6">
              Veja quanto você economiza ao resolver o problema de xixi do seu cão com o método PataLimpa:
            </p>

            <SavingsCalculator />
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Valor Real do Método PataLimpa</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="font-medium">Guia Completo PataLimpa</span>
                <span className="font-bold">R$97</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="font-medium">Bônus #1: Por Que Cães Fazem Xixi nos Lugares Errados</span>
                <span className="font-bold">R$67</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="font-medium">Bônus #2: A Rotina Perfeita de Banheiro</span>
                <span className="font-bold">R$47</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="font-medium">Bônus #3: Como os Cães Pensam</span>
                <span className="font-bold">R$87</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="font-medium">Acesso Vitalício e Atualizações</span>
                <span className="font-bold">Inestimável</span>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-lg">Valor Total</span>
                <span className="font-bold text-lg">R$298</span>
              </div>

              <div className="bg-emerald-100 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-emerald-800">Seu Investimento Hoje</span>
                  <span className="font-bold text-emerald-800 text-xl">Apenas R$29,90</span>
                </div>
                <p className="text-sm text-emerald-700 mt-2">
                  Economize R$268,10 (90% de desconto) - Oferta por tempo limitado!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
