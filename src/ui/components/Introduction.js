"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Introduction({ home }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  return (
    <div
      className={`introduction-container fade-in-1000 ${isVisible && "make-visible"} max-w-[900px] px-3 mt-8 mb-16 mx-auto`}
    >
      <h2 className="introduction-title relative top-3 uppercase text-primary-900 below-sm:text-center font-semibold text-2xl">
        {home.introduction.title}
      </h2>
      <div className="separator"></div>
      <div className="introduction-content flex flex-col">
        {/* image for desktop */}
        <div className="introduction-image-desktop below-sm:hidden relative max-h-[480px] h-[50vw] mt-1 border border-secondary-200 shrink-0">
          <Image
            src="zapraszamy.jpg"
            alt="Adwokat Judyta Ciesielska i adwokat Katarzyna Markiewicz uśmiechnięte i siedzące przy stole w kancelarii. Zapraszają do współpracy."
            style={{ objectFit: "cover", objectPosition: "center 80%" }}
            fill={true}
          />
        </div>
        {/* image for mobile */}
        <div className="introduction-image-desktop sm:hidden relative h-[320px] mt-1 border border-secondary-200 shrink-0">
          <Image
            src="zapraszamy_mobile.jpg"
            alt="Adwokat Judyta Ciesielska i adwokat Katarzyna Markiewicz. Zapraszają do współpracy."
            style={{ objectFit: "cover", objectPosition: "65% 10%" }}
            fill={true}
          />
        </div>
        <p
          className="introduction-text mt-4 sm:columns-2 sm:gap-5 text-primary-700 text-justify"
          dangerouslySetInnerHTML={{ __html: home.introduction.content }}
        ></p>
      </div>
    </div>
  )
}
