"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BeakerIcon, HeartIcon } from "@heroicons/react/24/outline"
import {
  BeakerIcon as BeakerSolidIcon,
  HeartIcon as HeartSolidIcon,
} from "@heroicons/react/24/solid"

import { SheetTrigger } from "@/components/ui/sheet"

export default function NavSide() {
  const pathname = usePathname()
  return (
    <nav className="flex flex-col">
      <Link href="/" className="b-2 w-full border-b px-5 py-5 text-lg">
        <SheetTrigger className="flex w-full flex-row justify-start gap-4  align-middle font-semibold ">
          {pathname === "/" ? (
            <BeakerSolidIcon className="h-7 w-7 text-blue-500 " />
          ) : (
            <BeakerIcon className="h-7 w-7" />
          )}
          Home
        </SheetTrigger>
      </Link>
      <Link href="/discover" className="b-2 w-full border-b px-5 py-5 text-lg">
        <SheetTrigger className="flex w-full flex-row justify-start gap-4  align-middle font-semibold ">
          {pathname === "/discover" ? (
            <BeakerSolidIcon className="h-7 w-7 text-blue-500 " />
          ) : (
            <BeakerIcon className="h-7 w-7" />
          )}
          Discover
        </SheetTrigger>
      </Link>
    </nav>
  )
}
