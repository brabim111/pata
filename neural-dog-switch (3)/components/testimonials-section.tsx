import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { SkepticalTestimonial } from "./skeptical-testimonial"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ana Silva",
      location: "São Paulo, SP",
      image: "https://optimalhealthscout.shop/wp-content/uploads/2025/05/01.png",
      rating: 5,
      text: "Meu Labrador de 8 meses estava tendo acidentes diariamente apesar de tentar de tudo. Em 4 dias usando o PataLimpa, ele estava completamente treinado! É como um milagre.",
      dogBreed: "Labrador",
      dogAge: "8 meses",
      highlight: true,
    },
    {
      name: "Carlos Oliveira",
      location: "Rio de Janeiro, RJ",
      image: "https://optimalhealthscout.shop/wp-content/uploads/2025/05/05.png",
      rating: 5,
      text: "Nossa cadela resgatada idosa estava tendo acidentes há anos. Pensávamos que era apenas a idade dela, mas depois de usar este método, ela não teve um único acidente em 3 semanas. Incrível!",
      dogBreed: "Vira-lata",
      dogAge: "9 anos",
      highlight: false,
    },
    {
      name: "Juliana Santos",
      location: "Belo Horizonte, MG",
      image: "https://optimalhealthscout.shop/wp-content/uploads/2025/05/02.png",
      rating: 5,
      text: "Como treinadora profissional de cães, eu estava cética. Mas depois de ver os resultados com os cães dos meus clientes, agora estou recomendando o PataLimpa para todos. Funciona quando nada mais funciona.",
      dogBreed: "Diversos",
      dogAge: "Variadas",
      highlight: true,
    },
    {
      name: "Pedro Costa",
      location: "Porto Alegre, RS",
      image: "https://optimalhealthscout.shop/wp-content/uploads/2025/05/04.png",
      rating: 4,
      text: "Nosso Beagle teimoso levou uma semana inteira para entender, mas agora ele está perfeitamente treinado. As instruções passo a passo tornaram fácil de seguir, mesmo para donos de cães de primeira viagem como nós.",
      dogBreed: "Beagle",
      dogAge: "1 ano",
      highlight: false,
    },
    {
      name: "Fernanda Almeida",
      location: "Curitiba, PR",
      image: "https://optimalhealthscout.shop/wp-content/uploads/2025/05/03.png",
      rating: 5,
      text: "Eu estava no meu limite com os acidentes do meu Yorkshire. Nada funcionava até que experimentei o PataLimpa. Em 3 dias, transformação completa. Meus tapetes agradecem!",
      dogBreed: "Yorkshire",
      dogAge: "2 anos",
      highlight: false,
    },
    {
      name: "João Pereira",
      location: "Salvador, BA",
      image: "https://optimalhealthscout.shop/wp-content/uploads/2025/05/06.png",
      rating: 5,
      text: "Nosso filhote estava nos deixando loucos com acidentes constantes. Depois de usar este método, ele agora vai até a porta quando precisa sair. O melhor dinheiro que já gastei em treinamento de cães.",
      dogBreed: "Golden Retriever",
      dogAge: "4 meses",
      highlight: false,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Histórias de Sucesso de Donos Felizes</h2>
          <p className="text-lg text-gray-600 max-w-[800px]">
            Junte-se a milhares de donos de cães que transformaram os hábitos de banheiro de seus pets com nosso método.
          </p>

          <div className="flex items-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-medium">4.9 de 5 estrelas (2.347 avaliações)</span>
          </div>

          {/* Verification badge */}
          <div className="mt-4 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Todas as avaliações verificadas por TrustDog
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="mb-12 bg-emerald-50 rounded-xl p-6 border border-emerald-100 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3">
              <div className="relative">
                <img
                  src={testimonials[0].image || "/placeholder.svg"}
                  alt={testimonials[0].name}
                  className="rounded-lg w-full h-auto object-cover"
                />
                <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-md">
                  <Quote className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-lg italic mb-4">"{testimonials[0].text}"</p>

              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-bold">{testimonials[0].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[0].location}</p>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-lg p-3 inline-block">
                <p className="text-sm">
                  <span className="font-medium">Raça do cão:</span> {testimonials[0].dogBreed} |
                  <span className="font-medium ml-2">Idade:</span> {testimonials[0].dogAge} |
                  <span className="font-medium ml-2">Tempo para resultados:</span> 4 dias
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skeptical testimonial */}
        <SkepticalTestimonial
          image={testimonials[2].image}
          name={testimonials[2].name}
          location={testimonials[2].location}
          text={testimonials[2].text}
        />

        {/* Regular testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials
            .filter((_, index) => index !== 0 && index !== 2)
            .map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-emerald-100 transition-all duration-300 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="rounded-full w-[60px] h-[60px] object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 mb-3">{testimonial.text}</p>

                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Raça:</span> {testimonial.dogBreed} |
                    <span className="font-medium ml-1">Idade:</span> {testimonial.dogAge}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Social proof counter */}
        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-4">Junte-se aos milhares de donos de cães satisfeitos:</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-50 p-4 rounded-lg min-w-[150px]">
              <div className="text-3xl font-bold text-emerald-600">10.347+</div>
              <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg min-w-[150px]">
              <div className="text-3xl font-bold text-emerald-600">97%</div>
              <div className="text-sm text-gray-600">Taxa de Sucesso</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg min-w-[150px]">
              <div className="text-3xl font-bold text-emerald-600">4.9/5</div>
              <div className="text-sm text-gray-600">Avaliação Média</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg min-w-[150px]">
              <div className="text-3xl font-bold text-emerald-600">3-7</div>
              <div className="text-sm text-gray-600">Dias para Resultados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
