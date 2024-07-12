"use client"

import { Header } from "@/ui/components/Header"
import KontaktData from "@/ui/components/KontaktData"

import React, { useState } from "react"

import GoogleDynamicMaps from "@/ui/components/GoogleDynamicMaps"
import ContactForm from "@/ui/components/ContactForm"

export default function Kontakt() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    topic: "",
    content: "",
    name: "",
  })

  return (
    <>
      <Header title="Kontakt" />
      <div
        className="contact-wrapper bg-white"
        style={{ minHeight: "calc(100vh - 380px)" }}
      >
        {/* contact data */}
        <div className="contact-container max-w-[760px] mx-auto mt-8 mb-16">
          <KontaktData />
        </div>

        {/* google maps */}
        <div className="google-maps-container w-[760px] my-24 mx-auto">
          <h2 className="google-maps-label mb-2 uppercase font-semibold text-xl">
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
