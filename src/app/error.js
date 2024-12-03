"use client"

import { useEffect, useState } from "react"

export default function Error() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <mian
      className={`error-handler flex items-center justify-center py-32 fade-in-500 ${isVisible && "make-visible"}`}
      style={{ height: "calc(100vh - 80px - 60px)" }}
    >
      <div className="error-handler error-message-wrapper px-6 pt-16 pb-16 w-full bg-primary-700">
        <h2 className="error-handler-title my-6 uppercase text-center text-white font-semibold text-2xl">
          Strona jest obecnie niedostępna
        </h2>
      </div>
    </mian>
  )
}

//
