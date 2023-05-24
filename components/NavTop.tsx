"use client"

import Link from "next/link"

import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export default function NavTop() {
  return (
    <header className="fixed top-0 z-40 w-full border-b bg-background">
      <nav className="grid w-full auto-cols-fr grid-cols-3">
        <div className="container flex h-16 w-full items-center  justify-start space-x-4 ">
          <Icons.twitter className="h-5 w-5 fill-current" />
        </div>
        <div className="container flex h-16 w-full items-center  justify-center space-x-4 ">
          <Link href="/">
            <Icons.twitter className="h-5 w-5 fill-current" />
          </Link>
          <Link href="/about">
            <Icons.twitter className="h-5 w-5 fill-current" />
          </Link>
        </div>
        <div className="container flex h-16 w-full items-center justify-end space-x-4 ">
          <Icons.twitter className="h-5 w-5 fill-current" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
