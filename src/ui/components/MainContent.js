"use client"

import { DataProvider } from "@/lib/context"

export function MainContent({ children, contentful }) {
  return (
    <DataProvider value={{ contentful }}>
      <main className="main-content flex flex-col">{children}</main>
    </DataProvider>
  )
}
