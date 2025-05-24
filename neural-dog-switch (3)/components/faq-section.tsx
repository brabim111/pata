"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FaqSection() {
  const faqs = [
    {
      question: "Como isso é diferente dos métodos tradicionais de treinamento?",
      answer:
        "Os métodos tradicionais dependem de repetição ao longo de semanas ou meses. O PataLimpa trabalha com os padrões cerebrais do seu cão para criar mudanças comportamentais rápidas em dias, não meses. É baseado nas mais recentes pesquisas em neurociência canina e se concentra na criação de novos caminhos neurais em vez de apenas condicionamento.",
    },
    {
      question: "Isso funcionará para meu cão mais velho que tem tido acidentes por anos?",
      answer:
        "Sim! O PataLimpa provou ser eficaz para cães de todas as idades, incluindo idosos. Na verdade, muitas de nossas histórias de sucesso mais dramáticas vêm de donos de cães mais velhos que haviam perdido a esperança após anos de acidentes.",
    },
    {
      question: "Este método é humano? Usa punição?",
      answer:
        "O PataLimpa é 100% livre de força e usa apenas reforço positivo. Não há absolutamente nenhuma punição, medo ou intimidação envolvida. O método funciona recompensando comportamentos desejados e criando associações positivas com hábitos adequados de banheiro.",
    },
    {
      question: "Quanto tempo levará para ver resultados?",
      answer:
        "A maioria dos donos de cães vê melhora significativa dentro de 3-7 dias. Alguns cães podem levar até 14 dias, particularmente em casos onde o comportamento indesejado tem acontecido por anos. O método inclui marcos claros para que você possa acompanhar seu progresso.",
    },
    {
      question: "Preciso de algum equipamento ou suprimentos especiais?",
      answer:
        "Nenhum equipamento especial é necessário. O PataLimpa usa itens domésticos simples e nosso guia passo a passo. Tudo o que você precisa está incluído no programa, e fornecemos uma lista completa de suprimentos para os poucos itens comuns que você usará.",
    },
    {
      question: "E se não funcionar para o meu cão?",
      answer:
        "Embora o PataLimpa tenha uma taxa de sucesso de 97%, entendemos que cada cão é único. É por isso que oferecemos uma garantia de devolução do dinheiro em 30 dias. Se você não vir melhora significativa nos hábitos de banheiro do seu cão, basta nos contatar para um reembolso total.",
    },
    {
      question: "Este método pode ser usado para filhotes?",
      answer:
        "O PataLimpa funciona maravilhosamente para filhotes e pode realmente reduzir o período típico de treinamento de banheiro de meses para apenas dias. É suave o suficiente para filhotes jovens, sendo altamente eficaz.",
    },
    {
      question: "Quanto tempo por dia este treinamento requer?",
      answer:
        "O método requer cerca de 20-30 minutos de treinamento focado por dia, além de alguns breves períodos de monitoramento. Foi projetado para se adequar a estilos de vida ocupados, proporcionando resultados rápidos.",
    },
    {
      question: "O método funciona para todos os tipos de problemas de xixi?",
      answer:
        "Sim, o PataLimpa foi desenvolvido para abordar todos os tipos de problemas de xixi em casa, incluindo marcação territorial, ansiedade de separação, problemas relacionados à idade e treinamento básico de filhotes. O guia inclui seções específicas para cada tipo de problema.",
    },
    {
      question: "Posso aplicar o método se trabalho fora o dia todo?",
      answer:
        "Absolutamente! O método inclui estratégias específicas para donos que trabalham fora de casa. Muitos de nossos clientes mais bem-sucedidos são pessoas ocupadas que implementaram o PataLimpa mesmo com horários de trabalho exigentes.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-emerald-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600 max-w-[800px]">Tudo o que você precisa saber sobre o método PataLimpa.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 max-w-3xl mx-auto bg-red-50 p-6 rounded-lg border border-red-100">
            <h3 className="text-xl font-bold text-red-800 mb-4">O Custo da Inação</h3>
            <p className="text-gray-700 mb-4">Cada dia que passa sem resolver o problema de xixi do seu cão:</p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">✓</span>
                <span>Você gasta em média R$10-30 em produtos de limpeza e tapetes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">✓</span>
                <span>Seus móveis e pisos continuam sofrendo danos permanentes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">✓</span>
                <span>O odor de urina se impregna cada vez mais em sua casa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">✓</span>
                <span>Seu relacionamento com seu cão continua estressante</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">✓</span>
                <span>Você perde tempo precioso limpando acidentes repetidamente</span>
              </li>
            </ul>

            <div className="text-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="#pricing">Resolver Este Problema Agora</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
