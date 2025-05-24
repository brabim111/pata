export function SkepticalTestimonial({
  image,
  name,
  location,
  text,
}: {
  image: string
  name: string
  location: string
  text: string
}) {
  return (
    <div className="mb-12 bg-gray-50 rounded-xl p-6 border border-gray-200 max-w-4xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-center">De Cética a Defensora</h3>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="md:w-1/3">
          <div className="relative">
            <img src={image || "/placeholder.svg"} alt={name} className="rounded-lg w-full h-auto object-cover" />
            <div className="absolute top-0 right-0 bg-yellow-400 text-white px-3 py-1 rounded-tr-lg rounded-bl-lg text-sm font-medium">
              Treinadora Profissional
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400 mb-4">
            <p className="text-gray-700 italic mb-2">
              "Inicialmente, eu estava muito cética sobre o método PataLimpa..."
            </p>
          </div>

          <p className="text-lg mb-4">{text}</p>

          <div className="flex items-center gap-4">
            <div>
              <h4 className="font-bold">{name}</h4>
              <p className="text-sm text-gray-500">{location}</p>
              <p className="text-sm text-emerald-600 font-medium mt-1">Treinadora certificada há 8 anos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
