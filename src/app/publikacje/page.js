"use client"

import { Header } from "@/ui/components/Header"
import Link from "next/link"
import EnterIco from "@/ui/icons/EnterIco"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useDataContext } from "@/lib/context"

export default function Publikacje() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const { contentful } = useDataContext()

  if (contentful?.articles === undefined) {
    router.push("/strona-niedostepna")
    return null
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  function authorAvatar(author) {
    return author === "Judyta Ciesielska"
      ? "awatar_j_ciesielska.jpg"
      : "awatar_k_markiewicz.jpg"
  }

  return (
    <>
      <Header title="Publikacje" />
      <div
        className={`articles-container fade-in-1000 ${isVisible && "make-visible"} max-w-[900px] px-3 w-full mt-6 mb-10 mx-auto`}
      >
        {contentful.articles.map((article, index) => {
          const modifiedContent = article.content.replace(/<br\s*\/?>/gi, " ")
          return (
            <div className="articles-container my-12" key={index}>
              <div className="articles-header mb-4">
                <h2 className="articles-title font-semibold text-2xl text-primary-900">
                  {article.title}
                </h2>
                <div className="article-separator border-b-2 border-secondary-300" />
                <h3 className="articles-title relative uppercase font-semibold text-sm text-gray-700 ">
                  {article.author}
                </h3>
              </div>
              <div className="article-container flex flex-row">
                <div className="article-photo below-560:hidden relative w-[240px] h-[240px] border border-secondary-200 shrink-0">
                  <Image
                    src={authorAvatar(article.author)}
                    alt={`article author: ${article.author}`}
                    fill={true}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 25%",
                    }}
                  />
                </div>

                <div className="content-and-link-container flex flex-col pr-3">
                  <p
                    className="article-content h-[217px] above-560:ml-10 text-justify"
                    dangerouslySetInnerHTML={{ __html: modifiedContent }}
                  ></p>
                  <Link
                    className="article-link ml-1 above-560:ml-10 mr-2 mt-[2px] flex flex-row items-center"
                    href="/kontakt"
                  >
                    <p
                      className="article-link-text mr-2 font-semibold font-custom-serif tracking-wide text-gray-500 hover:text-primary-500 border-b-2 border-background-main hover:border-secondary-200"
                      style={{ fontSize: "0.95rem" }}
                    >
                      Przeczytaj całość
                    </p>
                    <EnterIco />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
