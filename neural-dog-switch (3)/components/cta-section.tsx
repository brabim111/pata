import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, CheckCircle } from "lucide-react"

export function CtaSection() {
  return (
    <section id="get-started" className="py-20 bg-emerald-600">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Pronto para Transformar os Hábitos de Banheiro do Seu Cão?
          </h2>

          {/* Visualization of success */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-2xl mb-8">
            <p className="text-xl text-emerald-100 italic mb-4">
              "Imagine nunca mais ter que limpar xixi do seu tapete..."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-bold text-white mb-2">Sua vida ANTES do PataLimpa:</h4>
                <ul className="space-y-2 text-emerald-100">
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 mt-1">✗</span>
                    <span>Acordar com cheiro de xixi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 mt-1">✗</span>
                    <span>Constrangimento com visitas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 mt-1">✗</span>
                    <span>Gastos constantes com limpeza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 mt-1">✗</span>
                    <span>Frustração e estresse</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Sua vida DEPOIS do PataLimpa:</h4>
                <ul className="space-y-2 text-emerald-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-300 shrink-0 mt-0.5" />
                    <span>Casa sempre limpa e sem odores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-300 shrink-0 mt-0.5" />
                    <span>Orgulho ao receber visitas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-300 shrink-0 mt-0.5" />
                    <span>Economia significativa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-300 shrink-0 mt-0.5" />
                    <span>Relacionamento harmonioso</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-xl text-emerald-100 max-w-[800px] mb-8">
            Junte-se a milhares de donos de cães felizes que eliminaram acidentes para sempre com o método PataLimpa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 animate-pulse-scale">
              <Link
                href="https://pay.cakto.com.br/vhtf92e?utm_source=website&utm_medium=cta&utm_campaign=complete_plan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Comece Hoje
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="#testimonials">Ver Histórias de Sucesso</Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-emerald-100">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>Garantia de devolução do dinheiro em 30 dias</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>97% de taxa de sucesso comprovada</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Resultados em 3-7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
