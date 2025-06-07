import React from "react"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tourvisto – Ready For Registration",
    description: "Create your account on Tourvisto to start booking amazing tours worldwide.",
    keywords: "register, create account, tour booking, travel tours, vacation, sightseeing, travel platform",
    authors: [{ name: "Tourvisto Team" }],
    icons: {
        icon: "/fi_2200326.svg",
    },
}
const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout