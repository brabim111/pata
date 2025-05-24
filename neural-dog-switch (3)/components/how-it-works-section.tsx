import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BeforeAfterComparison } from "./before-after-comparison"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Avalie os Padrões do Seu Cão",
      description:
        "Use nossa ferramenta de avaliação simples para identificar os hábitos e gatilhos específicos do seu cão.",
      image: "https://optimalhealthscout.shop/wp-content/uploads/2025/05/imagem_gerada-2025-05-17T180444.992.png",
    },
    {
      number: "02",
      title: "Aplique a Técnica PataLimpa",
      description:
        "Siga nosso guia passo a passo para implementar a técnica principal que reprograma os padrões cerebrais do seu cão.",
      image: "https://optimalhealthscout.shop/wp-content/uploads/2025/05/imagem_gerada-2025-05-17T180648.846.png",
    },
    {
      number: "03",
      title: "Reforce Novos Comportamentos",
      description:
        "Use nossa programação de reforço comprovada para tornar os novos hábitos permanentes em apenas dias.",
      image: "https://optimalhealthscout.shop/wp-content/uploads/2025/05/imagem_gerada-2025-05-17T180843.079.png",
    },
    {
      number: "04",
      title: "Desfrute de uma Vida Sem Acidentes",
      description: "Celebre seu sucesso enquanto sua casa permanece limpa e seu cão desfruta de sua nova confiança.",
      image: "https://optimalhealthscout.shop/wp-content/uploads/2025/05/imagem_gerada-2025-05-17T181030.559.png",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-emerald-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Como o PataLimpa Funciona</h2>
          <p className="text-lg text-gray-600 max-w-[800px]">
            Nosso processo simples de 4 etapas torna o treinamento de banheiro fácil e eficaz para cães de todas as
            idades e raças.
          </p>

          {/* Scientific backing */}
          <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200 max-w-3xl">
            <h3 className="text-xl font-bold mb-3">Respaldado pela Ciência</h3>
            <p className="text-gray-700 mb-4">
              O método PataLimpa é baseado em pesquisas de neurociência canina da Universidade de Cornell e do Centro de
              Cognição Canina. Nosso método foi testado e aprovado por veterinários comportamentais.
            </p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <img
                src="https://optimalhealthscout.shop/wp-content/uploads/2025/05/cornell-university-gmos-scaled.jpg"
                alt="Universidade de Cornell"
                className="h-16"
              />
            </div>
          </div>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 bg-emerald-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                  <div className="rounded-xl overflow-hidden border-8 border-white shadow-xl">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>

                {index === steps.length - 1 && (
                  <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Link href="#pricing">Comece Hoje</Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Before/After comparison */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Veja a Transformação Real</h3>
          <BeforeAfterComparison />
        </div>

        {/* Limited spots */}
        <div className="mt-16 bg-white p-6 rounded-lg border-2 border-red-200 max-w-2xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-red-600 mb-2">Vagas Limitadas!</h3>
            <p className="text-gray-700 mb-4">
              Para garantir suporte de qualidade, estamos limitando o acesso a apenas{" "}
              <span className="font-bold">50 novos clientes hoje</span>.
            </p>
            <div className="bg-gray-100 rounded-full h-4 mb-4">
              <div className="bg-red-500 h-4 rounded-full" style={{ width: "78%" }}></div>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-bold">39 de 50</span> vagas preenchidas
            </p>
            <Button asChild className="mt-4 bg-red-600 hover:bg-red-700 text-white">
              <Link href="#pricing">Garantir Minha Vaga Agora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
