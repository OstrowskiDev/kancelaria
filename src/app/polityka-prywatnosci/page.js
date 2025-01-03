"use client"

import { Header } from "@/ui/components/Header"
import { useRouter } from "next/navigation"
import { useDataContext } from "@/lib/context"
import { useEffect } from "react"

export default function PolitykaPrywantosci() {
  const router = useRouter()
  const { contentful } = useDataContext()

  useEffect(() => {
    if (contentful?.rodo === undefined) {
      router.push("/strona-niedostepna")
    }
  }, [])

  return (
    <>
      <Header title={contentful.rodo.title} />
      <div className="rodo-container max-w-[900px] mx-auto mt-8 mb-16">
        <div className="rodo-content flex flex-row">
          <p
            className="rodo-text text-primary-700 text-justify mr-8"
            dangerouslySetInnerHTML={{ __html: contentful.rodo.description }}
          ></p>
        </div>
      </div>
    </>
  )
}
