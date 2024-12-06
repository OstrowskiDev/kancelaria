"use client"

import { Header } from "@/ui/components/Header"
import KontaktData from "@/ui/components/KontaktData"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import GoogleDynamicMaps from "@/ui/components/GoogleDynamicMaps"
import ContactForm from "@/ui/components/ContactForm"
import { useDataContext } from "@/lib/context"

export default function Kontakt() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    topic: "",
    content: "",
    name: "",
  })

  const router = useRouter()
  const { contentful } = useDataContext()
  const [isVisible, setIsVisible] = useState(false)

  if (contentful?.team === undefined) {
    router.push("/strona-niedostepna")
    return null
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Header title="Kontakt" />
      <div
        className={`contact-wrapper fade-in-1000 ${isVisible && "make-visible"} bg-white`}
        style={{ minHeight: "calc(100vh - 380px)" }}
      >
        {/* contact data */}
        <div
          className={`contact-container  max-w-[760px] px-3 mx-auto mt-8 mb-16`}
        >
          <KontaktData contentful={contentful} />
        </div>

        {/* google maps */}
        <div
          className={`google-maps-container w-full max-w-[760px] min-w-[296px] px-3 my-24 mx-auto`}
        >
          <h2 className="google-maps-label mb-2 uppercase font-semibold text-xl below-sm:text-center">
            lokalizacja kancelarii
          </h2>
          <GoogleDynamicMaps />
        </div>

        {/* contact form */}
        <div className="contact-form-wrapper flex flex-row w-full pt-8 pb-12 bg-primary-700">
          <ContactForm formData={formData} setFormData={setFormData} />
        </div>
      </div>
    </>
  )
}
