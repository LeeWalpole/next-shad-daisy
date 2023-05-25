"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SheetTrigger } from "@/components/ui/sheet"
import Icon from "@/components/Icons"

// import { ThemeToggle } from "@/components/theme-toggle"

export default function NavSide() {
  const pathname = usePathname()
  return (
    <>
      <nav className="flex flex-col">
        <Link href="/" className="b-2 w-full border-b p-3.5 text-lg">
          <SheetTrigger className="flex w-full flex-row justify-start gap-4 align-middle font-semibold ">
            {pathname === "/" ? (
              <Icon
                name="chat"
                style="solid"
                className="h-6 w-6 text-blue-500"
              />
            ) : (
              <Icon
                name="chat"
                style="solid"
                className="h-6 w-6 text-blue-500"
              />
            )}
            Home
          </SheetTrigger>
        </Link>
        <Link href="/discover" className="b-2 w-full border-b p-3.5  text-lg">
          <SheetTrigger className="flex w-full flex-row justify-start gap-4  align-middle font-semibold ">
            {pathname === "/discover" ? (
              <Icon
                name="chat"
                style="solid"
                className="h-6 w-6 text-blue-500"
              />
            ) : (
              <Icon
                name="chat"
                style="solid"
                className="h-6 w-6 text-blue-500"
              />
            )}
            Discover
          </SheetTrigger>
        </Link>
      </nav>
      <br></br>
    </>
  )
}
