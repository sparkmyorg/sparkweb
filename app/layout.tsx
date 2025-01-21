import "./globals.css"
import { Inter } from "next/font/google"
import { Header } from "./components/header"
import { Footer } from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Spark - Empowering Children",
  description: "Empowering children through education and fun activities",
  icons:{
    icon: '/logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-[#FFF9F0] min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
