import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Gift, Shield, Clock } from "lucide-react"
import Link from "next/link"
import { CountdownTimer } from "./countdown-timer"

export function PricingSection() {
  const plans = [
    {
      name: "Guia PataLimpa",
      price: "R$19,90",
      originalPrice: "R$47",
      description: "O guia essencial para treinar seu cão",
      features: ["Guia completo de treinamento PataLimpa", "Garantia de devolução do dinheiro em 30 dias"],
      cta: "Comprar Agora",
      popular: false,
      link: "https://pay.cakto.com.br/3g2mv2p?utm_source=website&utm_medium=pricing&utm_campaign=basic_plan",
    },
    {
      name: "Pacote Completo PataLimpa",
      price: "R$29,90",
      originalPrice: "R$298",
      description: "Solução completa com bônus exclusivos",
      features: [
        {
          title: "Guia Completo PataLimpa",
          description:
            "Um sistema detalhado passo a passo que qualquer dono de cachorro pode seguir, com instruções claras para cada fase do treinamento.",
          isBonus: false,
        },
        {
          title: "Bônus #1: Por Que Cães Fazem Xixi nos Lugares Errados",
          description:
            "Descubra os 7 gatilhos neurológicos que fazem seu cão eliminar em lugares inadequados e como desativá-los permanentemente.",
          isBonus: true,
        },
        {
          title: "Bônus #2: A Rotina Perfeita de Banheiro",
          description:
            "Cronogramas diários personalizados por idade e raça para garantir o sucesso consistente do treinamento.",
          isBonus: true,
        },
        {
          title: "Bônus #3: Como os Cães Pensam",
          description:
            "Uma análise profunda da mente canina que revelará segredos de comunicação que 97% dos donos de cães não conhecem.",
          isBonus: true,
          exclusive: true,
        },
        {
          title: "Acesso Vitalício e Atualizações",
          description: "Tenha acesso a todo o conteúdo para sempre, incluindo todas as atualizações futuras.",
          isBonus: false,
        },
        {
          title: "Garantia de devolução do dinheiro em 30 dias",
          isBonus: false,
        },
      ],
      cta: "Obter Pacote Completo",
      popular: true,
      link: "https://pay.cakto.com.br/vhtf92e?utm_source=website&utm_medium=pricing&utm_campaign=complete_plan",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Escolha Seu Plano de Treinamento</h2>
          <p className="text-lg text-gray-600 max-w-[800px]">
            Selecione a solução perfeita para você e seu cão. Todos os planos incluem nosso comprovado método PataLimpa.
          </p>

          <div className="mt-6">
            <CountdownTimer hours={24} />
          </div>
        </div>

        {/* Limited spots banner */}
        <div className="max-w-5xl mx-auto mb-10 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center justify-center">
          <Clock className="h-5 w-5 text-yellow-600 mr-2" />
          <p className="text-yellow-800 font-medium">
            Apenas <span className="font-bold">11 vagas</span> restantes com este preço promocional!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plano Básico */}
          <Card className="border-2 border-gray-200 relative overflow-hidden">
            {/* Discount tag */}
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
              -58% OFF
            </div>

            <CardHeader>
              <CardTitle className="text-2xl">{plans[0].name}</CardTitle>
              <CardDescription>{plans[0].description}</CardDescription>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold">{plans[0].price}</span>
                  <span className="text-gray-500 line-through text-sm">{plans[0].originalPrice}</span>
                </div>
                <span className="text-gray-500 text-sm">pagamento único</span>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {plans[0].features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex flex-col">
              <Button asChild className="w-full bg-gray-900 hover:bg-gray-800 mb-3">
                <Link href={plans[0].link} target="_blank" rel="noopener noreferrer">
                  {plans[0].cta}
                </Link>
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield className="h-4 w-4" />
                <span>Pagamento 100% seguro</span>
              </div>
            </CardFooter>
          </Card>

          {/* Plano Completo */}
          <Card className="border-2 border-emerald-600 shadow-lg relative overflow-hidden">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 z-10">
              Recomendado
            </Badge>

            {/* Discount tag */}
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
              -90% OFF
            </div>

            {/* Ribbon */}
            <div className="absolute top-6 -right-8 bg-yellow-400 text-white px-8 py-1 transform rotate-45 text-sm font-bold shadow-md">
              MAIS VENDIDO
            </div>

            <CardHeader>
              <CardTitle className="text-2xl">{plans[1].name}</CardTitle>
              <CardDescription>{plans[1].description}</CardDescription>
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold">{plans[1].price}</span>
                  <span className="text-gray-500 line-through text-sm">{plans[1].originalPrice}</span>
                </div>
                <span className="text-gray-500 text-sm">pagamento único</span>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-4">
                {plans[1].features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    {feature.isBonus ? (
                      <Gift className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className={`font-medium ${feature.isBonus ? "text-emerald-600" : ""}`}>
                        {feature.title}
                        {feature.exclusive && (
                          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                            EXCLUSIVO
                          </span>
                        )}
                      </p>
                      {feature.description && <p className="text-sm text-gray-600 mt-1">{feature.description}</p>}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <p className="text-sm font-medium text-emerald-800">
                  Economize R$268,10 ao escolher o Pacote Completo e receba 3 bônus exclusivos!
                </p>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col">
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 mb-3 animate-pulse-scale">
                <Link href={plans[1].link} target="_blank" rel="noopener noreferrer">
                  {plans[1].cta}
                </Link>
              </Button>

              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield className="h-4 w-4" />
                  <span>Pagamento 100% seguro</span>
                </div>

                <div className="flex justify-center">
                  <img
                    src="https://optimalhealthscout.shop/wp-content/uploads/2025/05/png-clipart-security-earring-shoelaces-safe-payment-watercolor-gem-child-text.png"
                    alt="Pagamento Seguro"
                    className="h-10"
                  />
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Double guarantee */}
        <div className="mt-12 max-w-3xl mx-auto bg-blue-50 p-6 rounded-lg border border-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-blue-600 text-white rounded-full p-4">
                <Shield className="h-12 w-12" />
              </div>
            </div>

            <div className="md:w-3/4">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Garantia Dupla de Satisfação</h3>
              <p className="text-blue-700 mb-4">
                Estamos tão confiantes no método PataLimpa que oferecemos não uma, mas DUAS garantias:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Garantia de 30 dias</p>
                    <p className="text-sm text-blue-600">
                      Se você não ficar satisfeito por qualquer motivo, devolveremos 100% do seu dinheiro.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Garantia de resultados em 7 dias</p>
                    <p className="text-sm text-blue-600">
                      Se você não ver melhora significativa nos primeiros 7 dias, devolveremos seu dinheiro e você ainda
                      fica com o produto.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
