"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"

interface CountdownTimerProps {
  hours: number
}

export function CountdownTimer({ hours }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set initial time
    const deadline = new Date()
    deadline.setHours(deadline.getHours() + hours)

    // Update countdown every second
    const updateCountdown = () => {
      const now = new Date()
      const difference = deadline.getTime() - now.getTime()

      if (difference <= 0) {
        // Reset timer when it reaches zero
        const newDeadline = new Date()
        newDeadline.setHours(newDeadline.getHours() + hours)
        deadline.setTime(newDeadline.getTime())
      }

      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ hours, minutes, seconds })
    }

    // Initial update
    updateCountdown()

    // Set interval for updates
    const interval = setInterval(updateCountdown, 1000)

    // Clear interval on unmount
    return () => clearInterval(interval)
  }, [hours])

  return (
    <Card className="bg-red-50 border-red-100 p-4 max-w-md mx-auto">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-red-600 mb-2">
          <Clock className="h-5 w-5" />
          <p className="font-medium">Oferta por tempo limitado!</p>
        </div>

        <div className="flex gap-2 text-center">
          <div className="bg-red-600 text-white rounded-md p-2 min-w-[60px]">
            <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</div>
            <div className="text-xs">Horas</div>
          </div>
          <div className="bg-red-600 text-white rounded-md p-2 min-w-[60px]">
            <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</div>
            <div className="text-xs">Minutos</div>
          </div>
          <div className="bg-red-600 text-white rounded-md p-2 min-w-[60px]">
            <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</div>
            <div className="text-xs">Segundos</div>
          </div>
        </div>

        <p className="mt-3 text-sm text-red-700">Aproveite o desconto antes que o tempo acabe!</p>
      </div>
    </Card>
  )
}
