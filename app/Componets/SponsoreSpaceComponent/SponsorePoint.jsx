import React from 'react'
import { CheckCircle } from 'lucide-react'

const SponsorePoint = () => {
  const points = [
    "Flexible monthly plans",
    "No long-term contracts",
    "14-day money-back guarantee",
  ]

  return (
    <div className="space-y-3">
      {points.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <CheckCircle className="text-orange-400" size={20} />
          <p className="text-gray-300">{item}</p>
        </div>
      ))}
    </div>
  )
}

export default SponsorePoint
